//	HYPE.documents["index"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="index.hyperesources",c="index",e="index_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/index_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_590","HYPE_dtl_590",!0==(null!=a&&10>a||false==!0)?"HYPE-590.full.min.js":"HYPE-590.thin.min.js"),false==!0&&(a=a||l("HYPE_w_590","HYPE_wdtl_590","HYPE-590.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"untitledFunction",source:"function(hypeDocument, element, event) {\t\n\t\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menu');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menuDelta = 100;\n\t\tvar menuFadeOut = 9000;\n\n\t\tif (scroll > menuDelta){\n\t\t\tmenu.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menuDelta){\n\t\t\tmenu.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menuFadeOut){\n\t\t\tmenu.classList.remove('sticky')\n\t\t}\n\t};\t\n\t\n\n\n}",identifier:"11"},{name:"untitledFunction2",source:"function(hypeDocument, element, event) {\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menub');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menubDelta = 100;\n\t\tvar menubFadeOut = 14000;\n\n\t\tif (scroll > menubDelta){\n\t\t\tmenub.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menubDelta){\n\t\t\tmenub.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menubFadeOut){\n\t\t\tmenub.classList.remove('sticky')\n\t\t}\n\t};\t\n}",identifier:"186"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_590(c,e,{"10":{p:1,n:"Navigation_2x.jpg",g:"413",o:true,t:"@2x"},"2":{p:1,n:"Button1_2x.jpg",g:"316",o:true,t:"@2x"},"15":{p:1,n:"Homepage%20-%20Desktop.jpg",g:"386",o:true,t:"@1x"},"-2":{n:"blank.gif"},"3":{p:1,n:"Homepage%20Sticky%20Nav.jpg",g:"388",o:true,t:"@1x"},"11":{p:1,n:"PDP%20Desktop.jpg",g:"387",o:true,t:"@1x"},"4":{p:1,n:"Homepage%20Sticky%20Nav_2x.jpg",g:"388",o:true,t:"@2x"},"16":{p:1,n:"Homepage%20-%20Desktop_2x.jpg",g:"386",o:true,t:"@2x"},"5":{p:1,n:"PDP%20Sticky%20Navigation.jpg",g:"389",o:true,t:"@1x"},"12":{p:1,n:"PDP%20Desktop_2x.jpg",g:"387",o:true,t:"@2x"},"6":{p:1,n:"PDP%20Sticky%20Navigation_2x.jpg",g:"389",o:true,t:"@2x"},"13":{p:1,n:"add%20to%20cart%20button.png",g:"404",o:true,t:"@1x"},"7":{p:1,n:"Cart%20Slide%20Out.jpg",g:"395",o:true,t:"@1x"},"-1":{n:"PIE.htc"},"0":{p:1,n:"Pasted-1.png",g:"179",t:"@1x"},"8":{p:1,n:"Cart%20Slide%20Out_2x.jpg",g:"395",o:true,t:"@2x"},"14":{p:1,n:"add%20to%20cart%20button_2x.png",g:"404",o:true,t:"@2x"},"1":{p:1,n:"Button1.jpg",g:"316",o:true,t:"@1x"},"9":{p:1,n:"Navigation.jpg",g:"413",o:true,t:"@1x"}},h,[],d,[{n:"Concept B Homepage",o:"1",X:[0]},{n:"Concept B - PDP",o:"245",X:[1]}],[{A:{a:[{p:4,h:"11"}]},o:"3",p:"600px",cA:false,Y:1440,Z:5740,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"310":{i:"310",n:"Cart Slide Out",z:0.21,b:[],a:[{f:"c",y:0,z:0.21,i:"e",e:1,s:0,o:"426"},{f:"c",y:0,z:0.21,i:"e",e:1,s:0,o:"425"},{y:0.21,i:"e",s:1,z:0,o:"426",f:"c"},{y:0.21,i:"e",s:1,z:0,o:"425",f:"c"}],f:30},"319":{i:"319",n:"Button 1",z:0.08,b:[],a:[{f:"c",y:0,z:0.08,i:"e",e:1,s:0,o:"423"},{y:0.08,i:"e",s:1,z:0,o:"423",f:"c"}],f:30},"309":{i:"309",n:"Navigation",z:1,b:[],a:[{f:"c",y:0,z:1,i:"e",e:1,s:0,o:"421"},{y:1,i:"e",s:1,z:0,o:"421",f:"c"}],f:30},"406":{i:"406",n:"Add To cart button",z:0.15,b:[],a:[{f:"c",y:0,z:0.15,i:"e",e:1,s:0,o:"418"},{y:0.15,i:"e",s:1,z:0,o:"418",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30},"412":{i:"412",n:"Add to cart button 2",z:0,b:[],a:[],f:30},"392":{i:"392",n:"Navigation Dropdown",z:0.06,b:[],a:[{f:"c",y:0,z:0.06,i:"e",e:1,s:0,o:"421"},{y:0.06,i:"e",s:1,z:0,o:"421",f:"c"}],f:30}},bZ:180,O:["415","430","429","425","431","432","433","420","422","424","421","416","426","419","417","434","428","418","427","423"],n:"Untitled Layout","_":0,v:{"433":{b:7,z:7,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"429",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"245"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Concept B-2",x:"visible",I:"None",a:726,y:"preserve",J:"None"},"425":{c:991,d:971,I:"None",e:0,J:"None",K:"None",g:"rgba(0, 0, 0, 0.100)",L:"None",M:0,N:0,bF:"424",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:2,P:0,D:"#D8DDE4",a:-920,b:-25},"417":{c:37,d:31,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:0}]},j:"absolute",O:0,k:"div",dB:"button",z:56,C:"#D8DDE4",D:"#D8DDE4",aC:{a:[{b:"310",p:3,z:true,symbolOid:"2"}]},B:"#D8DDE4",P:0,a:1361,aD:{a:[{b:"310",p:3,z:false,symbolOid:"2"}]},b:102},"421":{h:"413",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:19,j:"absolute",dB:"img",z:2,k:"div",bF:"420",d:483,c:1440,r:"inline",e:0},"434":{c:47,d:31,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:0}]},j:"absolute",O:0,k:"div",dB:"button",z:58,C:"#D8DDE4",D:"#D8DDE4",aC:{a:[{b:"392",p:3,z:true,symbolOid:"2"}]},B:"#D8DDE4",P:0,a:1196,aD:{a:[{b:"392",p:3,z:false,symbolOid:"2"}]},b:107},"426":{h:"395",p:"no-repeat",x:"visible",a:71,q:"100% 100%",b:11,j:"absolute",dB:"img",z:1,k:"div",bF:"424",d:935,c:450,r:"inline",e:0},"418":{h:"404",p:"no-repeat",x:"visible",a:173,q:"100% 100%",b:802,j:"absolute",dB:"img",z:63,k:"div",c:160,d:160,r:"inline",e:0},"430":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"429",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"422":{c:1036,d:842,I:"None",e:0,J:"None",K:"None",g:"rgba(0, 0, 0, 0.101)",L:"None",M:0,w:"",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:3,bF:"420",D:"#D8DDE4",P:0,a:403,b:0},"427":{c:558,d:55,I:"None",J:"None",K:"None",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:57,P:0,D:"#D8DDE4",aC:{a:[{b:"319",p:3,z:true,symbolOid:"2"}]},a:119,aD:{a:[{b:"319",p:3,z:false,symbolOid:"2"}]},b:1445},"419":{c:35,d:38,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{b:"310",p:3,z:true,symbolOid:"2"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:67,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:1403,b:40},"431":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"429",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"423":{h:"316",p:"no-repeat",x:"visible",a:119,q:"100% 100%",b:1451,j:"absolute",dB:"img",z:55,k:"div",c:555,d:44,r:"inline",e:0},"415":{h:"388",p:"no-repeat",x:"visible",i:"menu",q:"100% 100%",b:-81,a:1,j:"absolute",z:66,k:"div",dB:"img",d:50,c:1440,r:"inline",aP:"pointer"},"428":{c:199,d:261,I:"None",J:"None",K:"None",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:64,P:0,D:"#D8DDE4",aC:{a:[{b:"406",p:3,z:true,symbolOid:"2"}]},a:153,aD:{a:[{b:"406",p:3,z:false,symbolOid:"2"}]},b:766},"432":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"429",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Concept B",x:"visible",I:"None",a:611,y:"preserve",J:"None"},"424":{k:"div",x:"visible",c:521,d:1029,z:51,a:920,j:"absolute",b:25},"416":{h:"386",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:1,k:"div",c:1440,d:5702,r:"inline",cQ:1,cR:1},"429":{x:"visible",k:"div",c:1440,d:40,z:59,e:1,a:0,j:"absolute",b:0},"420":{k:"div",x:"visible",c:404,d:844,z:54,a:1,j:"absolute",b:20}}},{A:{a:[{p:4,h:"186"}]},o:"282",p:"600px",cA:false,Y:1440,Z:4850,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"276":{i:"276",n:"Content Nav",z:0,b:[],a:[],f:30},"293":{i:"293",n:"StudioHover",z:0,b:[],a:[],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30},"397":{i:"397",n:"Cart Slide Out",z:0.19,b:[],a:[{f:"c",y:0,z:0.19,i:"e",e:1,s:0,o:"446"},{y:0.19,i:"e",s:1,z:0,o:"446",f:"c"}],f:30}},bZ:180,O:["441","447","439","435","440","437","438","449","446","442","444","436","443","448","445"],n:"Untitled Layout","_":1,v:{"448":{h:"179",p:"no-repeat",x:"visible",a:80,q:"100% 100%",b:331,j:"absolute",dB:"img",z:48,k:"div",c:402,d:253,r:"none"},"437":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"435",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Concept B",x:"visible",I:"None",a:611,y:"preserve",J:"None"},"443":{c:31,d:26,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"442",A:"#D8DDE4",x:"visible",aA:{a:[{b:"397",p:3,z:false,symbolOid:"246"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:441,b:70},"446":{h:"395",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"442",d:1029,c:521,r:"inline",e:0},"435":{x:"visible",k:"div",c:1440,d:40,z:60,e:1,a:0,j:"absolute",b:0},"441":{h:"389",p:"no-repeat",x:"visible",i:"menub",q:"100% 100%",b:-81,a:1,j:"absolute",z:59,k:"div",dB:"img",d:80,c:1440,r:"inline"},"449":{w:"",h:"387",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:1,k:"div",c:1440,d:4823,r:"inline"},"438":{b:7,z:9,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"435",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"245"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Concept B-2",x:"visible",I:"None",a:726,y:"preserve",J:"None"},"444":{c:34,d:47,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"442",A:"#D8DDE4",x:"visible",aA:{a:[{b:"397",p:3,z:true,symbolOid:"246"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:4,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:472,b:0},"447":{c:308,d:124,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,w:"",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},j:"absolute",O:0,k:"div",dB:"button",z:41,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:0,a:-7,b:0},"436":{c:177,d:78,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"435",A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:7,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:51,b:97},"442":{k:"div",x:"visible",c:521,d:1029,z:49,a:920,j:"absolute",b:40},"439":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"435",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"440":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"435",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"445":{c:293,d:49,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"442",A:"#D8DDE4",x:"visible",aA:{a:[{b:"397",p:3,z:false,symbolOid:"246"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:75,b:402}}}],{},g,{},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
