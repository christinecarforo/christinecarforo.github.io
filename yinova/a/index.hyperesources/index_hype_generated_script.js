//	HYPE.documents["index"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="index.hyperesources",c="index",e="index_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/index_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_590","HYPE_dtl_590",!0==(null!=a&&10>a||false==!0)?"HYPE-590.full.min.js":"HYPE-590.thin.min.js"),false==!0&&(a=a||l("HYPE_w_590","HYPE_wdtl_590","HYPE-590.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"untitledFunction",source:"function(hypeDocument, element, event) {\t\n\t\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menu');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menuDelta = 100;\n\t\tvar menuFadeOut = 9000;\n\n\t\tif (scroll > menuDelta){\n\t\t\tmenu.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menuDelta){\n\t\t\tmenu.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menuFadeOut){\n\t\t\tmenu.classList.remove('sticky')\n\t\t}\n\t};\t\n\t\n\n\n}",identifier:"11"},{name:"untitledFunction2",source:"function(hypeDocument, element, event) {\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menub');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menubDelta = 100;\n\t\tvar menubFadeOut = 14000;\n\n\t\tif (scroll > menubDelta){\n\t\t\tmenub.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menubDelta){\n\t\t\tmenub.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menubFadeOut){\n\t\t\tmenub.classList.remove('sticky')\n\t\t}\n\t};\t\n}",identifier:"186"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_590(c,e,{"10":{p:1,n:"C1%20Homepage%20Design%20V1.jpg",g:"476",o:true,t:"@1x"},"2":{p:1,n:"C1%20Yinova%20Sticky%20Nav%20V1.jpg",g:"468",o:true,t:"@1x"},"-2":{n:"blank.gif"},"3":{p:1,n:"C1%20Yinova%20Sticky%20Nav%20V1_2x.jpg",g:"468",o:true,t:"@2x"},"11":{p:1,n:"C1%20Homepage%20Design%20V1_2x.jpg",g:"476",o:true,t:"@2x"},"4":{p:1,n:"Navigation.png",g:"469",o:true,t:"@1x"},"5":{p:1,n:"Navigation_2x.png",g:"469",o:true,t:"@2x"},"12":{n:"FORYINOVA.mp4",g:"428",t:"video/mp4"},"6":{p:1,n:"C1%20Fertility%20Design%20V1.jpg",g:"471",o:true,t:"@1x"},"13":{p:1,n:"C1%20Pop%20Out.png",g:"479",o:true,t:"@1x"},"7":{p:1,n:"C1%20Fertility%20Design%20V1_2x.jpg",g:"471",o:true,t:"@2x"},"-1":{n:"PIE.htc"},"0":{p:1,n:"StickyNav.jpg",g:"446",o:true,t:"@1x"},"8":{p:1,n:"C1%20Yinova%20Desktop%20Nav%20Fertility%20Design.jpg",g:"474",o:true,t:"@1x"},"14":{p:1,n:"C1%20Pop%20Out_2x.png",g:"479",o:true,t:"@2x"},"1":{p:1,n:"StickyNav_2x.jpg",g:"446",o:true,t:"@2x"},"9":{p:1,n:"C1%20Yinova%20Desktop%20Nav%20Fertility%20Design_2x.jpg",g:"474",o:true,t:"@2x"}},h,[],d,[{n:"Homepage",o:"1",X:[0]},{n:"Fertility",o:"245",X:[1]}],[{A:{a:[{p:4,h:"11"}]},o:"3",p:"600px",cA:false,Y:1440,Z:5585,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"309":{i:"309",n:"Navigation",z:0,b:[],a:[],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:16.24,b:[],a:[{y:0,p:1,i:"Video Track",z:16.24,o:"491",f:"a"}],f:30},"460":{i:"460",n:"Expanded Navigation",z:0.15,b:[],a:[{f:"c",y:0,z:0.15,i:"e",e:1,s:0,o:"493"},{y:0.15,i:"e",s:1,z:0,o:"493",f:"c"}],f:30},"436":{i:"436",n:"Slideout SmartyCallOut",z:0,b:[],a:[],f:30}},bZ:180,O:["484","491","488","485","486","487","489","492","493","490","483","494","495"],n:"Untitled Layout","_":0,v:{"485":{x:"visible",k:"div",c:1440,d:40,z:65,e:1,a:0,j:"absolute",b:0},"491":{aR:"1",x:"visible",bE:"428",a:-8,b:-88,j:"absolute",bF:"490",c:1456,k:"video",z:1,d:812,aO:"0",aQ:"1",aH:"1"},"488":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"485",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"494":{h:"469",p:"no-repeat",x:"visible",a:41,q:"100% 100%",b:75,j:"absolute",dB:"img",z:79,k:"div",c:1354,d:107,r:"inline"},"483":{h:"476",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:1,k:"div",c:1440,d:5545,r:"inline",cQ:1,cR:1},"486":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"485",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"492":{c:1456,d:693,I:"None",r:"inline",J:"None",K:"None",L:"None",M:0,N:0,bF:"490",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:2,l:0,D:"#D8DDE4",m:"rgba(0, 0, 0, 0.000)",P:0,n:"rgba(0, 0, 0, 0.203)",a:-8,b:0},"489":{b:7,z:7,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"485",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"245"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Fertility",x:"visible",I:"None",a:726,y:"preserve",J:"None"},"484":{h:"468",p:"no-repeat",x:"visible",i:"menu",q:"100% 100%",b:-95,a:1,j:"absolute",z:85,k:"div",dB:"img",d:55,c:1440,r:"inline",aP:"pointer"},"490":{k:"div",x:"hidden",c:1440,d:693,z:73,a:0,j:"absolute",b:39},"495":{c:58,d:27,I:"None",e:1,J:"None",K:"None",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:81,P:0,D:"#D8DDE4",aC:{a:[{b:"460",p:3,z:true,symbolOid:"2"}]},a:646,aD:{a:[{b:"460",p:3,z:false,symbolOid:"2"}]},b:161},"487":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"485",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Homepage",x:"visible",I:"None",a:611,y:"preserve",J:"None"},"493":{h:"474",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:38,j:"absolute",dB:"img",z:80,k:"div",c:1440,d:450,r:"inline",e:0}}},{A:{a:[{p:4,h:"186"}]},o:"282",p:"600px",cA:false,Y:1440,Z:5543,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"465":{i:"465",n:"Expanded Navigation",z:0,b:[],a:[],f:30},"481":{i:"481",n:"Fertility Condition",z:0.15,b:[],a:[{f:"c",y:0,z:0.15,i:"e",e:1,s:0,o:"509"},{y:0.15,i:"e",s:1,z:0,o:"509",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["505","503","499","504","501","502","507","500","506","509","510","496","498","497","508"],n:"Untitled Layout","_":1,v:{"508":{c:100,d:25,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",aP:"pointer",M:1,N:1,A:"#D8DDE4",x:"visible",aA:{a:[{b:"481",p:3,z:false,symbolOid:"246"}]},O:1,j:"absolute",k:"div",dB:"button",z:59,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:1,a:144,b:1589},"503":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"499",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"496":{k:"div",x:"visible",c:1440,d:81,z:52,a:0,j:"absolute",b:1333},"499":{x:"visible",k:"div",c:1440,d:40,z:55,e:1,a:0,j:"absolute",b:0},"501":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"499",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Homepage",x:"visible",I:"None",a:611,y:"preserve",J:"None"},"506":{c:58,d:27,I:"None",e:1,J:"None",K:"None",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:56,P:0,D:"#D8DDE4",aC:{a:[{b:"460",p:3,z:true,symbolOid:"2"}]},a:646,aD:{a:[{b:"460",p:3,z:false,symbolOid:"2"}]},b:161},"509":{h:"479",p:"no-repeat",x:"visible",a:1,q:"100% 100%",b:1298,j:"absolute",dB:"img",z:57,k:"div",c:1440,d:906,r:"inline",e:0},"504":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"499",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"497":{h:"446",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:41,j:"absolute",cY:"0",z:1,k:"div",dB:"img",d:81,bF:"496",c:1440,e:0,r:"inline"},"510":{c:469,d:63,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",aP:"pointer",M:1,N:1,A:"#D8DDE4",x:"visible",aA:{a:[{b:"481",p:3,z:true,symbolOid:"246"}]},O:1,j:"absolute",k:"div",dB:"button",z:58,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:1,a:969,b:1298},"507":{w:"",h:"471",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:0,k:"div",c:1440,d:5503,r:"inline"},"502":{b:7,z:9,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"499",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"245"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Fertility<br>",x:"visible",I:"None",a:726,y:"preserve",J:"None"},"505":{h:"468",p:"no-repeat",x:"visible",i:"menub",q:"100% 100%",b:-81,a:1,j:"absolute",z:73,k:"div",dB:"img",d:55,c:1440,r:"inline"},"498":{c:1445,d:55,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"496",A:"#D8DDE4",x:"visible",aA:{a:[{b:"449",p:3,z:false,symbolOid:"246"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:13},"500":{c:177,d:78,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"499",A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:7,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:51,b:97}}}],{},g,{},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
