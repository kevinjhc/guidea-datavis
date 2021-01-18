(this["webpackJsonpdata-viz"]=this["webpackJsonpdata-viz"]||[]).push([[0],{331:function(e,t,a){},332:function(e,t,a){},334:function(e,t,a){},481:function(e,t,a){"use strict";a.r(t);var o=a(4),l=a(0),i=a.n(l),s=a(37),r=a.n(s),c=(a(331),a(11)),n=a(12),y=a(56),x=a(18),h=a(19),C=(a(332),a(312)),d=a(311),g=(a(334),a(335),a(58)),m=[{value:"theme1",label:"Example Light Theme",palettes:{qualitative:g.theme1.qualitativeLight,sequential:g.theme1.sequentialBlue,diverging:g.theme1.diverging,semantic:g.theme1.semantic},pageSettings:{backgroundColor:"#FFFFFF",textColor:"#000000"}},{value:"theme2",label:"Example Dark Theme",palettes:{qualitative:g.theme2.qualitativeDark,sequential:g.theme2.sequentialPurple,diverging:g.theme2.diverging,semantic:g.theme2.semantic},pageSettings:{backgroundColor:"#000000",textColor:"#FFFFFF"}}],u=function(e){Object(x.a)(a,e);var t=Object(h.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).handleThemeChange=function(e){o.setState({theme:e.value,backgroundColor:e.pageSettings.backgroundColor,textColor:e.pageSettings.textColor,palettes:e.palettes}),o.props.onThemeChange(e.value),o.props.onBackgroundColorChange(e.pageSettings.backgroundColor),o.props.onTextColorChange(e.pageSettings.textColor),o.props.onPalettesChange(e.palettes)},o.handleSeriesScaleChange=function(e){o.setState({seriesScale:e}),o.props.onSeriesScaleChange(e)},o.state={backgroundColor:o.props.backgroundColor,textColor:o.props.textColor,theme:o.props.theme,palettes:o.props.palettes,seriesScale:3},o}return Object(n.a)(a,[{key:"render",value:function(){return Object(o.jsx)("div",{className:"sidebar shadow-lg",children:Object(o.jsxs)("div",{className:"sidebar-menu",children:[Object(o.jsx)("div",{className:"sidebar-brand",children:Object(o.jsxs)("div",{children:["Data Vis Palette Tool",Object(o.jsx)("p",{className:"font-size-12 mt-0 text-muted",children:"By: Kevin Chang"})]})}),Object(o.jsx)("div",{className:"sidebar-divider mb-10"}),Object(o.jsx)("h5",{className:"sidebar-title",children:"Theme"}),Object(o.jsx)("div",{className:"sidebar-link select mb-5",children:Object(o.jsx)(C.a,{defaultValue:m[0],options:m,onChange:this.handleThemeChange})}),Object(o.jsx)("div",{className:"sidebar-divider my-10"}),Object(o.jsx)("h5",{className:"sidebar-title",children:"Chart Complexity"}),Object(o.jsx)("div",{className:"sidebar-link select",style:{padding:"6px 20px 24px"},children:Object(o.jsx)(d.a,{min:1,max:5,defaultValue:3,marks:{1:"Low",3:"Medium",5:"High"},step:null,onChange:this.handleSeriesScaleChange})})]})})}}]),a}(l.Component),b=a(29),j=a.n(b),p=a(108),S=(a(58),[{id:"1",value:83},{id:"2",value:83},{id:"3",value:36},{id:"4",value:54},{id:"5",value:13},{id:"6",value:128}]),f=function(e){Object(x.a)(a,e);var t=Object(h.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).state={textColor:o.props.textColor,colorScale:o.props.colorScale,seriesScale:o.props.seriesScale},o}return Object(n.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({textColor:e.textColor,colorScale:e.colorScale,seriesScale:e.seriesScale})}},{key:"render",value:function(){var e;return 1===this.state.seriesScale?(e=S.slice(0,1),["1"]):3===this.state.seriesScale?(e=S.slice(0,3),["1","2","3"]):5===this.state.seriesScale&&(e=S,["1","2","3","4","5","6"]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(p.a,{data:e,margin:{top:20,right:20,bottom:50,left:60},padding:.3,colors:this.state.colorScale,axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:"X-axis",legendPosition:"middle",legendOffset:32},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:"Y-axis",legendPosition:"middle",legendOffset:-40,symbolShape:"circle"},enableLabel:!1,isInteractive:!1,theme:{textColor:this.state.textColor,axis:{ticks:{line:{stroke:j()(this.state.textColor).alpha(.2).hex()}}},grid:{line:{stroke:j()(this.state.textColor).alpha(.2).hex()}}}})})}}]),a}(l.Component),v=(a(58),[{id:"1",Category:83,"Category 2":129,"Category 3":74,"Category 4":74,"Category 5":74,"Category 6":114},{id:"2",Category:83,"Category 2":113,"Category 3":131,"Category 4":74,"Category 5":74,"Category 6":68},{id:"3",Category:36,"Category 2":53,"Category 3":191,"Category 4":74,"Category 5":74,"Category 6":134},{id:"4",Category:54,"Category 2":52,"Category 3":177,"Category 4":74,"Category 5":74,"Category 6":124},{id:"5",Category:13,"Category 2":160,"Category 3":188,"Category 4":74,"Category 5":74,"Category 6":144},{id:"6",Category:128,"Category 2":34,"Category 3":6,"Category 4":74,"Category 5":74,"Category 6":154}]),O=function(e){Object(x.a)(a,e);var t=Object(h.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).state={textColor:o.props.textColor,colorScale:o.props.colorScale,seriesScale:o.props.seriesScale},o}return Object(n.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({textColor:e.textColor,colorScale:e.colorScale,seriesScale:e.seriesScale})}},{key:"render",value:function(){var e,t,a=[];if(1===this.state.seriesScale){e=v;for(var l=0;l<e.length;l++){(i={}).id=l,i.Category=e[l].Category,i["Category 2"]=e[l]["Category 2"],a.push(i)}t=["Category","Category 2"]}else if(3===this.state.seriesScale){e=v;for(l=0;l<e.length;l++){var i;(i={}).id=l,i.Category=e[l].Category,i["Category 2"]=e[l]["Category 2"],i["Category 3"]=e[l]["Category 3"],a.push(i)}t=["Category","Category 2","Category 3"]}else 5===this.state.seriesScale&&(a=v,t=["Category","Category 2","Category 3","Category 4","Category 5","Category 6"]);return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(p.a,{data:a,keys:t,margin:{top:20,right:130,bottom:50,left:60},padding:.3,innerPadding:1,colors:this.state.colorScale,valueScale:{type:"linear"},axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:"X-axis",legendPosition:"middle",legendOffset:32},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:"Y-axis",legendPosition:"middle",legendOffset:-40},legends:[{dataFrom:"keys",anchor:"bottom-right",direction:"column",justify:!1,translateX:120,translateY:0,itemsSpacing:2,itemWidth:80,itemHeight:20,itemDirection:"left-to-right",itemOpacity:.75,symbolSize:12,symbolShape:"circle"}],enableLabel:!1,isInteractive:!1,theme:{textColor:this.state.textColor,axis:{ticks:{line:{stroke:j()(this.state.textColor).alpha(.2).hex()}}},grid:{line:{stroke:j()(this.state.textColor).alpha(.2).hex()}}}})})}}]),a}(l.Component),k=(a(58),[{id:"1",Category:83,"Category 2":129,"Category 3":74,"Category 4":74,"Category 5":74,"Category 6":114},{id:"2",Category:83,"Category 2":113,"Category 3":131,"Category 4":74,"Category 5":74,"Category 6":68},{id:"3",Category:36,"Category 2":53,"Category 3":191,"Category 4":74,"Category 5":74,"Category 6":134},{id:"4",Category:54,"Category 2":52,"Category 3":177,"Category 4":74,"Category 5":74,"Category 6":124},{id:"5",Category:13,"Category 2":160,"Category 3":188,"Category 4":74,"Category 5":74,"Category 6":144},{id:"6",Category:128,"Category 2":34,"Category 3":6,"Category 4":74,"Category 5":74,"Category 6":154}]),F=function(e){Object(x.a)(a,e);var t=Object(h.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).state={textColor:o.props.textColor,colorScale:o.props.colorScale,seriesScale:o.props.seriesScale},o}return Object(n.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({textColor:e.textColor,colorScale:e.colorScale,seriesScale:e.seriesScale})}},{key:"render",value:function(){var e,t,a=[];if(1===this.state.seriesScale){e=k;for(var l=0;l<e.length;l++){(i={}).id=l,i.Category=e[l].Category,i["Category 2"]=e[l]["Category 2"],a.push(i)}t=["Category","Category 2"]}else if(3===this.state.seriesScale){e=k;for(l=0;l<e.length;l++){var i;(i={}).id=l,i.Category=e[l].Category,i["Category 2"]=e[l]["Category 2"],i["Category 3"]=e[l]["Category 3"],a.push(i)}t=["Category","Category 2","Category 3"]}else 5===this.state.seriesScale&&(a=k,t=["Category","Category 2","Category 3","Category 4","Category 5","Category 6"]);return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(p.a,{data:a,keys:t,margin:{top:20,right:130,bottom:50,left:60},padding:.3,innerPadding:2,groupMode:"grouped",colors:this.state.colorScale,axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:"X-axis",legendPosition:"middle",legendOffset:32},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:"Y-axis",legendPosition:"middle",legendOffset:-40},legends:[{dataFrom:"keys",anchor:"bottom-right",direction:"column",justify:!1,translateX:120,translateY:0,itemsSpacing:2,itemWidth:80,itemHeight:20,itemDirection:"left-to-right",itemOpacity:.75,symbolSize:12,symbolShape:"circle"}],enableLabel:!1,isInteractive:!1,theme:{textColor:this.state.textColor,axis:{ticks:{line:{stroke:j()(this.state.textColor).alpha(.2).hex()}}},grid:{line:{stroke:j()(this.state.textColor).alpha(.2).hex()}}}})})}}]),a}(l.Component),K=a(158),A=(a(58),[{id:"Category 1",data:[{x:"1",y:47},{x:"2",y:276},{x:"3",y:8},{x:"4",y:156},{x:"5",y:174},{x:"6",y:284}]},{id:"Category 2",data:[{x:"1",y:269},{x:"2",y:109},{x:"3",y:146},{x:"4",y:157},{x:"5",y:225},{x:"6",y:248}]},{id:"Category 3",data:[{x:"1",y:9},{x:"2",y:185},{x:"3",y:4},{x:"4",y:236},{x:"5",y:177},{x:"6",y:73}]},{id:"Category 4",data:[{x:"1",y:47},{x:"2",y:276},{x:"3",y:8},{x:"4",y:156},{x:"5",y:174},{x:"6",y:284}]},{id:"Category 5",data:[{x:"1",y:47},{x:"2",y:276},{x:"3",y:8},{x:"4",y:156},{x:"5",y:174},{x:"6",y:284}]},{id:"Category 6",data:[{x:"1",y:47},{x:"2",y:276},{x:"3",y:8},{x:"4",y:156},{x:"5",y:174},{x:"6",y:284}]}]),D=function(e){Object(x.a)(a,e);var t=Object(h.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).state={textColor:o.props.textColor,colorScale:o.props.colorScale,seriesScale:o.props.seriesScale},o}return Object(n.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({textColor:e.textColor,colorScale:e.colorScale,seriesScale:e.seriesScale})}},{key:"render",value:function(){var e;return 1===this.state.seriesScale?e=A.slice(0,1):3===this.state.seriesScale?e=A.slice(0,3):5===this.state.seriesScale&&(e=A),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(K.a,{data:e,margin:{top:20,right:110,bottom:50,left:60},xScale:{type:"point"},yScale:{type:"linear",min:"auto",max:"auto",stacked:!0,reverse:!1},yFormat:" >-.2f",colors:this.state.colorScale,axisTop:null,axisRight:null,axisBottom:{orient:"bottom",tickSize:5,tickPadding:5,tickRotation:0,legend:"X-axis",legendOffset:36,legendPosition:"middle"},axisLeft:{orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:"Y-axis",legendOffset:-40,legendPosition:"middle"},pointSize:6,pointBorderWidth:2,pointBorderColor:{from:"serieColor"},pointLabelYOffset:-12,legends:[{anchor:"bottom-right",direction:"column",justify:!1,translateX:100,translateY:0,itemsSpacing:2,itemDirection:"left-to-right",itemWidth:80,itemHeight:20,itemOpacity:.75,symbolSize:12,symbolShape:"circle"}],enableLabel:!1,isInteractive:!1,theme:{textColor:this.state.textColor,axis:{ticks:{line:{stroke:j()(this.state.textColor).alpha(.2).hex()}}},grid:{line:{stroke:j()(this.state.textColor).alpha(.2).hex()}}}})})}}]),a}(l.Component),B=(a(58),[{id:"Category 1",data:[{x:"1",y:47},{x:"2",y:276},{x:"3",y:8},{x:"4",y:156},{x:"5",y:174},{x:"6",y:284}]},{id:"Category 2",data:[{x:"1",y:269},{x:"2",y:109},{x:"3",y:146},{x:"4",y:157},{x:"5",y:225},{x:"6",y:248}]},{id:"Category 3",data:[{x:"1",y:9},{x:"2",y:185},{x:"3",y:4},{x:"4",y:236},{x:"5",y:177},{x:"6",y:73}]},{id:"Category 4",data:[{x:"1",y:47},{x:"2",y:276},{x:"3",y:8},{x:"4",y:156},{x:"5",y:174},{x:"6",y:284}]},{id:"Category 5",data:[{x:"1",y:47},{x:"2",y:276},{x:"3",y:8},{x:"4",y:156},{x:"5",y:174},{x:"6",y:284}]},{id:"Category 6",data:[{x:"1",y:47},{x:"2",y:276},{x:"3",y:8},{x:"4",y:156},{x:"5",y:174},{x:"6",y:284}]}]),P=function(e){Object(x.a)(a,e);var t=Object(h.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).state={textColor:o.props.textColor,colorScale:o.props.colorScale,seriesScale:o.props.seriesScale},o}return Object(n.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({textColor:e.textColor,colorScale:e.colorScale,seriesScale:e.seriesScale})}},{key:"render",value:function(){var e;return 1===this.state.seriesScale?e=B.slice(0,1):3===this.state.seriesScale?e=B.slice(0,3):5===this.state.seriesScale&&(e=B),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(K.a,{data:e,margin:{top:20,right:110,bottom:50,left:60},xScale:{type:"point"},yScale:{type:"linear",min:"auto",max:"auto",stacked:!0,reverse:!1},yFormat:" >-.2f",colors:this.state.colorScale,axisTop:null,axisRight:null,enableArea:!0,axisBottom:{orient:"bottom",tickSize:5,tickPadding:5,tickRotation:0,legend:"X-axis",legendOffset:36,legendPosition:"middle"},axisLeft:{orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:"Y-axis",legendOffset:-40,legendPosition:"middle"},pointSize:6,pointBorderWidth:2,pointBorderColor:{from:"serieColor"},pointLabelYOffset:-12,legends:[{anchor:"bottom-right",direction:"column",justify:!1,translateX:100,translateY:0,itemsSpacing:2,itemDirection:"left-to-right",itemWidth:80,itemHeight:20,itemOpacity:.75,symbolSize:12,symbolShape:"circle"}],enableLabel:!1,isInteractive:!1,theme:{textColor:this.state.textColor,axis:{ticks:{line:{stroke:j()(this.state.textColor).alpha(.2).hex()}}},grid:{line:{stroke:j()(this.state.textColor).alpha(.2).hex()}}}})})}}]),a}(l.Component),N=a(309),E=(a(58),[{id:"Category 1",data:[{x:31,y:26},{x:66,y:1},{x:76,y:11},{x:4,y:110},{x:5,y:68},{x:27,y:62},{x:8,y:86},{x:85,y:92},{x:95,y:113},{x:45,y:106},{x:60,y:50},{x:17,y:106},{x:82,y:97},{x:26,y:108},{x:50,y:81},{x:13,y:110},{x:100,y:12},{x:69,y:51},{x:25,y:55},{x:91,y:11},{x:47,y:17},{x:21,y:18},{x:58,y:103},{x:100,y:59}]},{id:"Category 2",data:[{x:1,y:52},{x:44,y:100},{x:63,y:6},{x:81,y:71},{x:77,y:8},{x:44,y:76},{x:89,y:37},{x:55,y:89},{x:21,y:92},{x:39,y:88},{x:70,y:20},{x:82,y:22},{x:11,y:78},{x:19,y:69},{x:70,y:7},{x:97,y:17},{x:19,y:42},{x:7,y:65},{x:49,y:101},{x:65,y:8},{x:62,y:115},{x:45,y:69},{x:42,y:31},{x:91,y:49},{x:4,y:113},{x:41,y:11},{x:11,y:83},{x:59,y:112},{x:72,y:61},{x:24,y:118},{x:32,y:65}]},{id:"Category 3",data:[{x:6,y:68},{x:86,y:35},{x:61,y:44},{x:95,y:82},{x:27,y:48},{x:31,y:8},{x:66,y:36},{x:4,y:90},{x:93,y:43},{x:60,y:109},{x:0,y:26},{x:53,y:57},{x:67,y:47},{x:30,y:33},{x:14,y:10},{x:51,y:23},{x:49,y:43},{x:7,y:29},{x:9,y:67},{x:10,y:82},{x:81,y:28},{x:3,y:9}]},{id:"Category 4",data:[{x:21,y:25},{x:46,y:13},{x:36,y:11},{x:45,y:10},{x:50,y:6},{x:37,y:52},{x:18,y:66},{x:25,y:42},{x:45,y:13},{x:35,y:16},{x:80,y:50},{x:37,y:146},{x:22,y:97},{x:25,y:88},{x:40,y:51}]},{id:"Category 5",data:[{x:11,y:55},{x:40,y:10},{x:68,y:46},{x:52,y:28},{x:21,y:78},{x:79,y:49},{x:40,y:17},{x:87,y:14},{x:29,y:44},{x:14,y:123},{x:61,y:31},{x:111,y:83},{x:39,y:102},{x:32,y:81},{x:14,y:89},{x:22,y:45}]},{id:"Category 6",data:[{x:11,y:26},{x:63,y:1},{x:46,y:11},{x:42,y:110},{x:55,y:68},{x:47,y:62},{x:18,y:86},{x:45,y:92},{x:45,y:113},{x:55,y:106},{x:70,y:50},{x:27,y:106},{x:52,y:97},{x:76,y:108},{x:60,y:81},{x:113,y:110},{x:50,y:12},{x:99,y:51},{x:35,y:55},{x:21,y:11},{x:57,y:17},{x:121,y:18},{x:48,y:103},{x:20,y:59}]}]),L=function(e){Object(x.a)(a,e);var t=Object(h.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).state={textColor:o.props.textColor,colorScale:o.props.colorScale,seriesScale:o.props.seriesScale},o}return Object(n.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({textColor:e.textColor,colorScale:e.colorScale,seriesScale:e.seriesScale})}},{key:"render",value:function(){var e;return 1===this.state.seriesScale?e=E.slice(0,1):3===this.state.seriesScale?e=E.slice(0,3):5===this.state.seriesScale&&(e=E),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(N.a,{data:e,margin:{top:20,right:140,bottom:70,left:90},xScale:{type:"linear",min:0,max:"auto"},xFormat:function(e){return e+" kg"},yScale:{type:"linear",min:0,max:"auto"},yFormat:function(e){return e+" cm"},colors:this.state.colorScale,blendMode:"multiply",axisTop:null,axisRight:null,axisBottom:{orient:"bottom",tickSize:5,tickPadding:5,tickRotation:0,legend:"X-axis",legendPosition:"middle",legendOffset:46},axisLeft:{orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:"Y-axis",legendPosition:"middle",legendOffset:-60},legends:[{anchor:"bottom-right",direction:"column",justify:!1,translateX:100,translateY:0,itemsSpacing:2,itemDirection:"left-to-right",itemWidth:80,itemHeight:20,itemOpacity:.75,symbolSize:12,symbolShape:"circle"}],enableLabel:!1,isInteractive:!1,theme:{textColor:this.state.textColor,axis:{ticks:{line:{stroke:j()(this.state.textColor).alpha(.2).hex()}}},grid:{line:{stroke:j()(this.state.textColor).alpha(.2).hex()}}}})})}}]),a}(l.Component),q=a(314),R=(a(58),[{id:"Category 1",label:"Category 1",value:422},{id:"Category 2",label:"Category 2",value:120},{id:"Category 3",label:"Category 3",value:506},{id:"Category 4",label:"Category 4",value:295},{id:"Category 5",label:"Category 5",value:439},{id:"Category 6",label:"Category 6",value:79}]),T=function(e){Object(x.a)(a,e);var t=Object(h.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).state={textColor:o.props.textColor,colorScale:o.props.colorScale,seriesScale:o.props.seriesScale},o}return Object(n.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({textColor:e.textColor,colorScale:e.colorScale,seriesScale:e.seriesScale})}},{key:"render",value:function(){var e;return 1===this.state.seriesScale?e=R.slice(0,1):3===this.state.seriesScale?e=R.slice(0,3):5===this.state.seriesScale&&(e=R),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(q.a,{data:e,margin:{top:20,right:80,bottom:80,left:80},innerRadius:.5,padAngle:.7,colors:this.state.colorScale,radialLabelsSkipAngle:10,radialLabelsLinkColor:{from:"color"},sliceLabelsSkipAngle:10,legends:[{anchor:"bottom",direction:"row",justify:!1,translateX:0,translateY:56,itemsSpacing:0,itemWidth:80,itemHeight:20,itemDirection:"left-to-right",itemOpacity:1,symbolSize:12,symbolShape:"circle"}],enableSliceLabels:!1,enableLabel:!1,isInteractive:!1,theme:{textColor:this.state.textColor,axis:{ticks:{line:{stroke:j()(this.state.textColor).alpha(.2).hex()}}},grid:{line:{stroke:j()(this.state.textColor).alpha(.2).hex()}}}})})}}]),a}(l.Component),z=a(313),w=(a(58),[{attribute:"Attribute 1",Category:64,"Category 2":73,"Category 3":57,"Category 4":57,"Category 5":57,"Category 6":57},{attribute:"Attribute 2",Category:20,"Category 2":94,"Category 3":102,"Category 4":57,"Category 5":57,"Category 6":57},{attribute:"Attribute 3",Category:41,"Category 2":21,"Category 3":106,"Category 4":57,"Category 5":57,"Category 6":57},{attribute:"Attribute 4",Category:53,"Category 2":78,"Category 3":105,"Category 4":57,"Category 5":57,"Category 6":57},{attribute:"Attribute 5",Category:86,"Category 2":39,"Category 3":48,"Category 4":57,"Category 5":57,"Category 6":57}]),W=function(e){Object(x.a)(a,e);var t=Object(h.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).state={textColor:o.props.textColor,colorScale:o.props.colorScale,seriesScale:o.props.seriesScale},o}return Object(n.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({textColor:e.textColor,colorScale:e.colorScale,seriesScale:e.seriesScale})}},{key:"render",value:function(){var e,t,a=[];if(1===this.state.seriesScale){e=w;for(var l=0;l<e.length;l++){(i={}).attribute="Attribute "+l,i.Category=e[l].Category,a.push(i)}t=["Category"]}else if(3===this.state.seriesScale){e=w;for(l=0;l<e.length;l++){var i;(i={}).attribute="Attribute "+l,i.Category=e[l].Category,i["Category 2"]=e[l]["Category 2"],i["Category 3"]=e[l]["Category 3"],a.push(i)}t=["Category","Category 2","Category 3"]}else 5===this.state.seriesScale&&(a=w,t=["Category","Category 2","Category 3","Category 4","Category 5","Category 6"]);return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(z.a,{data:a,keys:t,indexBy:"attribute",maxValue:"auto",margin:{top:70,right:80,bottom:40,left:80},borderWidth:2,borderColor:{from:"color"},gridLevels:5,gridShape:"circular",gridLabelOffset:36,enableDots:!0,dotSize:10,dotBorderWidth:2,dotBorderColor:{from:"color"},enableDotLabel:!1,colors:this.state.colorScale,blendMode:"multiply",enableLabel:!1,isInteractive:!1,legends:[{anchor:"top-left",direction:"column",translateX:-50,translateY:-40,itemWidth:80,itemHeight:20,itemTextColor:"#999",symbolSize:12,symbolShape:"circle"}],theme:{textColor:this.state.textColor,axis:{ticks:{line:{stroke:j()(this.state.textColor).alpha(.2).hex()}}},grid:{line:{stroke:j()(this.state.textColor).alpha(.2).hex()}}}})})}}]),a}(l.Component),Y=a(310),X=(a(58),[{country:"1","Key 1":78,"Key 2":18,"Key 3":26,"Key 4":64,"Key 5":71,"Key 6":43,"Key 7":85,"Key 8":43,"Key 9":32,"Key 10":38},{country:"2","Key 1":49,"Key 2":59,"Key 3":61,"Key 4":64,"Key 5":90,"Key 6":64,"Key 7":50,"Key 8":94,"Key 9":30,"Key 10":20},{country:"3","Key 1":66,"Key 2":5,"Key 3":18,"Key 4":10,"Key 5":44,"Key 6":57,"Key 7":95,"Key 8":79,"Key 9":70,"Key 10":9},{country:"4","Key 1":70,"Key 2":61,"Key 3":17,"Key 4":56,"Key 5":53,"Key 6":10,"Key 7":71,"Key 8":2,"Key 9":89,"Key 10":26},{country:"5","Key 1":16,"Key 2":34,"Key 3":89,"Key 4":75,"Key 5":98,"Key 6":1,"Key 7":84,"Key 8":26,"Key 9":38,"Key 10":81},{country:"6","Key 1":46,"Key 2":48,"Key 3":57,"Key 4":33,"Key 5":93,"Key 6":89,"Key 7":1,"Key 8":13,"Key 9":32,"Key 10":21},{country:"7","Key 1":9,"Key 2":27,"Key 3":30,"Key 4":47,"Key 5":19,"Key 6":49,"Key 7":86,"Key 8":58,"Key 9":76,"Key 10":21},{country:"8","Key 1":40,"Key 2":81,"Key 3":52,"Key 4":92,"Key 5":99,"Key 6":40,"Key 7":81,"Key 8":17,"Key 9":76,"Key 10":94}]),I=function(e){Object(x.a)(a,e);var t=Object(h.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).state={textColor:o.props.textColor,colorScale:o.props.colorScale},o}return Object(n.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({textColor:e.textColor,colorScale:e.colorScale})}},{key:"render",value:function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(Y.a,{data:X,keys:["Key 1","Key 2","Key 3","Key 4","Key 5","Key 6","Key 7","Key 8","Key 9","Key 10"],indexBy:"country",colors:this.state.colorScale,margin:{top:50,right:60,bottom:60,left:60},padding:2,axisTop:{orient:"top",tickSize:5,tickPadding:5,tickRotation:-90,legend:"",legendOffset:36},axisRight:null,axisBottom:null,axisLeft:{orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:"Y-axis",legendPosition:"middle",legendOffset:-40},cellOpacity:1,cellBorderColor:{from:"color",modifiers:[["darker",.4]]},enableLabels:!1,isInteractive:!1,theme:{textColor:this.state.textColor,axis:{ticks:{line:{stroke:j()(this.state.textColor).alpha(.2).hex()}}},grid:{line:{stroke:j()(this.state.textColor).alpha(.2).hex()}}}})})}}]),a}(l.Component),H=a(58),M=function(e){Object(x.a)(a,e);var t=Object(h.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).state={backgroundColor:"#ffffff",textColor:"#000000",seriesScale:3,theme:"theme1",palettes:{qualitative:H.theme1.qualitativeLight,sequential:H.theme1.sequentialBlue,diverging:H.theme1.diverging,semantic:H.theme1.semantic}},o.handleBackgroundColorChange=o.handleBackgroundColorChange.bind(Object(y.a)(o)),o.handleTextColorChange=o.handleTextColorChange.bind(Object(y.a)(o)),o.handleThemeChange=o.handleThemeChange.bind(Object(y.a)(o)),o.handlePalettesChange=o.handlePalettesChange.bind(Object(y.a)(o)),o.handleSeriesScaleChange=o.handleSeriesScaleChange.bind(Object(y.a)(o)),o}return Object(n.a)(a,[{key:"handleBackgroundColorChange",value:function(e){this.setState({backgroundColor:e})}},{key:"handleTextColorChange",value:function(e){this.setState({textColor:e})}},{key:"handleThemeChange",value:function(e){this.setState({theme:e})}},{key:"handlePalettesChange",value:function(e){this.setState({palettes:e})}},{key:"handleSeriesScaleChange",value:function(e){this.setState({seriesScale:e})}},{key:"render",value:function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"page-wrapper with-sidebar",style:{backgroundColor:this.state.backgroundColor,color:this.state.textColor},children:[Object(o.jsx)(u,{backgroundColor:this.state.backgroundColor,onBackgroundColorChange:this.handleBackgroundColorChange,textColor:this.state.textColor,onTextColorChange:this.handleTextColorChange,theme:this.state.theme,onThemeChange:this.handleThemeChange,palettes:this.state.palettes,onPalettesChange:this.handlePalettesChange,seriesScale:this.state.seriesScale,onSeriesScaleChange:this.handleSeriesScaleChange}),Object(o.jsxs)("div",{className:"content-wrapper",children:[Object(o.jsxs)("div",{className:"mx-auto",children:[Object(o.jsx)("h6",{className:"mt-10 mb-20 flex-grow-1",children:"Qualitative"}),Object(o.jsxs)("div",{class:"charts container",children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"color chart-column col-12 col-lg-6 col-xl-4",children:Object(o.jsx)(f,{textColor:this.state.textColor,colorScale:this.state.palettes.qualitative,seriesScale:this.state.seriesScale},this.state.textColor)}),Object(o.jsx)("div",{className:"color chart-column col-12 col-lg-6 col-xl-4",children:Object(o.jsx)(O,{textColor:this.state.textColor,colorScale:this.state.palettes.qualitative,seriesScale:this.state.seriesScale},this.state.textColor)}),Object(o.jsx)("div",{className:"color chart-column col-12 col-lg-6 col-xl-4",children:Object(o.jsx)(F,{textColor:this.state.textColor,colorScale:this.state.palettes.qualitative,seriesScale:this.state.seriesScale},this.state.textColor)})]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"color chart-column col-12 col-lg-6 col-xl-4",children:Object(o.jsx)(D,{textColor:this.state.textColor,colorScale:this.state.palettes.qualitative,seriesScale:this.state.seriesScale},this.state.textColor)}),Object(o.jsx)("div",{className:"color chart-column col-12 col-lg-6 col-xl-4",children:Object(o.jsx)(P,{textColor:this.state.textColor,colorScale:this.state.palettes.qualitative,seriesScale:this.state.seriesScale},this.state.textColor)}),Object(o.jsx)("div",{className:"color chart-column col-12 col-lg-6 col-xl-4",children:Object(o.jsx)(L,{textColor:this.state.textColor,colorScale:this.state.palettes.qualitative,seriesScale:this.state.seriesScale},this.state.textColor)})]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"color chart-column col-12 col-lg-6 col-xl-4",children:Object(o.jsx)(T,{textColor:this.state.textColor,colorScale:this.state.palettes.qualitative,seriesScale:this.state.seriesScale},this.state.textColor)}),Object(o.jsx)("div",{className:"color chart-column col-12 col-lg-6 col-xl-4",children:Object(o.jsx)(W,{textColor:this.state.textColor,colorScale:this.state.palettes.qualitative,seriesScale:this.state.seriesScale},this.state.textColor)})]})]}),Object(o.jsx)("hr",{})]}),Object(o.jsxs)("div",{className:"mx-auto",children:[Object(o.jsx)("h6",{className:"mt-10 mb-20 flex-grow-1",children:"Sequential"}),Object(o.jsxs)("div",{class:"charts container",children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"color chart-column col-12 col-lg-6 col-xl-4",children:Object(o.jsx)(O,{textColor:this.state.textColor,colorScale:this.state.palettes.sequential,seriesScale:this.state.seriesScale},this.state.textColor)}),Object(o.jsx)("div",{className:"color chart-column col-12 col-lg-6 col-xl-4",children:Object(o.jsx)(F,{textColor:this.state.textColor,colorScale:this.state.palettes.sequential,seriesScale:this.state.seriesScale},this.state.textColor)}),Object(o.jsx)("div",{className:"color chart-column col-12 col-lg-6 col-xl-4",children:Object(o.jsx)(I,{textColor:this.state.textColor,colorScale:this.state.palettes.sequential},this.state.textColor)})]}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"color chart-column col-12 col-lg-6 col-xl-4",children:Object(o.jsx)(T,{textColor:this.state.textColor,colorScale:this.state.palettes.sequential,seriesScale:this.state.seriesScale},this.state.textColor)})})]}),Object(o.jsx)("hr",{})]}),Object(o.jsxs)("div",{className:"mx-auto",children:[Object(o.jsx)("h6",{className:"mt-10 mb-20 flex-grow-1",children:"Diverging"}),Object(o.jsx)("div",{class:"charts container",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"color chart-column col-12 col-lg-6 col-xl-4",children:Object(o.jsx)(I,{textColor:this.state.textColor,colorScale:this.state.palettes.diverging},this.state.textColor)}),Object(o.jsx)("div",{className:"color chart-column col-12 col-lg-6 col-xl-4",children:Object(o.jsx)(L,{textColor:this.state.textColor,colorScale:this.state.palettes.diverging,seriesScale:this.state.seriesScale},this.state.textColor)})]})}),Object(o.jsx)("hr",{})]}),Object(o.jsxs)("div",{className:"mx-auto",children:[Object(o.jsx)("h6",{className:"mt-10 mb-20 flex-grow-1",children:"Semantic"}),Object(o.jsxs)("div",{class:"charts container",children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"color chart-column col-12 col-lg-6 col-xl-4",children:Object(o.jsx)(f,{textColor:this.state.textColor,colorScale:this.state.palettes.semantic,seriesScale:this.state.seriesScale},this.state.textColor)}),Object(o.jsx)("div",{className:"color chart-column col-12 col-lg-6 col-xl-4",children:Object(o.jsx)(O,{textColor:this.state.textColor,colorScale:this.state.palettes.semantic,seriesScale:this.state.seriesScale},this.state.textColor)}),Object(o.jsx)("div",{className:"color chart-column col-12 col-lg-6 col-xl-4",children:Object(o.jsx)(F,{textColor:this.state.textColor,colorScale:this.state.palettes.semantic,seriesScale:this.state.seriesScale},this.state.textColor)})]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"color chart-column col-12 col-lg-6 col-xl-4",children:Object(o.jsx)(I,{textColor:this.state.textColor,colorScale:this.state.palettes.semantic},this.state.textColor)}),Object(o.jsx)("div",{className:"color chart-column col-12 col-lg-6 col-xl-4",children:Object(o.jsx)(T,{textColor:this.state.textColor,colorScale:this.state.palettes.semantic,seriesScale:this.state.seriesScale},this.state.textColor)})]})]})]})]})]})})}}]),a}(l.Component),Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,548)).then((function(t){var a=t.getCLS,o=t.getFID,l=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),o(e),l(e),i(e),s(e)}))};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(M,{})}),document.getElementById("root")),Q()},58:function(e,t){e.exports={theme1:{qualitativeLight:["#1D6AF0","#914CD4","#00A1C2","#DA3395","#6200C2","#A70062","#1E008F","#00404E","#600558","#997809","#18703C","#FF463C"],qualitativeDark:["#1D6AF0","#AD2CA2","#B5B2FF","#00A1C2","#DF4CA2","#FFE99F","#99D9E7","#CF83C8","#FFC80F","#24A85A","#FFB5B1","#F63261"],ibmQualitativeLight:["#6929c4","#1192e8","#005d5d","#9f1853","#fa4d56","#570408","#198038","#002d9c","#ee538b","#b28600","#009d9a","#012749","#8a3800","#a56eff"],ibmQualitativeDark:["#8a3ffc","#33b1ff","#007d79","#ff7eb6","#fa4d56","#fff1f1","#6fdc8c","#4589ff","#d12771","#d2a106","#08bdba","#bae6ff","#ba4e00","#d4bbff"],sequentialPurple:["#580450","#700666","#88077C","#A00892","#AE2DA2","#BC52B3","#CB77C3","#D99CD3","#E7C1E4","#F5E6F4"],sequentialBlue:["#103A84","#144AA8","#195ACC","#1D7AF0","#3F80F2","#6197F2","#83ADF7","#A5C3F9","#C6DAFB","#E8F0FD"],diverging:["#00A1C2","#26AFCB","#4CBDD4","#73CBDD","#99D9E7","#BFE8F0","#E4F6F9","#FAE5F2","#F4BFD3","#ED99CA","#E673B6","#DF4CA2","#D8268E","#D1007A"],semantic:["#E53F36","#FCA016","#FFC80F","#209650","#3479F2"]},theme2:{qualitativeLight:["#1D6AF0","#914CD4","#00A1C2","#DA3395","#6200C2","#A70062","#1E008F","#00404E","#600558","#997809","#18703C","#FF463C"],qualitativeDark:["#1D6AF0","#AD2CA2","#B5B2FF","#00A1C2","#DF4CA2","#FFE99F","#99D9E7","#CF83C8","#FFC80F","#24A85A","#FFB5B1","#F63261"],ibmQualitativeLight:["#6929c4","#1192e8","#005d5d","#9f1853","#fa4d56","#570408","#198038","#002d9c","#ee538b","#b28600","#009d9a","#012749","#8a3800","#a56eff"],ibmQualitativeDark:["#8a3ffc","#33b1ff","#007d79","#ff7eb6","#fa4d56","#fff1f1","#6fdc8c","#4589ff","#d12771","#d2a106","#08bdba","#bae6ff","#ba4e00","#d4bbff"],sequentialPurple:["#580450","#700666","#88077C","#A00892","#AE2DA2","#BC52B3","#CB77C3","#D99CD3","#E7C1E4","#F5E6F4"],sequentialBlue:["#103A84","#144AA8","#195ACC","#1D7AF0","#3F80F2","#6197F2","#83ADF7","#A5C3F9","#C6DAFB","#E8F0FD"],diverging:["#00A1C2","#26AFCB","#4CBDD4","#73CBDD","#99D9E7","#BFE8F0","#E4F6F9","#FAE5F2","#F4BFD3","#ED99CA","#E673B6","#DF4CA2","#D8268E","#D1007A"],semantic:["#E53F36","#FCA016","#FFC80F","#209650","#3479F2"]}}}},[[481,1,2]]]);
//# sourceMappingURL=main.67c6a5b7.chunk.js.map