//	HYPE.documents["index"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="index.hyperesources",c="index",e="index_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/index_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_590","HYPE_dtl_590",!0==(null!=a&&10>a||false==!0)?"HYPE-590.full.min.js":"HYPE-590.thin.min.js"),false==!0&&(a=a||l("HYPE_w_590","HYPE_wdtl_590","HYPE-590.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"untitledFunction",source:"function(hypeDocument, element, event) {\t\n\t\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menu');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menuDelta = 100;\n\t\tvar menuFadeOut = 9000;\n\n\t\tif (scroll > menuDelta){\n\t\t\tmenu.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menuDelta){\n\t\t\tmenu.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menuFadeOut){\n\t\t\tmenu.classList.remove('sticky')\n\t\t}\n\t};\t\n\t\n\n\n}",identifier:"11"},{name:"untitledFunction2",source:"function(hypeDocument, element, event) {\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menub');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menubDelta = 100;\n\t\tvar menubFadeOut = 14000;\n\n\t\tif (scroll > menubDelta){\n\t\t\tmenub.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menubDelta){\n\t\t\tmenub.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menubFadeOut){\n\t\t\tmenub.classList.remove('sticky')\n\t\t}\n\t};\t\n}",identifier:"186"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_590(c,e,{"3":{p:1,n:"Article%20Nav_2x.jpg",g:"470",o:true,t:"@2x"},"12":{p:1,n:"On%20List_2x.png",g:"518",o:true,t:"@2x"},"21":{p:1,n:"Homepage%20Desktop%20Wear.jpg",g:"590",o:true,t:"@1x"},"4":{n:"1819512.mp4",g:"503",t:"video/mp4"},"30":{p:1,n:"Expanded%20List_2x.jpg",g:"498",o:true,t:"@2x"},"13":{p:1,n:"Article%20Detail%20-%20Desktop.jpg",g:"468",o:true,t:"@1x"},"5":{n:"1457162.mp4",g:"506",t:"video/mp4"},"22":{p:1,n:"Homepage%20Desktop%20Wear_2x.jpg",g:"590",o:true,t:"@2x"},"6":{p:1,n:"HeartIcon.png",g:"509",o:true,t:"@1x"},"31":{p:1,n:"Sweat%20WIth%20Us%20TItle.png",g:"671",o:true,t:"@1x"},"14":{p:1,n:"Article%20Detail%20-%20Desktop_2x.jpg",g:"468",o:true,t:"@2x"},"7":{p:1,n:"HeartIcon_2x.png",g:"509",o:true,t:"@2x"},"23":{p:1,n:"Homepage%20Desktop%20Learn.jpg",g:"591",o:true,t:"@1x"},"32":{p:1,n:"Sweat%20WIth%20Us%20TItle_2x.png",g:"671",o:true,t:"@2x"},"15":{p:1,n:"Homepage%20Expanded%20-%20Desktop.jpg",g:"496",o:true,t:"@1x"},"8":{n:"2009182.mp4",g:"514",t:"video/mp4"},"24":{p:1,n:"Homepage%20Desktop%20Learn_2x.jpg",g:"591",o:true,t:"@2x"},"9":{p:1,n:"Email%20Sign%20Up.jpg",g:"516",o:true,t:"@1x"},"33":{n:"1190572.mp4",g:"667",t:"video/mp4"},"16":{p:1,n:"Homepage%20Expanded%20-%20Desktop_2x.jpg",g:"496",o:true,t:"@2x"},"25":{p:1,n:"Homepage%20Desktop%20Watch.jpg",g:"592",o:true,t:"@1x"},"34":{p:1,n:"Sweat%20WIth%20Us%20Save%20Heart.png",g:"673",o:true,t:"@1x"},"17":{p:1,n:"Homepage%20Desktop%20Eat.jpg",g:"588",o:true,t:"@1x"},"26":{p:1,n:"Homepage%20Desktop%20Watch_2x.jpg",g:"592",o:true,t:"@2x"},"35":{p:1,n:"Sweat%20WIth%20Us%20Save%20Heart_2x.png",g:"673",o:true,t:"@2x"},"18":{p:1,n:"Homepage%20Desktop%20Eat_2x.jpg",g:"588",o:true,t:"@2x"},"27":{p:1,n:"Search%20Nav.png",g:"658",o:true,t:"@1x"},"36":{p:1,n:"StickyNav.jpg",g:"675",o:true,t:"@1x"},"19":{p:1,n:"Homepage%20Desktop%20Go.jpg",g:"589",o:true,t:"@1x"},"28":{p:1,n:"Search%20Nav_2x.png",g:"658",o:true,t:"@2x"},"-1":{n:"PIE.htc"},"37":{p:1,n:"StickyNav_2x.jpg",g:"675",o:true,t:"@2x"},"29":{p:1,n:"Expanded%20List.jpg",g:"498",o:true,t:"@1x"},"-2":{n:"blank.gif"},"38":{p:1,n:"Homepage%20Desktop.jpg",g:"467",o:true,t:"@1x"},"39":{p:1,n:"Homepage%20Desktop_2x.jpg",g:"467",o:true,t:"@2x"},"10":{p:1,n:"Email%20Sign%20Up_2x.jpg",g:"516",o:true,t:"@2x"},"0":{p:1,n:"Desktop%20Nav.jpg",g:"469",o:true,t:"@1x"},"1":{p:1,n:"Desktop%20Nav_2x.jpg",g:"469",o:true,t:"@2x"},"11":{p:1,n:"On%20List.png",g:"518",o:true,t:"@1x"},"2":{p:1,n:"Article%20Nav.jpg",g:"470",o:true,t:"@1x"},"20":{p:1,n:"Homepage%20Desktop%20Go_2x.jpg",g:"589",o:true,t:"@2x"}},h,[],d,[{n:"Homepage",o:"1",X:[0]},{n:"HP Move",o:"471",X:[1]},{n:"HP Eat",o:"523",X:[2]},{n:"HP Go",o:"536",X:[3]},{n:"HP Wear",o:"549",X:[4]},{n:"HP Learn",o:"562",X:[5]},{n:"HP Watch",o:"575",X:[6]},{n:"Article Page",o:"245",X:[7]}],[{A:{a:[{p:4,h:"11"}]},o:"3",p:"600px",cA:false,Y:1440,Z:7368,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"500":{i:"500",n:"Lists",z:0.1,b:[],a:[{f:"c",y:0,z:0.1,i:"e",e:1,s:0,o:"699"},{y:0.1,i:"e",s:1,z:0,o:"699",f:"c"}],f:30},"309":{i:"309",n:"Navigation",z:0,b:[],a:[],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:18.26,b:[],a:[{y:0,p:1,i:"Video Track",z:15.08,o:"691",f:"a"},{y:0,p:1,i:"Video Track",z:15.08,o:"686",f:"a"},{y:0,p:1,i:"Video Track",z:18.26,o:"685",f:"a"},{y:0,p:1,i:"Video Track",z:5.12,o:"697",f:"a"}],f:30},"663":{i:"663",n:"Search Nav",z:0.15,b:[],a:[{f:"c",y:0,z:0.15,i:"e",e:1,s:0,o:"681"},{y:0.15,i:"e",s:1,z:0,o:"681",f:"c"}],f:30}},bZ:180,O:["679","701","700","702","703","704","681","682","693","688","683","691","689","690","697","696","694","695","698","699","680","692","686","685","684","687"],n:"Untitled Layout","_":0,v:{"682":{h:"467",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:1,k:"div",c:1440,d:7327,r:"inline",cQ:1,cR:1},"701":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"700",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"695":{h:"673",p:"no-repeat",x:"visible",a:685,q:"100% 100%",b:23,j:"absolute",bF:"694",z:4,k:"div",dB:"img",d:26,c:30,r:"inline"},"687":{h:"509",p:"no-repeat",x:"visible",a:275,q:"100% 100%",b:14,j:"absolute",bF:"684",z:3,k:"div",dB:"img",d:22,c:25,r:"inline"},"679":{h:"675",p:"no-repeat",x:"visible",i:"menu",q:"100% 100%",b:-95,a:1,j:"absolute",z:97,k:"div",dB:"img",d:50,c:1440,r:"inline",aP:"pointer"},"691":{aR:"1",x:"visible",bE:"506",a:-298,b:0,j:"absolute",bF:"689",c:974,k:"video",z:1,d:548,aO:"0",aQ:"1",aH:"1"},"683":{c:27,d:23,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{b:"663",p:3,z:false,symbolOid:"2"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:71,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:1344,b:106},"702":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"700",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"696":{c:751,d:575,I:"None",J:"None",K:"None",g:"rgba(0, 0, 0, 0.211)",L:"None",M:0,N:0,bF:"694",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:2,P:0,D:"#D8DDE4",a:-10,b:-6},"688":{c:301,d:78,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"471"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:78,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:731,b:79},"692":{c:198,d:50,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{b:"500",p:3,z:false,symbolOid:"2"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:80,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:271,b:4665},"684":{k:"div",x:"hidden",c:312,d:422,z:68,r:"inline",a:64,j:"absolute",b:5803},"703":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"700",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Homepage",x:"visible",I:"None",a:611,y:"preserve",J:"None"},"697":{aR:"1",x:"visible",bE:"667",a:-110,b:-6,j:"absolute",bF:"694",c:1049,k:"video",z:1,d:575,aO:"0",aQ:"1",aH:"1"},"689":{k:"div",x:"hidden",c:401,d:548,z:67,a:63,j:"absolute",b:1165},"680":{c:53,d:25,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{b:"500",p:3,z:true,symbolOid:"2"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:77,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:1350,b:3968},"693":{c:41,d:23,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{b:"663",p:3,z:true,symbolOid:"2"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:72,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:1358,b:67},"685":{aR:"1",x:"visible",bE:"514",a:-227,b:0,j:"absolute",bF:"684",c:810,k:"video",z:2,d:422,aO:"0",aQ:"1",aH:"1"},"704":{b:7,z:7,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"700",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"245"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Article",x:"visible",I:"None",a:726,y:"preserve",J:"None"},"698":{h:"671",p:"no-repeat",x:"visible",a:166,q:"100% 100%",b:492,j:"absolute",bF:"694",z:3,k:"div",dB:"img",d:22,c:400,r:"inline"},"681":{h:"658",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:69,k:"div",c:1440,d:688,r:"inline",e:0},"700":{x:"visible",k:"div",c:1440,d:40,z:79,e:1,a:0,j:"absolute",b:0},"694":{k:"div",x:"hidden",c:741,d:569,z:2,a:64,j:"absolute",b:2129},"686":{aR:"1",x:"visible",bE:"506",a:-298,b:0,j:"absolute",bF:"684",c:974,k:"video",z:1,d:548,aO:"0",aQ:"1",aH:"1"},"699":{h:"498",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:3933,j:"absolute",dB:"img",z:70,k:"div",c:1440,d:863,r:"inline",e:0},"690":{h:"509",p:"no-repeat",x:"visible",a:355,q:"100% 100%",b:14,j:"absolute",bF:"689",z:2,k:"div",dB:"img",d:22,c:25,r:"inline"}}},{A:{a:[{p:4,h:"11"}]},o:"495",p:"600px",cA:false,Y:1440,Z:7070,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"492":{i:"492",n:"Navigation",z:0,b:[],a:[],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:15.08,b:[],a:[{y:0,p:1,i:"Video Track",z:15.08,o:"718",f:"a"}],f:30},"493":{i:"493",n:"Slideout SmartyCallOut",z:0,b:[],a:[],f:30},"660":{i:"660",n:"Search Bar Expanded",z:0.14,b:[],a:[{f:"c",y:0,z:0.14,i:"e",e:1,s:0,o:"714"},{y:0.14,i:"e",s:1,z:0,o:"714",f:"c"}],f:30},"494":{i:"494",n:"Expanded Navigation",z:0,b:[],a:[],f:30}},bZ:180,O:["706","710","708","709","712","711","714","707","720","715","713","716","705","718","717","719"],n:"Untitled Layout","_":1,v:{"715":{c:247,d:61,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:45,b:85},"718":{aR:"1",x:"visible",bE:"506",a:-298,b:0,j:"absolute",bF:"717",c:974,k:"video",z:1,d:548,aO:"0",aQ:"1",aH:"1"},"707":{h:"496",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:1,k:"div",c:1440,d:7029,r:"inline",cQ:1,cR:1},"713":{c:20,d:17,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:8,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:1038,b:103},"716":{c:39,d:30,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{b:"660",p:3,z:false,symbolOid:"472"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:6,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:1340,b:103},"705":{c:20,d:17,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"523"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:7,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:1038,b:126},"711":{b:7,z:7,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"708",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"245"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Article",x:"visible",I:"None",a:726,y:"preserve",J:"None"},"719":{h:"509",p:"no-repeat",x:"visible",a:355,q:"100% 100%",b:14,j:"absolute",bF:"717",z:2,k:"div",dB:"img",d:22,c:25,r:"inline"},"708":{x:"visible",k:"div",c:1440,d:40,z:75,e:1,a:0,j:"absolute",b:0},"714":{h:"658",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:4,k:"div",c:1440,d:688,r:"inline",e:0},"720":{c:41,d:18,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{b:"660",p:3,z:true,symbolOid:"472"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:5,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:1358,b:67},"717":{k:"div",x:"hidden",c:401,d:548,z:2,a:63,j:"absolute",b:1491},"706":{h:"469",p:"no-repeat",x:"visible",a:1,q:"100% 100%",b:-95,j:"absolute",dB:"img",z:92,k:"div",c:1440,d:50,r:"inline",aP:"pointer"},"712":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"708",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Homepage",x:"visible",I:"None",a:611,y:"preserve",J:"None"},"709":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"708",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"710":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"708",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0}}},{A:{a:[{p:4,h:"11"}]},o:"535",p:"600px",cA:false,Y:1440,Z:7870,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"533":{i:"533",n:"Slideout SmartyCallOut",z:0,b:[],a:[],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:18.26,b:[],a:[{y:0,p:1,i:"Video Track",z:15.08,o:"730",f:"a"},{y:0,p:1,i:"Video Track",z:15.08,o:"736",f:"a"},{y:0,p:1,i:"Video Track",z:18.26,o:"734",f:"a"}],f:30},"534":{i:"534",n:"Expanded Navigation",z:0,b:[],a:[],f:30},"532":{i:"532",n:"Navigation",z:0,b:[],a:[],f:30}},bZ:180,O:["721","724","722","723","726","725","732","727","728","737","730","729","731","736","734","733","735"],n:"Untitled Layout","_":2,v:{"729":{k:"div",x:"hidden",c:401,d:548,z:4,a:63,j:"absolute",b:1667},"724":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"722",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"730":{aR:"1",x:"visible",bE:"506",a:-298,b:0,j:"absolute",bF:"729",c:974,k:"video",z:1,d:548,aO:"0",aQ:"1",aH:"1"},"735":{h:"509",p:"no-repeat",x:"visible",a:355,q:"100% 100%",b:14,j:"absolute",bF:"733",z:3,k:"div",dB:"img",d:22,c:25,r:"inline"},"727":{c:247,d:61,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:6,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:45,b:85},"722":{x:"visible",k:"div",c:1440,d:40,z:70,e:1,a:0,j:"absolute",b:0},"733":{k:"div",x:"hidden",c:312,d:422,z:5,r:"inline",a:63,j:"absolute",b:6309},"736":{aR:"1",x:"visible",bE:"506",a:-298,b:0,j:"absolute",bF:"733",c:974,k:"video",z:1,d:548,aO:"0",aQ:"1",aH:"1"},"725":{b:7,z:7,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"722",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"245"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Article",x:"visible",I:"None",a:726,y:"preserve",J:"None"},"731":{h:"509",p:"no-repeat",x:"visible",a:355,q:"100% 100%",b:14,j:"absolute",bF:"729",z:2,k:"div",dB:"img",d:22,c:25,r:"inline"},"728":{c:20,d:17,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"471"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:997,b:105},"723":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"722",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"734":{aR:"1",x:"visible",bE:"514",a:-227,b:0,j:"absolute",bF:"733",c:810,k:"video",z:2,d:422,aO:"0",aQ:"1",aH:"1"},"737":{c:20,d:17,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"536"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:998,b:130},"726":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"722",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Homepage",x:"visible",I:"None",a:611,y:"preserve",J:"None"},"732":{h:"588",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:1,k:"div",c:1440,d:7832,r:"inline",cQ:1,cR:1},"721":{h:"469",p:"no-repeat",x:"visible",a:1,q:"100% 100%",b:-95,j:"absolute",dB:"img",z:87,k:"div",c:1440,d:50,r:"inline",aP:"pointer"}}},{A:{a:[{p:4,h:"11"}]},o:"548",p:"600px",cA:false,Y:1440,Z:7870,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"545":{i:"545",n:"Navigation",z:0,b:[],a:[],f:30},"546":{i:"546",n:"Slideout SmartyCallOut",z:0,b:[],a:[],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:18.26,b:[],a:[{y:0,p:1,i:"Video Track",z:15.08,o:"752",f:"a"},{y:0,p:1,i:"Video Track",z:15.08,o:"740",f:"a"},{y:0,p:1,i:"Video Track",z:18.26,o:"741",f:"a"}],f:30},"547":{i:"547",n:"Expanded Navigation",z:0,b:[],a:[],f:30}},bZ:180,O:["749","745","742","744","743","746","748","754","747","750","752","751","753","740","741","738","739"],n:"Untitled Layout","_":3,v:{"746":{b:7,z:7,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"742",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"245"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Article",x:"visible",I:"None",a:726,y:"preserve",J:"None"},"741":{aR:"1",x:"visible",bE:"514",a:-227,b:0,j:"absolute",bF:"738",c:810,k:"video",z:2,d:422,aO:"0",aQ:"1",aH:"1"},"752":{aR:"1",x:"visible",bE:"506",a:-298,b:0,j:"absolute",bF:"751",c:974,k:"video",z:1,d:548,aO:"0",aQ:"1",aH:"1"},"749":{h:"469",p:"no-repeat",x:"visible",a:1,q:"100% 100%",b:-95,j:"absolute",dB:"img",z:87,k:"div",c:1440,d:50,r:"inline",aP:"pointer"},"738":{k:"div",x:"hidden",c:312,d:422,z:3,r:"inline",a:63,j:"absolute",b:6309},"744":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"742",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"750":{c:20,d:17,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"549"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:6,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:987,b:130},"747":{c:20,d:17,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"523"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:5,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:987,b:105},"742":{x:"visible",k:"div",c:1440,d:40,z:70,e:1,a:0,j:"absolute",b:0},"753":{h:"509",p:"no-repeat",x:"visible",a:355,q:"100% 100%",b:14,j:"absolute",bF:"751",z:2,k:"div",dB:"img",d:22,c:25,r:"inline"},"739":{h:"509",p:"no-repeat",x:"visible",a:355,q:"100% 100%",b:14,j:"absolute",bF:"738",z:3,k:"div",dB:"img",d:22,c:25,r:"inline"},"745":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"742",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"740":{aR:"1",x:"visible",bE:"506",a:-298,b:0,j:"absolute",bF:"738",c:974,k:"video",z:1,d:548,aO:"0",aQ:"1",aH:"1"},"751":{k:"div",x:"hidden",c:401,d:548,z:2,a:63,j:"absolute",b:1667},"748":{h:"589",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:1,k:"div",c:1440,d:7832,r:"inline",cQ:1,cR:1},"743":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"742",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Homepage",x:"visible",I:"None",a:611,y:"preserve",J:"None"},"754":{c:247,d:61,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:4,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:45,b:85}}},{A:{a:[{p:4,h:"11"}]},o:"561",p:"600px",cA:false,Y:1440,Z:7870,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"558":{i:"558",n:"Navigation",z:0,b:[],a:[],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:18.26,b:[],a:[{y:0,p:1,i:"Video Track",z:15.08,o:"756",f:"a"},{y:0,p:1,i:"Video Track",z:15.08,o:"770",f:"a"},{y:0,p:1,i:"Video Track",z:18.26,o:"768",f:"a"}],f:30},"559":{i:"559",n:"Slideout SmartyCallOut",z:0,b:[],a:[],f:30},"560":{i:"560",n:"Expanded Navigation",z:0,b:[],a:[],f:30}},bZ:180,O:["758","763","759","762","760","761","766","771","764","765","756","755","757","770","768","767","769"],n:"Untitled Layout","_":4,v:{"763":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"759",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"766":{h:"590",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:1,k:"div",c:1440,d:7832,r:"inline",cQ:1,cR:1},"755":{k:"div",x:"hidden",c:401,d:548,z:3,a:63,j:"absolute",b:1667},"761":{b:7,z:7,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"759",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"245"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Article",x:"visible",I:"None",a:726,y:"preserve",J:"None"},"769":{h:"509",p:"no-repeat",x:"visible",a:355,q:"100% 100%",b:14,j:"absolute",bF:"767",z:3,k:"div",dB:"img",d:22,c:25,r:"inline"},"758":{h:"469",p:"no-repeat",x:"visible",a:1,q:"100% 100%",b:-95,j:"absolute",dB:"img",z:87,k:"div",c:1440,d:50,r:"inline",aP:"pointer"},"764":{c:20,d:17,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"536"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:5,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:1038,b:105},"770":{aR:"1",x:"visible",bE:"506",a:-298,b:0,j:"absolute",bF:"767",c:974,k:"video",z:1,d:548,aO:"0",aQ:"1",aH:"1"},"767":{k:"div",x:"hidden",c:312,d:422,z:4,r:"inline",a:63,j:"absolute",b:6309},"762":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"759",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"756":{aR:"1",x:"visible",bE:"506",a:-298,b:0,j:"absolute",bF:"755",c:974,k:"video",z:1,d:548,aO:"0",aQ:"1",aH:"1"},"759":{x:"visible",k:"div",c:1440,d:40,z:70,e:1,a:0,j:"absolute",b:0},"765":{c:20,d:17,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"562"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:6,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:1038,b:130},"760":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"759",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Homepage",x:"visible",I:"None",a:611,y:"preserve",J:"None"},"771":{c:247,d:61,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:45,b:85},"768":{aR:"1",x:"visible",bE:"514",a:-227,b:0,j:"absolute",bF:"767",c:810,k:"video",z:2,d:422,aO:"0",aQ:"1",aH:"1"},"757":{h:"509",p:"no-repeat",x:"visible",a:355,q:"100% 100%",b:14,j:"absolute",bF:"755",z:2,k:"div",dB:"img",d:22,c:25,r:"inline"}}},{A:{a:[{p:4,h:"11"}]},o:"574",p:"600px",cA:false,Y:1440,Z:7870,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"571":{i:"571",n:"Navigation",z:0,b:[],a:[],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:18.26,b:[],a:[{y:0,p:1,i:"Video Track",z:15.08,o:"774",f:"a"},{y:0,p:1,i:"Video Track",z:15.08,o:"786",f:"a"},{y:0,p:1,i:"Video Track",z:18.26,o:"787",f:"a"}],f:30},"572":{i:"572",n:"Slideout SmartyCallOut",z:0,b:[],a:[],f:30},"573":{i:"573",n:"Expanded Navigation",z:0,b:[],a:[],f:30}},bZ:180,O:["784","778","777","781","779","780","783","772","776","782","774","773","775","786","787","785","788"],n:"Untitled Layout","_":5,v:{"785":{k:"div",x:"hidden",c:312,d:422,z:4,r:"inline",a:63,j:"absolute",b:6309},"788":{h:"509",p:"no-repeat",x:"visible",a:355,q:"100% 100%",b:14,j:"absolute",bF:"785",z:3,k:"div",dB:"img",d:22,c:25,r:"inline"},"777":{x:"visible",k:"div",c:1440,d:40,z:70,e:1,a:0,j:"absolute",b:0},"772":{c:247,d:61,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:45,b:85},"783":{h:"591",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:1,k:"div",c:1440,d:7832,r:"inline",cQ:1,cR:1},"786":{aR:"1",x:"visible",bE:"506",a:-298,b:0,j:"absolute",bF:"785",c:974,k:"video",z:1,d:548,aO:"0",aQ:"1",aH:"1"},"775":{h:"509",p:"no-repeat",x:"visible",a:355,q:"100% 100%",b:14,j:"absolute",bF:"773",z:2,k:"div",dB:"img",d:22,c:25,r:"inline"},"781":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"777",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"778":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"777",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"773":{k:"div",x:"hidden",c:401,d:548,z:3,a:63,j:"absolute",b:1667},"784":{h:"469",p:"no-repeat",x:"visible",a:1,q:"100% 100%",b:-95,j:"absolute",dB:"img",z:87,k:"div",c:1440,d:50,r:"inline",aP:"pointer"},"787":{aR:"1",x:"visible",bE:"514",a:-227,b:0,j:"absolute",bF:"785",c:810,k:"video",z:2,d:422,aO:"0",aQ:"1",aH:"1"},"776":{c:20,d:17,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"549"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:5,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:1035,b:103},"782":{c:20,d:17,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"575"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:6,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:1035,b:128},"779":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"777",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Homepage",x:"visible",I:"None",a:611,y:"preserve",J:"None"},"774":{aR:"1",x:"visible",bE:"506",a:-298,b:0,j:"absolute",bF:"773",c:974,k:"video",z:1,d:548,aO:"0",aQ:"1",aH:"1"},"780":{b:7,z:7,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"777",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"245"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Article",x:"visible",I:"None",a:726,y:"preserve",J:"None"}}},{A:{a:[{p:4,h:"11"}]},o:"587",p:"600px",cA:false,Y:1440,Z:7870,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"586":{i:"586",n:"Expanded Navigation",z:0,b:[],a:[],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:18.26,b:[],a:[{y:0,p:1,i:"Video Track",z:15.08,o:"790",f:"a"},{y:0,p:1,i:"Video Track",z:15.08,o:"796",f:"a"},{y:0,p:1,i:"Video Track",z:18.26,o:"794",f:"a"}],f:30},"584":{i:"584",n:"Navigation",z:0,b:[],a:[],f:30},"585":{i:"585",n:"Slideout SmartyCallOut",z:0,b:[],a:[],f:30}},bZ:180,O:["797","802","798","801","799","800","803","804","805","792","790","789","791","796","794","793","795"],n:"Untitled Layout","_":6,v:{"799":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"798",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Homepage",x:"visible",I:"None",a:611,y:"preserve",J:"None"},"794":{aR:"1",x:"visible",bE:"514",a:-227,b:0,j:"absolute",bF:"793",c:810,k:"video",z:2,d:422,aO:"0",aQ:"1",aH:"1"},"801":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"798",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"797":{h:"469",p:"no-repeat",x:"visible",a:1,q:"100% 100%",b:-95,j:"absolute",dB:"img",z:87,k:"div",c:1440,d:50,r:"inline",aP:"pointer"},"792":{c:20,d:17,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:5,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:1059,b:129},"804":{c:247,d:61,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:6,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:45,b:85},"789":{k:"div",x:"hidden",c:401,d:548,z:2,a:63,j:"absolute",b:1667},"790":{aR:"1",x:"visible",bE:"506",a:-298,b:0,j:"absolute",bF:"789",c:974,k:"video",z:1,d:548,aO:"0",aQ:"1",aH:"1"},"795":{h:"509",p:"no-repeat",x:"visible",a:355,q:"100% 100%",b:14,j:"absolute",bF:"793",z:3,k:"div",dB:"img",d:22,c:25,r:"inline"},"802":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"798",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"798":{x:"visible",k:"div",c:1440,d:40,z:70,e:1,a:0,j:"absolute",b:0},"800":{b:7,z:7,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"798",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"245"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Article",x:"visible",I:"None",a:726,y:"preserve",J:"None"},"793":{k:"div",x:"hidden",c:312,d:422,z:3,r:"inline",a:63,j:"absolute",b:6309},"805":{c:20,d:17,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"562"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:4,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:1059,b:104},"796":{aR:"1",x:"visible",bE:"506",a:-298,b:0,j:"absolute",bF:"793",c:974,k:"video",z:1,d:548,aO:"0",aQ:"1",aH:"1"},"791":{h:"509",p:"no-repeat",x:"visible",a:355,q:"100% 100%",b:14,j:"absolute",bF:"789",z:2,k:"div",dB:"img",d:22,c:25,r:"inline"},"803":{h:"592",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:1,k:"div",c:1440,d:7832,r:"inline",cQ:1,cR:1}}},{A:{a:[{p:4,h:"186"}]},o:"282",p:"600px",cA:false,Y:1440,Z:6447,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"520":{i:"520",n:"List Hover State",z:0.19,b:[],a:[{f:"c",y:0,z:0.19,i:"e",e:1,s:0,o:"806"},{y:0.19,i:"e",s:1,z:0,o:"806",f:"c"}],f:30},"521":{i:"521",n:"Email Template Pop Up",z:0.19,b:[],a:[{f:"c",y:0,z:0.19,i:"e",e:1,s:0,o:"808"},{y:0.19,i:"e",s:1,z:0,o:"808",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:9.03,b:[],a:[{y:0,p:1,i:"Video Track",z:9.03,o:"819",f:"a"}],f:30}},bZ:180,O:["815","813","809","814","811","812","807","810","816","819","818","808","817","820","806","821"],n:"Untitled Layout","_":7,v:{"806":{h:"518",p:"no-repeat",x:"visible",a:62,q:"100% 100%",b:5259,j:"absolute",dB:"img",z:60,k:"div",c:1316,d:207,r:"inline",e:0},"812":{b:7,z:9,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"809",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"245"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Article<br>",x:"visible",I:"None",a:726,y:"preserve",J:"None"},"809":{x:"visible",k:"div",c:1440,d:40,z:63,e:1,a:0,j:"absolute",b:0},"810":{c:177,d:78,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"809",A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:7,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:51,b:97},"815":{h:"470",p:"no-repeat",x:"visible",i:"menub",q:"100% 100%",b:-180,a:0,j:"absolute",z:78,k:"div",dB:"img",d:172,c:1441,r:"inline"},"821":{c:1303,d:205,I:"None",J:"None",K:"None",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:61,P:0,D:"#D8DDE4",aC:{a:[{b:"520",p:3,z:true,symbolOid:"246"}]},a:73,aD:{a:[{b:"520",p:3,z:false,symbolOid:"246"}]},b:5259},"818":{k:"div",x:"hidden",c:1152,d:574,z:1,a:145,j:"absolute",b:604},"807":{w:"",h:"468",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:0,k:"div",c:1440,d:6408,r:"inline"},"813":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"809",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"816":{c:247,d:61,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:62,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:51,b:263},"811":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"809",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Homepage",x:"visible",I:"None",a:611,y:"preserve",J:"None"},"819":{aR:"1",x:"visible",bE:"503",a:-99,b:0,j:"absolute",bF:"818",c:1347,k:"video",z:1,d:646,aO:"0",aQ:"1",aH:"1"},"814":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"809",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"808":{h:"516",p:"no-repeat",x:"visible",a:197,q:"100% 100%",b:1597,j:"absolute",dB:"img",z:57,k:"div",c:1100,d:118,r:"inline",e:0},"820":{c:1193,d:123,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{b:"521",p:3,z:false,symbolOid:"246"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:59,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:102,b:1646},"817":{c:27,d:38,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{b:"521",p:3,z:true,symbolOid:"246"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:58,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:1268,b:1597}}}],{},g,{},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
