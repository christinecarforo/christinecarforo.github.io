//	HYPE.documents["index"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="index.hyperesources",c="index",e="index_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/index_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_590","HYPE_dtl_590",!0==(null!=a&&10>a||false==!0)?"HYPE-590.full.min.js":"HYPE-590.thin.min.js"),false==!0&&(a=a||l("HYPE_w_590","HYPE_wdtl_590","HYPE-590.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"untitledFunction",source:"function(hypeDocument, element, event) {\t\n\t\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menu');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menuDelta = 100;\n\t\tvar menuFadeOut = 9000;\n\n\t\tif (scroll > menuDelta){\n\t\t\tmenu.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menuDelta){\n\t\t\tmenu.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menuFadeOut){\n\t\t\tmenu.classList.remove('sticky')\n\t\t}\n\t};\t\n\t\n\n\n}",identifier:"11"},{name:"untitledFunction2",source:"function(hypeDocument, element, event) {\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menub');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menubDelta = 100;\n\t\tvar menubFadeOut = 14000;\n\n\t\tif (scroll > menubDelta){\n\t\t\tmenub.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menubDelta){\n\t\t\tmenub.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menubFadeOut){\n\t\t\tmenub.classList.remove('sticky')\n\t\t}\n\t};\t\n}",identifier:"186"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_590(c,e,{"10":{p:1,n:"Navigation%20Expanded_2x.jpg",g:"390",o:true,t:"@2x"},"2":{p:1,n:"Cart%20Slide%20Out_2x.jpg",g:"305",o:true,t:"@2x"},"-2":{n:"blank.gif"},"3":{p:1,n:"Button1.jpg",g:"316",o:true,t:"@1x"},"11":{p:1,n:"Homepage%20-%20Desktop.jpg",g:"386",o:true,t:"@1x"},"4":{p:1,n:"Button1_2x.jpg",g:"316",o:true,t:"@2x"},"5":{p:1,n:"Homepage%20Sticky%20Nav.jpg",g:"388",o:true,t:"@1x"},"12":{p:1,n:"Homepage%20-%20Desktop_2x.jpg",g:"386",o:true,t:"@2x"},"6":{p:1,n:"Homepage%20Sticky%20Nav_2x.jpg",g:"388",o:true,t:"@2x"},"13":{p:1,n:"PDP%20Desktop.jpg",g:"387",o:true,t:"@1x"},"7":{p:1,n:"PDP%20Sticky%20Navigation.jpg",g:"389",o:true,t:"@1x"},"-1":{n:"PIE.htc"},"0":{p:1,n:"Pasted-1.png",g:"179",t:"@1x"},"8":{p:1,n:"PDP%20Sticky%20Navigation_2x.jpg",g:"389",o:true,t:"@2x"},"14":{p:1,n:"PDP%20Desktop_2x.jpg",g:"387",o:true,t:"@2x"},"1":{p:1,n:"Cart%20Slide%20Out.jpg",g:"305",o:true,t:"@1x"},"9":{p:1,n:"Navigation%20Expanded.jpg",g:"390",o:true,t:"@1x"}},h,[],d,[{n:"Concept B Homepage",o:"1",X:[0]},{n:"Concept B - PDP",o:"245",X:[1]}],[{A:{a:[{p:4,h:"11"}]},o:"3",p:"600px",cA:false,Y:1440,Z:5740,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"310":{i:"310",n:"Cart Slide Out",z:1,b:[],a:[{f:"c",y:0,z:1,i:"e",e:1,s:0,o:"395"},{f:"c",y:0,z:1,i:"e",e:1,s:0,o:"396"},{y:1,i:"e",s:1,z:0,o:"395",f:"c"},{y:1,i:"e",s:1,z:0,o:"396",f:"c"}],f:30},"309":{i:"309",n:"Navigation",z:1,b:[],a:[{f:"c",y:0,z:1,i:"e",e:1,s:0,o:"408"},{y:1,i:"e",s:1,z:0,o:"408",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30},"392":{i:"392",n:"Navigation Dropdown",z:0.06,b:[],a:[{f:"c",y:0,z:0.06,i:"e",e:1,s:0,o:"409"},{y:0.06,i:"e",s:1,z:0,o:"409",f:"c"}],f:30},"319":{i:"319",n:"Button 1",z:0.08,b:[],a:[{f:"c",y:0,z:0.08,i:"e",e:1,s:0,o:"406"},{y:0.08,i:"e",s:1,z:0,o:"406",f:"c"}],f:30}},bZ:180,O:["398","402","399","396","400","401","403","407","408","395","394","409","397","404","405","393","406"],n:"Untitled Layout","_":0,v:{"401":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"399",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Concept B",x:"visible",I:"None",a:611,y:"preserve",J:"None"},"394":{k:"div",x:"visible",c:521,d:1029,z:52,a:920,j:"absolute",b:25},"406":{h:"316",p:"no-repeat",x:"visible",a:119,q:"100% 100%",b:1451,j:"absolute",dB:"img",z:56,k:"div",c:555,d:44,r:"inline",e:0},"409":{h:"390",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:19,j:"absolute",dB:"img",z:2,k:"div",bF:"407",d:483,c:1440,r:"inline",e:0},"404":{c:37,d:31,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:0}]},j:"absolute",O:0,k:"div",dB:"button",z:57,C:"#D8DDE4",D:"#D8DDE4",aC:{a:[{b:"310",p:3,z:true,symbolOid:"2"}]},B:"#D8DDE4",P:0,a:1361,aD:{a:[{b:"310",p:3,z:false,symbolOid:"2"}]},b:102},"397":{h:"386",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:1,k:"div",c:1440,d:5702,r:"inline",cQ:1,cR:1},"407":{k:"div",x:"visible",c:404,d:844,z:55,a:1,j:"absolute",b:23},"395":{h:"305",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"394",d:1029,c:521,r:"inline",e:0},"402":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"399",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"398":{h:"388",p:"no-repeat",x:"visible",i:"menu",q:"100% 100%",b:-81,a:1,j:"absolute",z:50,k:"div",dB:"img",d:50,c:1440,r:"inline",aP:"pointer"},"400":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"399",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"393":{c:558,d:55,I:"None",J:"None",K:"None",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:58,P:0,D:"#D8DDE4",aC:{a:[{b:"319",p:3,z:true,symbolOid:"2"}]},a:119,aD:{a:[{b:"319",p:3,z:false,symbolOid:"2"}]},b:1445},"405":{c:47,d:31,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:0}]},j:"absolute",O:0,k:"div",dB:"button",z:59,C:"#D8DDE4",D:"#D8DDE4",aC:{a:[{b:"392",p:3,z:true,symbolOid:"2"}]},B:"#D8DDE4",P:0,a:1196,aD:{a:[{b:"392",p:3,z:false,symbolOid:"2"}]},b:107},"408":{c:1036,d:842,I:"None",e:0,J:"None",K:"None",g:"rgba(0, 0, 0, 0.101)",L:"None",M:0,N:0,bF:"407",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:3,P:0,D:"#D8DDE4",a:403,b:0},"403":{b:7,z:7,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"399",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"245"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Concept B-2",x:"visible",I:"None",a:726,y:"preserve",J:"None"},"396":{c:918,d:1052,I:"None",e:0,J:"None",K:"None",g:"rgba(0, 0, 0, 0.100)",L:"None",M:0,N:0,bF:"394",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:2,P:0,D:"#D8DDE4",a:-920,b:-25},"399":{x:"visible",k:"div",c:1440,d:40,z:60,e:1,a:0,j:"absolute",b:0}}},{A:{a:[{p:4,h:"186"}]},o:"282",p:"600px",cA:false,Y:1440,Z:4850,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"276":{i:"276",n:"Content Nav",z:0,b:[],a:[],f:30},"293":{i:"293",n:"StudioHover",z:0,b:[],a:[],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["418","410","415","413","417","416","414","412","411"],n:"Untitled Layout","_":1,v:{"411":{h:"179",p:"no-repeat",x:"visible",a:80,q:"100% 100%",b:331,j:"absolute",dB:"img",z:48,k:"div",c:402,d:253,r:"none"},"414":{b:7,z:7,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"413",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"245"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Concept A-2",x:"visible",I:"None",a:726,y:"preserve",J:"None"},"417":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"413",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"410":{c:308,d:124,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,w:"",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},j:"absolute",O:0,k:"div",dB:"button",z:41,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:0,a:-7,b:0},"413":{x:"visible",k:"div",c:1440,d:40,z:57,e:1,a:0,j:"absolute",b:0},"416":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"413",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Concept A",x:"visible",I:"None",a:611,y:"preserve",J:"None"},"412":{w:"",h:"387",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:1,k:"div",c:1440,d:4823,r:"inline"},"415":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"413",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"418":{h:"389",p:"no-repeat",x:"visible",i:"menub",q:"100% 100%",b:-81,a:1,j:"absolute",z:56,k:"div",dB:"img",d:80,c:1440,r:"inline"}}}],{},g,{},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
