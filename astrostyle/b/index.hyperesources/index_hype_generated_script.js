//	HYPE.documents["index"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="index.hyperesources",c="index",e="index_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/index_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_598","HYPE_dtl_598",!0==(null!=a&&10>a||false==!0)?"HYPE-598.full.min.js":"HYPE-598.thin.min.js"),false==!0&&(a=a||l("HYPE_w_598","HYPE_wdtl_598","HYPE-598.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"untitledFunction",source:"function(hypeDocument, element, event) {\t\n\t\t\thero = hypeDocument.getElementById('hero');\n\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menu');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menuDelta = 100;\n\t\tvar menuFadeOut = 9000;\n\n\t\tif (scroll > menuDelta){\n\t\t\tmenu.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menuDelta){\n\t\t\tmenu.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menuFadeOut){\n\t\t\tmenu.classList.remove('sticky')\n\t\t}\n\t\tif (hero) hero.classList.add('scrolled');\n\t};\t\n\t\n\n\n}",identifier:"11"},{name:"untitledFunction2",source:"function(hypeDocument, element, event) {\t\n\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menub');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menubDelta = 100;\n\t\tvar menubFadeOut = 14000;\n\n\t\tif (scroll > menubDelta){\n\t\t\tmenub.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menubDelta){\n\t\t\tmenub.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menubFadeOut){\n\t\t\tmenub.classList.remove('sticky')\n\t\t}\n\t};\t\n}",identifier:"186"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_598(c,e,{"10":{p:1,n:"C2%20-%20Homepage%201440%20V2%20Copy.jpg",g:"509",o:true,t:"@1x"},"2":{p:1,n:"C1%20Pop%20Out.png",g:"479",o:true,t:"@1x"},"-2":{n:"blank.gif"},"3":{p:1,n:"C1%20Pop%20Out_2x.png",g:"479",o:true,t:"@2x"},"11":{p:1,n:"C2%20-%20Homepage%201440%20V2%20Copy_2x.jpg",g:"509",o:true,t:"@2x"},"4":{p:1,n:"Sticky%20Nav%20-%20Scroll%20Up%20V2.jpg",g:"506",o:true,t:"@1x"},"5":{p:1,n:"Sticky%20Nav%20-%20Scroll%20Up%20V2_2x.jpg",g:"506",o:true,t:"@2x"},"12":{p:1,n:"C2%20-%20Sign%20Landing%20Page%20V3%20Copy%203.jpg",g:"508",o:true,t:"@1x"},"6":{p:1,n:"Landing%20Screen.jpg",g:"510",o:true,t:"@1x"},"13":{p:1,n:"C2%20-%20Sign%20Landing%20Page%20V3%20Copy%203_2x.jpg",g:"508",o:true,t:"@2x"},"7":{p:1,n:"Landing%20Screen_2x.jpg",g:"510",o:true,t:"@2x"},"-1":{n:"PIE.htc"},"0":{p:1,n:"StickyNav.jpg",g:"446",o:true,t:"@1x"},"8":{p:1,n:"C2%20-%20Homepage%20Expanded%20Navigation%20V2.jpg",g:"520",o:true,t:"@1x"},"1":{p:1,n:"StickyNav_2x.jpg",g:"446",o:true,t:"@2x"},"9":{p:1,n:"C2%20-%20Homepage%20Expanded%20Navigation%20V2_2x.jpg",g:"520",o:true,t:"@2x"}},h,[],d,[{n:"Homepage",o:"1",X:[0]},{n:"Sign Detail",o:"245",X:[1]},{n:"Navigation",o:"517",X:[2]}],[{A:{a:[{p:4,h:"11"}]},o:"3",p:"600px",cA:false,Y:1440,Z:3834,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"309":{i:"309",n:"Navigation",z:0,b:[],a:[],f:30},"513":{i:"513",n:"CoverPage",z:0.11,b:[],a:[{f:"c",y:0,z:0.11,i:"b",e:-838,s:40,o:"527"},{y:0.11,i:"b",s:-838,z:0,o:"527",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["534","529","528","532","531","530","527","526","525","533","524"],n:"Untitled Layout","_":0,v:{"525":{c:28,d:27,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",aP:"pointer",M:1,N:1,A:"#D8DDE4",x:"visible",aA:{a:[{b:"503",p:3,z:false,symbolOid:"2"}]},O:1,j:"absolute",k:"div",dB:"button",z:88,C:"#D8DDE4",D:"#D8DDE4",aC:{a:[{b:"503",p:3,z:true,symbolOid:"2"}]},B:"#D8DDE4",P:1,a:1375,b:80},"528":{x:"visible",k:"div",c:1440,d:40,z:66,e:1,a:0,j:"absolute",b:0},"531":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"528",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Homepage",x:"visible",I:"None",a:611,y:"preserve",J:"None"},"534":{h:"506",p:"no-repeat",x:"visible",i:"menu",q:"100% 100%",b:-95,a:1,j:"absolute",z:98,k:"div",dB:"img",d:63,c:1440,r:"inline",aP:"pointer"},"524":{c:318,d:408,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",aP:"pointer",M:1,N:1,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"245"}]},O:1,j:"absolute",k:"div",dB:"button",z:86,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:1,a:41,b:1942},"527":{h:"510",p:"no-repeat",x:"visible",i:"hero",q:"100% 100%",b:40,a:0,j:"absolute",z:2,k:"div",dB:"img",d:877.39099999999996,c:1440,r:"inline"},"530":{b:7,z:7,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"528",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"245"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Sign Detail",x:"visible",I:"None",a:726,y:"preserve",J:"None"},"533":{c:32,d:29,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"517"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:89,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:1358,b:286},"526":{h:"509",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:1,k:"div",c:1440,d:3797,r:"inline",cQ:1,cR:1},"529":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"528",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"532":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"528",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5}}},{A:{a:[{p:4,h:"186"}]},o:"282",p:"600px",cA:false,Y:1440,Z:7770,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"465":{i:"465",n:"Expanded Navigation",z:0,b:[],a:[],f:30},"481":{i:"481",n:"Fertility Condition",z:0.15,b:[],a:[{f:"c",y:0,z:0.15,i:"e",e:1,s:0,o:"538"},{y:0.15,i:"e",s:1,z:0,o:"538",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["545","543","539","544","541","542","546","540","538","535","537","536"],n:"Untitled Layout","_":1,v:{"539":{x:"visible",k:"div",c:1440,d:40,z:55,e:1,a:0,j:"absolute",b:0},"540":{c:177,d:78,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"539",A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:7,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:51,b:97},"545":{h:"506",p:"no-repeat",x:"visible",i:"menub",q:"100% 100%",b:-81,a:1,j:"absolute",z:73,k:"div",dB:"img",d:63,c:1440,r:"inline"},"537":{c:1445,d:55,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"535",A:"#D8DDE4",x:"visible",aA:{a:[{b:"449",p:3,z:false,symbolOid:"246"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:13},"543":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"539",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"546":{w:"",h:"508",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:0,k:"div",c:1440,d:7728,r:"inline"},"541":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"539",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Homepage",x:"visible",I:"None",a:611,y:"preserve",J:"None"},"535":{k:"div",x:"visible",c:1440,d:81,z:52,a:0,j:"absolute",b:1333},"538":{h:"479",p:"no-repeat",x:"visible",a:1,q:"100% 100%",b:1298,j:"absolute",dB:"img",z:57,k:"div",c:1440,d:906,r:"inline",e:0},"544":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"539",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"536":{h:"446",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:41,j:"absolute",cY:"0",z:1,k:"div",dB:"img",d:81,bF:"535",c:1440,e:0,r:"inline"},"542":{b:7,z:9,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"539",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"245"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"<span style=\"color: rgb(255, 255, 255); font-family: Helvetica, Arial, sans-serif; font-size: 11px; font-style: normal; font-variant-caps: normal; letter-spacing: normal; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; word-spacing: 0px; background-color: rgb(51, 51, 51); text-decoration: none;\">Sign Detail<br></span><br>",x:"visible",I:"None",a:726,y:"preserve",J:"None"}}},{o:"519",p:"600px",cA:false,Y:1440,Z:3834,L:[],c:"#FFFFFF",bY:1,d:1440,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["547","548","549"],n:"Untitled Layout","_":2,v:{"547":{h:"520",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",c:1440,d:3791.9999999999995,r:"inline"},"548":{c:33,d:36,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:1350,b:16},"549":{c:175,d:169,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"245"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:191,b:163}}}],{},g,{},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
