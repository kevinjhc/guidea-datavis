(this["webpackJsonpdata-viz"]=this["webpackJsonpdata-viz"]||[]).push([[0],{331:function(e,t,a){},332:function(e,t,a){},334:function(e,t,a){},481:function(e,t,a){"use strict";a.r(t);var o=a(4),i=a(0),r=a.n(i),l=a(37),s=a.n(l),c=(a(331),a(11)),n=a(12),y=a(56),x=a(18),h=a(19),g=(a(332),a(312)),d=a(311),C=(a(334),a(335),a(58)),m=[{value:"lightTheme",label:"Light Theme",palettes:{qualitative:C.lightTheme.qualitative,sequential:C.lightTheme.sequential,sequential2:C.lightTheme.sequential2,diverging:C.lightTheme.diverging,diverging2:C.lightTheme.diverging2,semantic:C.lightTheme.semantic},pageSettings:{backgroundColor:"#FFFFFF",textColor:"#000000"}},{value:"darkTheme",label:"Dark Theme",palettes:{qualitative:C.darkTheme.qualitative,sequential:C.darkTheme.sequential,sequential2:C.darkTheme.sequential2,diverging:C.darkTheme.diverging,diverging2:C.darkTheme.diverging2,semantic:C.darkTheme.semantic},pageSettings:{backgroundColor:"#121212",textColor:"#FFFFFF"}}],u=function(e){Object(x.a)(a,e);var t=Object(h.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).handleThemeChange=function(e){o.setState({theme:e.value,backgroundColor:e.pageSettings.backgroundColor,textColor:e.pageSettings.textColor,palettes:e.palettes}),o.props.onThemeChange(e.value),o.props.onBackgroundColorChange(e.pageSettings.backgroundColor),o.props.onTextColorChange(e.pageSettings.textColor),o.props.onPalettesChange(e.palettes)},o.handleSeriesScaleChange=function(e){o.setState({seriesScale:e}),o.props.onSeriesScaleChange(e)},o.state={backgroundColor:o.props.backgroundColor,textColor:o.props.textColor,theme:o.props.theme,palettes:o.props.palettes,seriesScale:3},o}return Object(n.a)(a,[{key:"render",value:function(){return Object(o.jsx)("div",{className:"sidebar shadow-lg",children:Object(o.jsxs)("div",{className:"sidebar-menu",children:[Object(o.jsx)("div",{className:"sidebar-brand",children:Object(o.jsxs)("div",{children:["Data Vis Palette Tool",Object(o.jsx)("p",{className:"font-size-12 mt-0 text-muted",children:"By: Kevin Chang"})]})}),Object(o.jsx)("div",{className:"sidebar-divider mb-10"}),Object(o.jsx)("h5",{className:"sidebar-title",children:"Theme"}),Object(o.jsx)("div",{className:"sidebar-link select mb-5",children:Object(o.jsx)(g.a,{defaultValue:m[0],options:m,onChange:this.handleThemeChange})}),Object(o.jsx)("div",{className:"sidebar-divider my-10"}),Object(o.jsx)("h5",{className:"sidebar-title",children:"Chart Complexity"}),Object(o.jsx)("div",{className:"sidebar-link select",style:{padding:"6px 20px 24px"},children:Object(o.jsx)(d.a,{min:1,max:5,defaultValue:3,marks:{1:"Low",3:"Medium",5:"High"},step:null,onChange:this.handleSeriesScaleChange})})]})})}}]),a}(i.Component),p=a(29),b=a.n(p),j=a(108),S=(a(58),[{id:"1",value:83},{id:"2",value:83},{id:"3",value:36},{id:"4",value:54},{id:"5",value:13},{id:"6",value:128}]),v=function(e){Object(x.a)(a,e);var t=Object(h.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).state={textColor:o.props.textColor,colorScale:o.props.colorScale,seriesScale:o.props.seriesScale},o}return Object(n.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({textColor:e.textColor,colorScale:e.colorScale,seriesScale:e.seriesScale})}},{key:"render",value:function(){var e;return 1===this.state.seriesScale?(e=S.slice(0,1),["1"]):3===this.state.seriesScale?(e=S.slice(0,3),["1","2","3"]):5===this.state.seriesScale&&(e=S,["1","2","3","4","5"]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(j.a,{data:e,margin:{top:20,right:20,bottom:50,left:60},padding:.3,colors:this.state.colorScale,axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:"X-axis",legendPosition:"middle",legendOffset:32},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:"Y-axis",legendPosition:"middle",legendOffset:-40,symbolShape:"circle"},enableLabel:!1,isInteractive:!1,theme:{textColor:this.state.textColor,axis:{ticks:{line:{stroke:b()(this.state.textColor).alpha(.2).hex()}}},grid:{line:{stroke:b()(this.state.textColor).alpha(.2).hex()}}}})})}}]),a}(i.Component),O=(a(58),[{id:"1",Category:83,"Category 2":129,"Category 3":74,"Category 4":74,"Category 5":74,"Category 6":114},{id:"2",Category:83,"Category 2":113,"Category 3":131,"Category 4":74,"Category 5":74,"Category 6":68},{id:"3",Category:36,"Category 2":53,"Category 3":191,"Category 4":74,"Category 5":74,"Category 6":134},{id:"4",Category:54,"Category 2":52,"Category 3":177,"Category 4":74,"Category 5":74,"Category 6":124},{id:"5",Category:13,"Category 2":160,"Category 3":188,"Category 4":74,"Category 5":74,"Category 6":144},{id:"6",Category:128,"Category 2":34,"Category 3":6,"Category 4":74,"Category 5":74,"Category 6":154}]),f=function(e){Object(x.a)(a,e);var t=Object(h.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).state={textColor:o.props.textColor,colorScale:o.props.colorScale,seriesScale:o.props.seriesScale},o}return Object(n.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({textColor:e.textColor,colorScale:e.colorScale,seriesScale:e.seriesScale})}},{key:"render",value:function(){var e,t,a=[];if(1===this.state.seriesScale){e=O;for(var i=0;i<e.length;i++){(r={}).id=i,r.Category=e[i].Category,r["Category 2"]=e[i]["Category 2"],a.push(r)}t=["Category","Category 2"]}else if(3===this.state.seriesScale){e=O;for(i=0;i<e.length;i++){(r={}).id=i,r.Category=e[i].Category,r["Category 2"]=e[i]["Category 2"],r["Category 3"]=e[i]["Category 3"],a.push(r)}t=["Category","Category 2","Category 3"]}else if(4===this.state.seriesScale){e=O;for(i=0;i<e.length;i++){var r;(r={}).id=i,r.Category=e[i].Category,r["Category 2"]=e[i]["Category 2"],r["Category 3"]=e[i]["Category 3"],r["Category 4"]=e[i]["Category 4"],a.push(r)}t=["Category","Category 2","Category 3","Category 4"]}else 5===this.state.seriesScale&&(a=O,t=["Category","Category 2","Category 3","Category 4","Category 5"]);return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(j.a,{data:a,keys:t,margin:{top:20,right:130,bottom:50,left:60},padding:.3,innerPadding:1,colors:this.state.colorScale,valueScale:{type:"linear"},axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:"X-axis",legendPosition:"middle",legendOffset:32},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:"Y-axis",legendPosition:"middle",legendOffset:-40},legends:[{dataFrom:"keys",anchor:"bottom-right",direction:"column",justify:!1,translateX:120,translateY:0,itemsSpacing:2,itemWidth:80,itemHeight:20,itemDirection:"left-to-right",itemOpacity:.75,symbolSize:12,symbolShape:"circle"}],enableLabel:!1,isInteractive:!1,theme:{textColor:this.state.textColor,axis:{ticks:{line:{stroke:b()(this.state.textColor).alpha(.2).hex()}}},grid:{line:{stroke:b()(this.state.textColor).alpha(.2).hex()}}}})})}}]),a}(i.Component),k=(a(58),[{id:"1",Category:83,"Category 2":129,"Category 3":74,"Category 4":74,"Category 5":74,"Category 6":114},{id:"2",Category:83,"Category 2":113,"Category 3":131,"Category 4":74,"Category 5":74,"Category 6":68},{id:"3",Category:36,"Category 2":53,"Category 3":191,"Category 4":74,"Category 5":74,"Category 6":134},{id:"4",Category:54,"Category 2":52,"Category 3":177,"Category 4":74,"Category 5":74,"Category 6":124},{id:"5",Category:13,"Category 2":160,"Category 3":188,"Category 4":74,"Category 5":74,"Category 6":144},{id:"6",Category:128,"Category 2":34,"Category 3":6,"Category 4":74,"Category 5":74,"Category 6":154}]),F=function(e){Object(x.a)(a,e);var t=Object(h.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).state={textColor:o.props.textColor,colorScale:o.props.colorScale,seriesScale:o.props.seriesScale},o}return Object(n.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({textColor:e.textColor,colorScale:e.colorScale,seriesScale:e.seriesScale})}},{key:"render",value:function(){var e,t,a=[];if(1===this.state.seriesScale){e=k;for(var i=0;i<e.length;i++){(r={}).id=i,r.Category=e[i].Category,r["Category 2"]=e[i]["Category 2"],a.push(r)}t=["Category","Category 2"]}else if(3===this.state.seriesScale){e=k;for(i=0;i<e.length;i++){var r;(r={}).id=i,r.Category=e[i].Category,r["Category 2"]=e[i]["Category 2"],r["Category 3"]=e[i]["Category 3"],a.push(r)}t=["Category","Category 2","Category 3"]}else 5===this.state.seriesScale&&(a=k,t=["Category","Category 2","Category 3","Category 4","Category 5"]);return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(j.a,{data:a,keys:t,margin:{top:20,right:130,bottom:50,left:60},padding:.3,innerPadding:2,groupMode:"grouped",colors:this.state.colorScale,axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:"X-axis",legendPosition:"middle",legendOffset:32},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:"Y-axis",legendPosition:"middle",legendOffset:-40},legends:[{dataFrom:"keys",anchor:"bottom-right",direction:"column",justify:!1,translateX:120,translateY:0,itemsSpacing:2,itemWidth:80,itemHeight:20,itemDirection:"left-to-right",itemOpacity:.75,symbolSize:12,symbolShape:"circle"}],enableLabel:!1,isInteractive:!1,theme:{textColor:this.state.textColor,axis:{ticks:{line:{stroke:b()(this.state.textColor).alpha(.2).hex()}}},grid:{line:{stroke:b()(this.state.textColor).alpha(.2).hex()}}}})})}}]),a}(i.Component),K=a(158),B=(a(58),[{id:"Category 1",data:[{x:"1",y:47},{x:"2",y:276},{x:"3",y:8},{x:"4",y:156},{x:"5",y:174},{x:"6",y:284}]},{id:"Category 2",data:[{x:"1",y:269},{x:"2",y:109},{x:"3",y:146},{x:"4",y:157},{x:"5",y:225},{x:"6",y:248}]},{id:"Category 3",data:[{x:"1",y:9},{x:"2",y:185},{x:"3",y:4},{x:"4",y:236},{x:"5",y:177},{x:"6",y:73}]},{id:"Category 4",data:[{x:"1",y:37},{x:"2",y:56},{x:"3",y:93},{x:"4",y:123},{x:"5",y:34},{x:"6",y:74}]},{id:"Category 5",data:[{x:"1",y:11},{x:"2",y:69},{x:"3",y:24},{x:"4",y:211},{x:"5",y:123},{x:"6",y:34}]},{id:"Category 6",data:[{x:"1",y:213},{x:"2",y:172},{x:"3",y:42},{x:"4",y:235},{x:"5",y:23},{x:"6",y:45}]},{id:"Category 7",data:[{x:"1",y:107},{x:"2",y:76},{x:"3",y:38},{x:"4",y:56},{x:"5",y:14},{x:"6",y:84}]},{id:"Category 8",data:[{x:"1",y:33},{x:"2",y:55},{x:"3",y:11},{x:"4",y:76},{x:"5",y:42},{x:"6",y:34}]},{id:"Category 9",data:[{x:"1",y:40},{x:"2",y:75},{x:"3",y:219},{x:"4",y:44},{x:"5",y:55},{x:"6",y:11}]},{id:"Category 10",data:[{x:"1",y:42},{x:"2",y:115},{x:"3",y:33},{x:"4",y:67},{x:"5",y:67},{x:"6",y:177}]},{id:"Category 11",data:[{x:"1",y:27},{x:"2",y:224},{x:"3",y:14},{x:"4",y:42},{x:"5",y:53},{x:"6",y:35}]},{id:"Category 12",data:[{x:"1",y:147},{x:"2",y:76},{x:"3",y:83},{x:"4",y:156},{x:"5",y:14},{x:"6",y:233}]},{id:"Category 13",data:[{x:"1",y:180},{x:"2",y:25},{x:"3",y:120},{x:"4",y:100},{x:"5",y:95},{x:"6",y:150}]}]),D=function(e){Object(x.a)(a,e);var t=Object(h.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).state={textColor:o.props.textColor,colorScale:o.props.colorScale,seriesScale:o.props.seriesScale},o}return Object(n.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({textColor:e.textColor,colorScale:e.colorScale,seriesScale:e.seriesScale})}},{key:"render",value:function(){var e;return 1===this.state.seriesScale?e=B.slice(0,1):3===this.state.seriesScale?e=B.slice(0,3):5===this.state.seriesScale?e=B.slice(0,5):12===this.state.seriesScale&&(e=B),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(K.a,{data:e,margin:{top:20,right:110,bottom:50,left:60},xScale:{type:"point"},yScale:{type:"linear",min:"auto",max:"auto",stacked:!1,reverse:!1},yFormat:" >-.2f",colors:this.state.colorScale,axisTop:null,axisRight:null,axisBottom:{orient:"bottom",tickSize:5,tickPadding:5,tickRotation:0,legend:"X-axis",legendOffset:36,legendPosition:"middle"},axisLeft:{orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:"Y-axis",legendOffset:-40,legendPosition:"middle"},pointSize:6,pointBorderWidth:2,pointBorderColor:{from:"serieColor"},pointLabelYOffset:-12,legends:[{anchor:"bottom-right",direction:"column",justify:!1,translateX:100,translateY:0,itemsSpacing:2,itemDirection:"left-to-right",itemWidth:80,itemHeight:20,itemOpacity:.75,symbolSize:12,symbolShape:"circle"}],enableLabel:!1,isInteractive:!1,theme:{textColor:this.state.textColor,axis:{ticks:{line:{stroke:b()(this.state.textColor).alpha(.2).hex()}}},grid:{line:{stroke:b()(this.state.textColor).alpha(.2).hex()}}}})})}}]),a}(i.Component),E=(a(58),[{id:"Category 1",data:[{x:"1",y:47},{x:"2",y:276},{x:"3",y:8},{x:"4",y:156},{x:"5",y:174},{x:"6",y:284}]},{id:"Category 2",data:[{x:"1",y:269},{x:"2",y:109},{x:"3",y:146},{x:"4",y:157},{x:"5",y:225},{x:"6",y:248}]},{id:"Category 3",data:[{x:"1",y:9},{x:"2",y:185},{x:"3",y:4},{x:"4",y:236},{x:"5",y:177},{x:"6",y:73}]},{id:"Category 4",data:[{x:"1",y:47},{x:"2",y:276},{x:"3",y:8},{x:"4",y:156},{x:"5",y:174},{x:"6",y:284}]},{id:"Category 5",data:[{x:"1",y:47},{x:"2",y:276},{x:"3",y:8},{x:"4",y:156},{x:"5",y:174},{x:"6",y:284}]},{id:"Category 6",data:[{x:"1",y:47},{x:"2",y:276},{x:"3",y:8},{x:"4",y:156},{x:"5",y:174},{x:"6",y:284}]}]),A=function(e){Object(x.a)(a,e);var t=Object(h.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).state={textColor:o.props.textColor,colorScale:o.props.colorScale,seriesScale:o.props.seriesScale},o}return Object(n.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({textColor:e.textColor,colorScale:e.colorScale,seriesScale:e.seriesScale})}},{key:"render",value:function(){var e;return 1===this.state.seriesScale?e=E.slice(0,1):3===this.state.seriesScale?e=E.slice(0,3):5===this.state.seriesScale&&(e=E),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(K.a,{data:e,margin:{top:20,right:110,bottom:50,left:60},xScale:{type:"point"},yScale:{type:"linear",min:"auto",max:"auto",stacked:!1,reverse:!1},yFormat:" >-.2f",colors:this.state.colorScale,axisTop:null,axisRight:null,enableArea:!0,axisBottom:{orient:"bottom",tickSize:5,tickPadding:5,tickRotation:0,legend:"X-axis",legendOffset:36,legendPosition:"middle"},axisLeft:{orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:"Y-axis",legendOffset:-40,legendPosition:"middle"},pointSize:6,pointBorderWidth:2,pointBorderColor:{from:"serieColor"},pointLabelYOffset:-12,legends:[{anchor:"bottom-right",direction:"column",justify:!1,translateX:100,translateY:0,itemsSpacing:2,itemDirection:"left-to-right",itemWidth:80,itemHeight:20,itemOpacity:.75,symbolSize:12,symbolShape:"circle"}],enableLabel:!1,isInteractive:!1,theme:{textColor:this.state.textColor,axis:{ticks:{line:{stroke:b()(this.state.textColor).alpha(.2).hex()}}},grid:{line:{stroke:b()(this.state.textColor).alpha(.2).hex()}}}})})}}]),a}(i.Component),N=a(309),T=(a(58),[{id:"Category 1",data:[{x:31,y:26},{x:66,y:1},{x:76,y:11},{x:4,y:110},{x:5,y:68},{x:27,y:62},{x:8,y:86},{x:85,y:92},{x:95,y:113},{x:45,y:106},{x:60,y:50},{x:17,y:106},{x:82,y:97},{x:26,y:108},{x:50,y:81},{x:13,y:110},{x:100,y:12},{x:69,y:51},{x:25,y:55},{x:91,y:11},{x:47,y:17},{x:21,y:18},{x:58,y:103},{x:100,y:59}]},{id:"Category 2",data:[{x:1,y:52},{x:44,y:100},{x:63,y:6},{x:81,y:71},{x:77,y:8},{x:44,y:76},{x:89,y:37},{x:55,y:89},{x:21,y:92},{x:39,y:88},{x:70,y:20},{x:82,y:22},{x:11,y:78},{x:19,y:69},{x:70,y:7},{x:97,y:17},{x:19,y:42},{x:7,y:65},{x:49,y:101},{x:65,y:8},{x:62,y:115},{x:45,y:69},{x:42,y:31},{x:91,y:49},{x:4,y:113},{x:41,y:11},{x:11,y:83},{x:59,y:112},{x:72,y:61},{x:24,y:118},{x:32,y:65}]},{id:"Category 3",data:[{x:6,y:68},{x:86,y:35},{x:61,y:44},{x:95,y:82},{x:27,y:48},{x:31,y:8},{x:66,y:36},{x:4,y:90},{x:93,y:43},{x:60,y:109},{x:0,y:26},{x:53,y:57},{x:67,y:47},{x:30,y:33},{x:14,y:10},{x:51,y:23},{x:49,y:43},{x:7,y:29},{x:9,y:67},{x:10,y:82},{x:81,y:28},{x:3,y:9}]},{id:"Category 4",data:[{x:21,y:25},{x:46,y:13},{x:36,y:11},{x:45,y:10},{x:50,y:6},{x:37,y:52},{x:18,y:66},{x:25,y:42},{x:45,y:13},{x:35,y:16},{x:80,y:50},{x:37,y:146},{x:22,y:97},{x:25,y:88},{x:40,y:51}]},{id:"Category 5",data:[{x:11,y:55},{x:40,y:10},{x:68,y:46},{x:52,y:28},{x:21,y:78},{x:79,y:49},{x:40,y:17},{x:87,y:14},{x:29,y:44},{x:14,y:123},{x:61,y:31},{x:111,y:83},{x:39,y:102},{x:32,y:81},{x:14,y:89},{x:22,y:45}]},{id:"Category 6",data:[{x:11,y:26},{x:63,y:1},{x:46,y:11},{x:42,y:110},{x:55,y:68},{x:47,y:62},{x:18,y:86},{x:45,y:92},{x:45,y:113},{x:55,y:106},{x:70,y:50},{x:27,y:106},{x:52,y:97},{x:76,y:108},{x:60,y:81},{x:113,y:110},{x:50,y:12},{x:99,y:51},{x:35,y:55},{x:21,y:11},{x:57,y:17},{x:121,y:18},{x:48,y:103},{x:20,y:59}]}]),P=function(e){Object(x.a)(a,e);var t=Object(h.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).state={textColor:o.props.textColor,colorScale:o.props.colorScale,seriesScale:o.props.seriesScale},o}return Object(n.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({textColor:e.textColor,colorScale:e.colorScale,seriesScale:e.seriesScale})}},{key:"render",value:function(){var e,t=[];return 1===this.state.seriesScale?(e=T.slice(0,1),t=this.props.colorScale):3===this.state.seriesScale?(e=T.slice(0,3),14==this.props.colorScale.length?(t.push(this.props.colorScale[0]),t.push(this.props.colorScale[8]),t.push(this.props.colorScale[13])):t=this.props.colorScale):5===this.state.seriesScale&&(e=T,14==this.props.colorScale.length?(t.push(this.props.colorScale[0]),t.push(this.props.colorScale[3]),t.push(this.props.colorScale[5]),t.push(this.props.colorScale[8]),t.push(this.props.colorScale[9]),t.push(this.props.colorScale[13])):t=this.props.colorScale),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(N.a,{data:e,margin:{top:20,right:140,bottom:70,left:90},xScale:{type:"linear",min:0,max:"auto"},xFormat:function(e){return e+" kg"},yScale:{type:"linear",min:0,max:"auto"},yFormat:function(e){return e+" cm"},colors:t,blendMode:"multiply",axisTop:null,axisRight:null,axisBottom:{orient:"bottom",tickSize:5,tickPadding:5,tickRotation:0,legend:"X-axis",legendPosition:"middle",legendOffset:46},axisLeft:{orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:"Y-axis",legendPosition:"middle",legendOffset:-60},legends:[{anchor:"bottom-right",direction:"column",justify:!1,translateX:100,translateY:0,itemsSpacing:2,itemDirection:"left-to-right",itemWidth:80,itemHeight:20,itemOpacity:.75,symbolSize:12,symbolShape:"circle"}],enableLabel:!1,isInteractive:!1,theme:{textColor:this.state.textColor,axis:{ticks:{line:{stroke:b()(this.state.textColor).alpha(.2).hex()}}},grid:{line:{stroke:b()(this.state.textColor).alpha(.2).hex()}}}})})}}]),a}(i.Component),q=a(314),R=(a(58),[{id:"Category 1",label:"Category 1",value:422},{id:"Category 2",label:"Category 2",value:120},{id:"Category 3",label:"Category 3",value:506},{id:"Category 4",label:"Category 4",value:295},{id:"Category 5",label:"Category 5",value:439},{id:"Category 6",label:"Category 6",value:79}]),L=function(e){Object(x.a)(a,e);var t=Object(h.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).state={textColor:o.props.textColor,colorScale:o.props.colorScale,seriesScale:o.props.seriesScale},o}return Object(n.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({textColor:e.textColor,colorScale:e.colorScale,seriesScale:e.seriesScale})}},{key:"render",value:function(){var e;return 1===this.state.seriesScale?e=R.slice(0,1):3===this.state.seriesScale?e=R.slice(0,3):5===this.state.seriesScale&&(e=R),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(q.a,{data:e,margin:{top:20,right:80,bottom:80,left:80},innerRadius:.5,padAngle:.7,colors:this.state.colorScale,radialLabelsSkipAngle:10,radialLabelsLinkColor:{from:"color"},sliceLabelsSkipAngle:10,legends:[{anchor:"bottom",direction:"row",justify:!1,translateX:0,translateY:56,itemsSpacing:0,itemWidth:80,itemHeight:20,itemDirection:"left-to-right",itemOpacity:1,symbolSize:12,symbolShape:"circle"}],enableSliceLabels:!1,enableLabel:!1,isInteractive:!1,theme:{textColor:this.state.textColor,axis:{ticks:{line:{stroke:b()(this.state.textColor).alpha(.2).hex()}}},grid:{line:{stroke:b()(this.state.textColor).alpha(.2).hex()}}}})})}}]),a}(i.Component),z=a(313),w=(a(58),[{attribute:"Attribute 1",Category:64,"Category 2":73,"Category 3":57,"Category 4":57,"Category 5":57,"Category 6":57},{attribute:"Attribute 2",Category:20,"Category 2":94,"Category 3":102,"Category 4":57,"Category 5":57,"Category 6":57},{attribute:"Attribute 3",Category:41,"Category 2":21,"Category 3":106,"Category 4":57,"Category 5":57,"Category 6":57},{attribute:"Attribute 4",Category:53,"Category 2":78,"Category 3":105,"Category 4":57,"Category 5":57,"Category 6":57},{attribute:"Attribute 5",Category:86,"Category 2":39,"Category 3":48,"Category 4":57,"Category 5":57,"Category 6":57}]),W=function(e){Object(x.a)(a,e);var t=Object(h.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).state={textColor:o.props.textColor,colorScale:o.props.colorScale,seriesScale:o.props.seriesScale},o}return Object(n.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({textColor:e.textColor,colorScale:e.colorScale,seriesScale:e.seriesScale})}},{key:"render",value:function(){var e,t,a=[];if(1===this.state.seriesScale){e=w;for(var i=0;i<e.length;i++){(r={}).attribute="Attribute "+i,r.Category=e[i].Category,a.push(r)}t=["Category"]}else if(3===this.state.seriesScale){e=w;for(i=0;i<e.length;i++){var r;(r={}).attribute="Attribute "+i,r.Category=e[i].Category,r["Category 2"]=e[i]["Category 2"],r["Category 3"]=e[i]["Category 3"],a.push(r)}t=["Category","Category 2","Category 3"]}else 5===this.state.seriesScale&&(a=w,t=["Category","Category 2","Category 3","Category 4","Category 5","Category 6"]);return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(z.a,{data:a,keys:t,indexBy:"attribute",maxValue:"auto",margin:{top:70,right:80,bottom:40,left:80},borderWidth:2,borderColor:{from:"color"},gridLevels:5,gridShape:"circular",gridLabelOffset:36,enableDots:!0,dotSize:10,dotBorderWidth:2,dotBorderColor:{from:"color"},enableDotLabel:!1,colors:this.state.colorScale,blendMode:"multiply",enableLabel:!1,isInteractive:!1,legends:[{anchor:"top-left",direction:"column",translateX:-50,translateY:-40,itemWidth:80,itemHeight:20,itemTextColor:"#999",symbolSize:12,symbolShape:"circle"}],theme:{textColor:this.state.textColor,axis:{ticks:{line:{stroke:b()(this.state.textColor).alpha(.2).hex()}}},grid:{line:{stroke:b()(this.state.textColor).alpha(.2).hex()}}}})})}}]),a}(i.Component),Y=a(310),X=(a(58),[{country:"1","Key 1":78,"Key 2":18,"Key 3":26,"Key 4":64,"Key 5":71,"Key 6":43,"Key 7":85,"Key 8":43,"Key 9":32,"Key 10":38},{country:"2","Key 1":49,"Key 2":59,"Key 3":61,"Key 4":64,"Key 5":90,"Key 6":64,"Key 7":50,"Key 8":94,"Key 9":30,"Key 10":20},{country:"3","Key 1":66,"Key 2":5,"Key 3":18,"Key 4":10,"Key 5":44,"Key 6":57,"Key 7":95,"Key 8":79,"Key 9":70,"Key 10":9},{country:"4","Key 1":70,"Key 2":61,"Key 3":17,"Key 4":56,"Key 5":53,"Key 6":10,"Key 7":71,"Key 8":2,"Key 9":89,"Key 10":26},{country:"5","Key 1":16,"Key 2":34,"Key 3":89,"Key 4":75,"Key 5":98,"Key 6":1,"Key 7":84,"Key 8":26,"Key 9":38,"Key 10":81},{country:"6","Key 1":46,"Key 2":48,"Key 3":57,"Key 4":33,"Key 5":93,"Key 6":89,"Key 7":1,"Key 8":13,"Key 9":32,"Key 10":21},{country:"7","Key 1":9,"Key 2":27,"Key 3":30,"Key 4":47,"Key 5":19,"Key 6":49,"Key 7":86,"Key 8":58,"Key 9":76,"Key 10":21},{country:"8","Key 1":40,"Key 2":81,"Key 3":52,"Key 4":92,"Key 5":99,"Key 6":40,"Key 7":81,"Key 8":17,"Key 9":76,"Key 10":94}]),I=function(e){Object(x.a)(a,e);var t=Object(h.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).state={textColor:o.props.textColor,colorScale:o.props.colorScale},o}return Object(n.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({textColor:e.textColor,colorScale:e.colorScale})}},{key:"render",value:function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(Y.a,{data:X,keys:["Key 1","Key 2","Key 3","Key 4","Key 5","Key 6","Key 7","Key 8","Key 9","Key 10"],indexBy:"country",colors:this.state.colorScale,margin:{top:50,right:60,bottom:60,left:60},padding:2,axisTop:{orient:"top",tickSize:5,tickPadding:5,tickRotation:-90,legend:"",legendOffset:36},axisRight:null,axisBottom:null,axisLeft:{orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:"Y-axis",legendPosition:"middle",legendOffset:-40},cellOpacity:1,cellBorderColor:{from:"color",modifiers:[["darker",.4]]},enableLabels:!1,isInteractive:!1,theme:{textColor:this.state.textColor,axis:{ticks:{line:{stroke:b()(this.state.textColor).alpha(.2).hex()}}},grid:{line:{stroke:b()(this.state.textColor).alpha(.2).hex()}}}})})}}]),a}(i.Component),H=a(58),M=function(e){Object(x.a)(a,e);var t=Object(h.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).state={backgroundColor:"#ffffff",textColor:"#000000",seriesScale:3,theme:"lightTheme",palettes:{qualitative:H.lightTheme.qualitative,sequential:H.lightTheme.sequential,sequential2:H.lightTheme.sequential2,diverging:H.lightTheme.diverging,diverging2:H.lightTheme.diverging2,semantic:H.lightTheme.semantic}},o.handleBackgroundColorChange=o.handleBackgroundColorChange.bind(Object(y.a)(o)),o.handleTextColorChange=o.handleTextColorChange.bind(Object(y.a)(o)),o.handleThemeChange=o.handleThemeChange.bind(Object(y.a)(o)),o.handlePalettesChange=o.handlePalettesChange.bind(Object(y.a)(o)),o.handleSeriesScaleChange=o.handleSeriesScaleChange.bind(Object(y.a)(o)),o}return Object(n.a)(a,[{key:"handleBackgroundColorChange",value:function(e){this.setState({backgroundColor:e})}},{key:"handleTextColorChange",value:function(e){this.setState({textColor:e})}},{key:"handleThemeChange",value:function(e){this.setState({theme:e})}},{key:"handlePalettesChange",value:function(e){this.setState({palettes:e})}},{key:"handleSeriesScaleChange",value:function(e){this.setState({seriesScale:e})}},{key:"render",value:function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"page-wrapper with-sidebar",style:{backgroundColor:this.state.backgroundColor,color:this.state.textColor},children:[Object(o.jsx)(u,{backgroundColor:this.state.backgroundColor,onBackgroundColorChange:this.handleBackgroundColorChange,textColor:this.state.textColor,onTextColorChange:this.handleTextColorChange,theme:this.state.theme,onThemeChange:this.handleThemeChange,palettes:this.state.palettes,onPalettesChange:this.handlePalettesChange,seriesScale:this.state.seriesScale,onSeriesScaleChange:this.handleSeriesScaleChange}),Object(o.jsxs)("div",{className:"content-wrapper",children:[Object(o.jsxs)("div",{className:"mx-auto",children:[Object(o.jsx)("h6",{className:"mt-10 mb-20 flex-grow-1",children:"Qualitative"}),Object(o.jsxs)("div",{class:"charts container",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"color chart-column col-12",style:{height:"330px"},children:Object(o.jsx)(D,{textColor:this.state.textColor,colorScale:this.state.palettes.qualitative,seriesScale:12},this.state.textColor)})}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"color chart-column col-12 col-lg-6 col-xl-4",children:Object(o.jsx)(v,{textColor:this.state.textColor,colorScale:this.state.palettes.qualitative,seriesScale:this.state.seriesScale},this.state.textColor)}),Object(o.jsx)("div",{className:"color chart-column col-12 col-lg-6 col-xl-4",children:Object(o.jsx)(f,{textColor:this.state.textColor,colorScale:this.state.palettes.qualitative,seriesScale:this.state.seriesScale},this.state.textColor)}),Object(o.jsx)("div",{className:"color chart-column col-12 col-lg-12 col-xl-4",children:Object(o.jsx)(F,{textColor:this.state.textColor,colorScale:this.state.palettes.qualitative,seriesScale:this.state.seriesScale},this.state.textColor)})]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"color chart-column col-12 col-lg-6 col-xl-4",children:Object(o.jsx)(D,{textColor:this.state.textColor,colorScale:this.state.palettes.qualitative,seriesScale:this.state.seriesScale},this.state.textColor)}),Object(o.jsx)("div",{className:"color chart-column col-12 col-lg-6 col-xl-4",children:Object(o.jsx)(A,{textColor:this.state.textColor,colorScale:this.state.palettes.qualitative,seriesScale:this.state.seriesScale},this.state.textColor)}),Object(o.jsx)("div",{className:"color chart-column col-12 col-lg-12 col-xl-4",children:Object(o.jsx)(P,{textColor:this.state.textColor,colorScale:this.state.palettes.qualitative,seriesScale:this.state.seriesScale},this.state.textColor)})]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"color chart-column col-12 col-lg-12 col-xl-6",children:Object(o.jsx)(L,{textColor:this.state.textColor,colorScale:this.state.palettes.qualitative,seriesScale:this.state.seriesScale},this.state.textColor)}),Object(o.jsx)("div",{className:"color chart-column col-12 col-lg-12 col-xl-6",children:Object(o.jsx)(W,{textColor:this.state.textColor,colorScale:this.state.palettes.qualitative,seriesScale:this.state.seriesScale},this.state.textColor)})]})]}),Object(o.jsx)("hr",{})]}),Object(o.jsxs)("div",{className:"mx-auto",children:[Object(o.jsx)("h6",{className:"mt-10 mb-20 flex-grow-1",children:"Sequential"}),Object(o.jsx)("div",{class:"charts container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"color chart-column col-12",style:{height:"330px"},children:Object(o.jsx)(I,{textColor:this.state.textColor,colorScale:this.state.palettes.sequential},this.state.textColor)})})}),Object(o.jsx)("hr",{})]}),Object(o.jsxs)("div",{className:"mx-auto",children:[Object(o.jsx)("h6",{className:"mt-10 mb-20 flex-grow-1",children:"Sequential Option 2"}),Object(o.jsx)("div",{class:"charts container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"color chart-column col-12",style:{height:"330px"},children:Object(o.jsx)(I,{textColor:this.state.textColor,colorScale:this.state.palettes.sequential2},this.state.textColor)})})}),Object(o.jsx)("hr",{})]}),Object(o.jsxs)("div",{className:"mx-auto",children:[Object(o.jsx)("h6",{className:"mt-10 mb-20 flex-grow-1",children:"Diverging"}),Object(o.jsx)("div",{class:"charts container",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"color chart-column col-12",style:{height:"330px"},children:Object(o.jsx)(I,{textColor:this.state.textColor,colorScale:this.state.palettes.diverging},this.state.textColor)}),Object(o.jsx)("div",{className:"color chart-column col-12",children:Object(o.jsx)(P,{textColor:this.state.textColor,colorScale:this.state.palettes.diverging,seriesScale:this.state.seriesScale},this.state.textColor)})]})}),Object(o.jsx)("hr",{})]}),Object(o.jsxs)("div",{className:"mx-auto",children:[Object(o.jsx)("h6",{className:"mt-10 mb-20 flex-grow-1",children:"Diverging Option 2"}),Object(o.jsx)("div",{class:"charts container",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"color chart-column col-12",style:{height:"330px"},children:Object(o.jsx)(I,{textColor:this.state.textColor,colorScale:this.state.palettes.diverging2},this.state.textColor)}),Object(o.jsx)("div",{className:"color chart-column col-12",children:Object(o.jsx)(P,{textColor:this.state.textColor,colorScale:this.state.palettes.diverging2,seriesScale:this.state.seriesScale},this.state.textColor)})]})}),Object(o.jsx)("hr",{})]}),Object(o.jsxs)("div",{className:"mx-auto",children:[Object(o.jsx)("h6",{className:"mt-10 mb-20 flex-grow-1",children:"Semantic"}),Object(o.jsxs)("div",{class:"charts container",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"color chart-column col-12",children:Object(o.jsx)(f,{textColor:this.state.textColor,colorScale:this.state.palettes.semantic,seriesScale:4},this.state.textColor)})}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"color chart-column col-12",style:{height:"330px"},children:Object(o.jsx)(I,{textColor:this.state.textColor,colorScale:this.state.palettes.semantic},this.state.textColor)})})]})]})]})]})})}}]),a}(i.Component),V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,548)).then((function(t){var a=t.getCLS,o=t.getFID,i=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),o(e),i(e),r(e),l(e)}))};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(M,{})}),document.getElementById("root")),V()},58:function(e,t){e.exports={lightTheme:{qualitative:["#2E96FF","#5A068E","#007D79","#F06C00","#00A862","#FF576A","#780C12","#67A503","#EE51DB","#000053","#8D0C6A","#4B7DA4","#780C12"],sequential:["#002827","#004442","#005E5B","#007D79","#339794","#59ABA8","#8CC4C3","#B3D8D7","#CCE5E4","#E5F2F2"],sequential2:["#1D5895","#1E6BB9","#2880D9","#2E96FF","#58ABFF","#77BBFF","#A1D0FF","#C0DFFF","#D5EAFF","#EAF4FF"],diverging:["#005D5B","#007D79","#409D9B","#73B7B5","#A6D1D0","#CCE5E4","#E5F2F2","#EEDBE9","#E3C2DA","#D19EC3","#C079AD","#AF5597","#8D0C6A","#710955"],diverging2:["#2576C8","#2E96FF","#58ABFF","#8CC5FF","#B6DAFF","#D5EAFF","#EAF4FF","#E6DAEE","#D4BEE2","#BD9BD2","#9C6ABB","#7B38A5","#5A068E","#400565"],semantic:["#F41824","#FF9605","#FFCD00","#1E43EB"]},darkTheme:{qualitative:["#40A0FF","#BD5DFF","#007D70","#FF831D","#00A862","#FF576A","#B80F8B","#81CE04","#FF87FF","#00C3CC","#B80F8B","#4B7DA4","#B50D15"],sequential:["#002827","#004442","#005D5B","#007D79","#339794","#59ABA8","#8CC4C3","#B3D8D7","#CCE5E4","#EAEDFD"],sequential2:["#1D5895","#1E6BB9","#2880D9","#2E96FF","#58ABFF","#77BBFF","#A1D0FF","#C0DFFF","#D5EAFF","#EAF4FF"],diverging:["#005D5B","#007D79","#409D9B","#73B7B5","#A6D1D0","#CCE5E4","#E5F2F2","#F4DBEE","#EDC3E2","#E39FD1","#D87BBF","#CD57AE","#B80F8B","#8D0C6A"],diverging2:["#2678CA","#2E96FF","#62B0FF","#8CC5FF","#B6DAFF","#D5EAFF","#EAF4FF","#E6DAEE","#D4BEE2","#BD9BD2","#9C6ABB","#7B38A5","#5A068E","#400565"],semantic:["#F41824","#FF9605","#FFCD00","#2C4FED"]}}}},[[481,1,2]]]);
//# sourceMappingURL=main.76d5c32b.chunk.js.map