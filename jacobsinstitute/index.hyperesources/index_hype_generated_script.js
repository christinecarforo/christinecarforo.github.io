//	HYPE.documents["index"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="index.hyperesources",c="index",e="index_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/index_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_598","HYPE_dtl_598",!0==(null!=a&&10>a||false==!0)?"HYPE-598.full.min.js":"HYPE-598.thin.min.js"),false==!0&&(a=a||l("HYPE_w_598","HYPE_wdtl_598","HYPE-598.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"untitledFunction",source:"function(hypeDocument, element, event) {\t\n\t\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menu');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menuDelta = 100;\n\t\tvar menuFadeOut = 9000;\n\n\t\tif (scroll > menuDelta){\n\t\t\tmenu.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menuDelta){\n\t\t\tmenu.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menuFadeOut){\n\t\t\tmenu.classList.remove('sticky')\n\t\t}\n\t};\t\n\t\n\n\n}",identifier:"11"},{name:"untitledFunction2",source:"function(hypeDocument, element, event) {\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menub');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menubDelta = 100;\n\t\tvar menubFadeOut = 14000;\n\n\t\tif (scroll > menubDelta){\n\t\t\tmenub.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menubDelta){\n\t\t\tmenub.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menubFadeOut){\n\t\t\tmenub.classList.remove('sticky')\n\t\t}\n\t};\t\n}",identifier:"186"},{name:"untitledFunction3",source:"function(hypeDocument, element, event) {\t\n\tlockLogo = hypeDocument.getElementById('lockLogo');\n\n\twindow.onscroll = function(){\n\tvar scroll3 = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n        \n        var menuDelta3 = 1233;\n        var menuRelease = 4178;\n\n        if (scroll3 > menuDelta3){\n            lockLogo.classList.add('sticky3')\n        }\n        if (scroll3 <= menuDelta3){\n            lockLogo.classList.remove('sticky3')\n            lockLogo.classList.remove('stickyRelease')\n        }\n        \n        if (scroll3 <= menuRelease){\n            lockLogo.classList.remove('stickyRelease')\n        }\n        \n        if (scroll3 > menuRelease){\n            lockLogo.classList.remove('sticky3')\n            lockLogo.classList.add('stickyRelease')\n        }\n     };\n}",identifier:"563"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_598(c,e,{"3":{p:1,n:"Meet%20Our%20People%20Who%20We%20Are.png",g:"546",o:true,t:"@1x"},"12":{p:1,n:"Flag%20Icon_2x.png",g:"544",o:true,t:"@2x"},"21":{p:1,n:"Newscard_FirstCard_2x.png",g:"582",o:true,t:"@2x"},"4":{p:1,n:"Meet%20Our%20People%20Who%20We%20Are_2x.png",g:"546",o:true,t:"@2x"},"30":{p:1,n:"Estrin_Deborah_007hr5-1.jpg",g:"593",o:true,t:"@1x"},"13":{p:1,n:"Jacobs%20T%20Blue_w%20lockup.png",g:"552",t:"@1x"},"5":{p:1,n:"Navigation.png",g:"524",o:true,t:"@1x"},"22":{p:1,n:"Man.png",g:"530",o:true,t:"@1x"},"6":{p:1,n:"Navigation_2x.png",g:"524",o:true,t:"@2x"},"31":{p:1,n:"Estrin_Deborah_007hr5-1_2x.jpg",g:"593",o:true,t:"@2x"},"14":{p:1,n:"StickyNav.png",g:"535",o:true,t:"@1x"},"7":{p:1,n:"Intro.png",g:"532",o:true,t:"@1x"},"23":{p:1,n:"Man_2x.png",g:"530",o:true,t:"@2x"},"32":{p:1,n:"deb%20text.png",g:"595",o:true,t:"@1x"},"15":{p:1,n:"StickyNav_2x.png",g:"535",o:true,t:"@2x"},"8":{p:1,n:"Intro_2x.png",g:"532",o:true,t:"@2x"},"24":{n:"Untitled_Small.mov",g:"589",t:"video/quicktime"},"9":{p:1,n:"Woman.png",g:"557",o:true,t:"@1x"},"33":{p:1,n:"deb%20text_2x.png",g:"595",o:true,t:"@2x"},"16":{p:1,n:"Stocksy_comp_584112.jpg",g:"576",o:true,t:"@1x"},"25":{n:"Video.mp4",g:"589",t:"video/mp4"},"34":{p:1,n:"Pioners%20In%20Amereica.png",g:"542",o:true,t:"@1x"},"17":{p:1,n:"Stocksy_comp_584112_2x.jpg",g:"576",o:true,t:"@2x"},"26":{p:1,n:"Jacobs%20Institute%201440.png",g:"564",o:true,t:"@1x"},"35":{p:1,n:"Pioners%20In%20Amereica_2x.png",g:"542",o:true,t:"@2x"},"18":{p:1,n:"Man.jpg",g:"579",o:true,t:"@1x"},"27":{p:1,n:"Jacobs%20Institute%201440_2x.png",g:"564",o:true,t:"@2x"},"36":{p:1,n:"Bar.png",g:"541",t:"@1x"},"19":{p:1,n:"Man_2x.jpg",g:"579",o:true,t:"@2x"},"28":{p:1,n:"deb.jpg",g:"591",o:true,t:"@1x"},"-1":{n:"PIE.htc"},"29":{p:1,n:"deb_2x.jpg",g:"591",o:true,t:"@2x"},"-2":{n:"blank.gif"},"10":{p:1,n:"Woman_2x.png",g:"557",o:true,t:"@2x"},"0":{p:1,n:"Texture.png",g:"550",o:true,t:"@1x"},"1":{p:1,n:"Texture_2x.png",g:"550",o:true,t:"@2x"},"11":{p:1,n:"Flag%20Icon.png",g:"544",o:true,t:"@1x"},"2":{p:1,n:"Pasted.jpg",g:"567",o:true,t:"@1x"},"20":{p:1,n:"Newscard_FirstCard.png",g:"582",o:true,t:"@1x"}},h,[],d,[{n:"Homepage",o:"1",X:[0]}],[{A:{a:[{p:4,h:"11"},{p:4,h:"563"}]},o:"3",p:"600px",cA:false,Y:1440,Z:5390,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"602":{i:"602",n:"Deb",z:0.03,b:[],a:[{y:0,i:"cY",s:"0",z:0,o:"620",f:"c"},{f:"c",y:0,z:0.03,i:"e",e:1,s:0,o:"620"},{y:0.03,i:"e",s:1,z:0,o:"620",f:"c"}],f:30},"309":{i:"309",n:"Navigation",z:0,b:[],a:[],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:21.06,b:[],a:[{y:0,p:1,i:"Video Track",z:21.06,o:"635",f:"a"}],f:30},"555":{i:"555",n:"CardHover",z:0.04,b:[],a:[{f:"c",y:0,z:0.04,i:"d",e:428,s:412,o:"630"},{f:"c",y:0,z:0.04,i:"b",e:-16,s:0,o:"630"},{f:"c",y:0,z:0.04,i:"cR",e:1,s:0.90000000000000002,o:"632"},{f:"c",y:0,z:0.04,i:"cQ",e:1,s:0.90000000000000002,o:"632"},{f:"c",y:0,z:0.04,i:"e",e:1,s:0,o:"631"},{y:0,i:"cY",s:"0",z:0,o:"630",f:"c"},{f:"c",y:0,z:0.04,i:"b",e:207,s:220,o:"626"},{f:"c",y:0,z:0.04,i:"e",e:1,s:0,o:"629"},{f:"c",y:0,z:0.04,i:"e",e:1,s:0,o:"628"},{f:"c",y:0,z:0.04,i:"b",e:17,s:38,o:"627"},{f:"c",y:0,z:0,i:"e",e:1,s:0,o:"630"},{y:0,i:"e",s:1,z:0,o:"630",f:"c"},{y:0.04,i:"d",s:428,z:0,o:"630",f:"c"},{y:0.04,i:"cR",s:1,z:0,o:"632",f:"c"},{y:0.04,i:"cQ",s:1,z:0,o:"632",f:"c"},{y:0.04,i:"b",s:-16,z:0,o:"630",f:"c"},{y:0.04,i:"b",s:207,z:0,o:"626",f:"c"},{y:0.04,i:"e",s:1,z:0,o:"631",f:"c"},{y:0.04,i:"b",s:17,z:0,o:"627",f:"c"},{y:0.04,i:"e",s:1,z:0,o:"629",f:"c"},{y:0.04,i:"e",s:1,z:0,o:"628",f:"c"}],f:30},"560":{i:"560",n:"Man Woman",z:0.07,b:[],a:[{f:"c",y:0.03,z:0.04,i:"e",e:0,s:1,o:"613"},{f:"c",y:0.03,z:0.04,i:"e",e:1,s:0,o:"614"},{y:0.07,i:"e",s:1,z:0,o:"614",f:"c"},{y:0.07,i:"e",s:0,z:0,o:"613",f:"c"}],f:30},"585":{i:"585",n:"News Card Hover",z:0.02,b:[],a:[{f:"c",y:0,z:0.02,i:"e",e:0.5,s:0.20000000000000001,o:"609"},{y:0.02,i:"e",s:0.5,z:0,o:"609",f:"c"}],f:30}},bZ:180,O:["635","633","638","637","639","640","641","610","611","614","612","634","636","613","642","623","632","630","628","631","625","624","627","622","603","626","629","604","616","615","620","618","617","619","621","607","609","608","605","606"],n:"Untitled Layout","_":0,v:{"634":{k:"div",x:"hidden",c:1518,d:729,z:10,r:"inline",a:-39,j:"absolute",b:115},"621":{c:305,d:258,I:"None",J:"None",K:"None",L:"None",M:0,N:0,bF:"617",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:5,P:0,D:"#D8DDE4",aC:{a:[{b:"602",p:3,z:true,symbolOid:"2"}]},a:0,aD:{a:[{b:"602",p:3,z:false,symbolOid:"2"}]},b:61},"629":{h:"546",p:"no-repeat",x:"visible",a:27,q:"100% 100%",b:375,j:"absolute",cY:"0",z:2,k:"div",dB:"img",d:12,bF:"625",c:164,e:0,r:"inline"},"640":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"637",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Concept A<br><br>",x:"visible",I:"None",a:611,y:"preserve",J:"None"},"616":{h:"576",p:"no-repeat",x:"visible",a:-30,q:"100% 100%",b:-5,j:"absolute",bF:"615",z:1,k:"div",dB:"img",d:634,c:950,r:"inline"},"635":{aR:"1",x:"visible",bE:"589",a:-87,b:-346,j:"absolute",bF:"634",c:1786,k:"video",z:5,d:1116,aO:"0",aQ:"1",aH:"1"},"603":{c:329,d:250,I:"None",J:"None",K:"None",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:17,P:0,D:"#D8DDE4",aC:{a:[{b:"555",p:3,z:true,symbolOid:"2"}]},a:58,aD:{a:[{b:"555",p:3,z:false,symbolOid:"2"}]},b:888},"622":{c:1440,d:4553,I:"None",J:"None",K:"None",g:"#0133A0",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,k:"div",C:"#D8DDE4",z:1,O:0,D:"#D8DDE4",a:0,b:838},"641":{b:7,z:7,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"637",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{j:"https://invis.io/QJSQ90H5A6P#/371120048_Jacobs-Inst-Home-Concept-B",p:5,k:true}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Concept B",x:"visible",I:"None",a:726,y:"preserve",J:"None"},"617":{k:"div",x:"hidden",c:307,d:321,z:22,a:400,j:"absolute",b:3524},"636":{h:"567",p:"no-repeat",x:"visible",a:37,q:"100% 100%",b:0,j:"absolute",bF:"634",z:2,k:"div",dB:"img",d:733,c:1440,r:"inline"},"604":{h:"552",p:"no-repeat",x:"visible",a:354,q:"100% 100%",b:1265,j:"absolute",i:"lockLogo",z:21,k:"div",dB:"img",d:938,c:728,r:"inline",e:0.050000000000000003},"623":{h:"532",p:"no-repeat",x:"visible",a:190,q:"100% 100%",b:344,j:"absolute",dB:"img",z:11,k:"div",c:430,d:205,r:"inline"},"642":{c:32,d:31,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:0}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:15,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:1362,b:267},"610":{h:"524",p:"no-repeat",x:"visible",a:-1,q:"100% 100%",b:40,j:"absolute",dB:"img",z:14,k:"div",c:1443,d:124,r:"inline"},"618":{h:"593",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"617",z:1,k:"div",dB:"img",d:329,c:307,r:"inline"},"637":{x:"visible",k:"div",c:1440,d:40,z:23,e:1,a:0,j:"absolute",b:0},"605":{k:"div",x:"hidden",c:329,d:460,z:4,a:59,j:"absolute",b:4315},"624":{h:"541",p:"no-repeat",x:"visible",a:57,q:"100% 100%",b:726,j:"absolute",dB:"img",z:13,k:"div",c:1321,d:414,r:"inline"},"611":{h:"564",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:2,k:"div",c:1442,d:5351,r:"inline",cQ:1,cR:1},"619":{h:"595",p:"no-repeat",x:"visible",a:13,q:"100% 100%",b:14,j:"absolute",bF:"617",z:4,k:"div",dB:"img",d:11,c:87,r:"inline"},"630":{c:329,d:412,I:"Solid",cY:"0",e:0,J:"Solid",K:"Solid",g:"#0133A0",L:"Solid",M:1,N:1,bF:"625",A:"#FFFFFF",x:"visible",j:"absolute",B:"#FFFFFF",k:"div",O:1,C:"#FFFFFF",z:1,P:1,D:"#FFFFFF",a:0,b:-32},"638":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"637",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"606":{h:"582",p:"no-repeat",x:"visible",a:32,q:"100% 100%",b:274,j:"absolute",dB:"img",z:3,k:"div",bF:"605",d:156,c:233,r:"inline",e:1},"625":{k:"div",x:"visible",c:331,d:414,z:16,a:58,j:"absolute",b:726},"612":{k:"div",x:"visible",c:609,d:776,z:12,a:618,j:"absolute",b:112},"631":{x:"hidden",k:"div",c:330,d:414,z:4,e:0,a:1,j:"absolute",bF:"625",b:0},"639":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"637",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"607":{c:346,d:530,I:"None",J:"None",K:"None",g:"#0133A0",L:"None",M:0,N:0,bF:"605",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:-18,b:-16},"626":{h:"542",p:"no-repeat",x:"visible",a:27,q:"100% 100%",b:220,j:"absolute",bF:"625",z:3,k:"div",dB:"img",d:152,c:271,r:"inline"},"613":{h:"530",p:"no-repeat",x:"visible",a:60,q:"100% 100%",b:33,j:"absolute",dB:"img",z:1,k:"div",bF:"612",d:715,c:549,r:"inline",e:1},"632":{h:"552",p:"no-repeat",x:"visible",a:-19,q:"100% 100%",b:-245,j:"absolute",dB:"img",z:1,k:"div",bF:"631",d:673,c:503,cQ:0.94999999999999996,e:0.036886867088607597,r:"inline",cR:0.94999999999999996},"608":{c:326,d:458,I:"None",J:"None",K:"None",L:"None",M:0,N:0,bF:"605",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:4,P:0,D:"#D8DDE4",aC:{a:[{b:"585",p:3,z:true,symbolOid:"2"}]},a:0,aD:{a:[{b:"585",p:3,z:false,symbolOid:"2"}]},b:0},"627":{h:"544",p:"no-repeat",x:"visible",a:24,q:"100% 100%",b:38,j:"absolute",bF:"625",z:7,k:"div",dB:"img",d:52,c:49,r:"inline"},"614":{h:"557",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",cY:"0",z:2,k:"div",dB:"img",d:776,bF:"612",c:600,e:0,r:"inline"},"633":{h:"535",p:"no-repeat",x:"visible",i:"menu",q:"100% 100%",b:-95,a:1,j:"absolute",z:24,k:"div",dB:"img",d:73,c:1440,r:"inline",aP:"pointer"},"609":{h:"579",p:"no-repeat",x:"visible",a:-48,q:"100% 100%",b:0,j:"absolute",dB:"img",z:2,k:"div",bF:"605",d:465,c:698,r:"inline",e:0.20000000000000001},"620":{h:"591",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",cY:"0",z:2,k:"div",dB:"img",d:329,bF:"617",c:307,e:0,r:"inline"},"628":{h:"550",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:-16,j:"absolute",dB:"img",z:8,k:"div",bF:"625",d:430,c:333,r:"inline",e:0},"615":{c:659,d:626,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:1,N:1,A:"#FFFFFF",x:"hidden",j:"absolute",B:"#FFFFFF",k:"div",O:1,C:"#FFFFFF",z:3,P:1,D:"#FFFFFF",a:62,b:2350}}}],{},g,{},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
