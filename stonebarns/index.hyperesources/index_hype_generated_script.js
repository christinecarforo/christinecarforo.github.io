//	HYPE.documents["index"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="index.hyperesources",c="index",e="index_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/index_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_584","HYPE_dtl_584",!0==(null!=a&&10>a||false==!0)?"HYPE-584.full.min.js":"HYPE-584.thin.min.js"),false==!0&&(a=a||l("HYPE_w_584","HYPE_wdtl_584","HYPE-584.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"untitledFunction",source:"function(hypeDocument, element, event) {\t\n\t\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menu');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menuDelta = 100;\n\t\tvar menuFadeOut = 9000;\n\n\t\tif (scroll > menuDelta){\n\t\t\tmenu.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menuDelta){\n\t\t\tmenu.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menuFadeOut){\n\t\t\tmenu.classList.remove('sticky')\n\t\t}\n\t};\t\n\t\n\n\n}",identifier:"11"},{name:"untitledFunction2",source:"function(hypeDocument, element, event) {\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menub');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menubDelta = 100;\n\t\tvar menubFadeOut = 9000;\n\n\t\tif (scroll > menubDelta){\n\t\t\tmenub.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menubDelta){\n\t\t\tmenub.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menubFadeOut){\n\t\t\tmenub.classList.remove('sticky')\n\t\t}\n\t};\t\n}",identifier:"186"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_584(c,e,{"3":{p:1,n:"READ%20THE%20REPORT_TExt-1.png",g:"172",o:true,t:"@1x"},"12":{p:1,n:"TopNav.png",g:"9",o:true,t:"@1x"},"21":{p:1,n:"BecomeAMember-1.png",g:"213",o:true,t:"@1x"},"4":{p:1,n:"READ%20THE%20REPORT_TExt-1_2x.png",g:"172",o:true,t:"@2x"},"30":{p:1,n:"BecomeMemberText.png",g:"224",o:true,t:"@1x"},"13":{p:1,n:"TopNav_2x.png",g:"9",o:true,t:"@2x"},"5":{p:1,n:"Pasted-1.png",g:"179",t:"@1x"},"22":{p:1,n:"BecomeAMember-1_2x.png",g:"213",o:true,t:"@2x"},"6":{p:1,n:"StickyNav.jpg",g:"166",o:true,t:"@1x"},"31":{p:1,n:"BecomeMemberText_2x.png",g:"224",o:true,t:"@2x"},"14":{p:1,n:"CONCEPT%20B%20NAVIGATION.png",g:"197",o:true,t:"@1x"},"7":{p:1,n:"BecomeAMember2x.png",g:"154",t:"@2x"},"23":{p:1,n:"BecomeAMemberIMG.png",g:"217",t:"@1x"},"32":{p:1,n:"HomepageConceptA.jpg",g:"182",o:true,t:"@1x"},"15":{p:1,n:"CONCEPT%20B%20NAVIGATION_2x.png",g:"197",o:true,t:"@2x"},"8":{p:1,n:"Education.png",g:"178",t:"@1x"},"24":{p:1,n:"EducationImg.png",g:"220",t:"@1x"},"9":{p:1,n:"Education2x.png",g:"152",t:"@2x"},"16":{p:1,n:"StickyNavActive.jpg",g:"198",o:true,t:"@1x"},"25":{p:1,n:"WhatWeDoImg.png",g:"221",t:"@1x"},"17":{p:1,n:"HomepageConceptB.jpg",g:"170",o:true,t:"@1x"},"26":{p:1,n:"WhatWeDoText%20copy.png",g:"222",o:true,t:"@1x"},"18":{p:1,n:"TEST2%20copy.png",g:"208",t:"@1x"},"27":{p:1,n:"WhatWeDoText%20copy_2x.png",g:"222",o:true,t:"@2x"},"19":{p:1,n:"Nav%20Mockups%20_%20Content%20Nav.jpg",g:"34",o:true,t:"@1x"},"28":{p:1,n:"EducationText%20copy.png",g:"223",o:true,t:"@1x"},"-1":{n:"PIE.htc"},"29":{p:1,n:"EducationText%20copy_2x.png",g:"223",o:true,t:"@2x"},"-2":{n:"blank.gif"},"10":{p:1,n:"WhatWeDoRetina2x.png",g:"150",t:"@2x"},"0":{n:"StoneBarnsVideo_1.mp4",g:"117",t:"video/mp4"},"1":{p:1,n:"LEARNMORE_CTA-1.png",g:"171",o:true,t:"@1x"},"11":{p:1,n:"WhatWeDo.png",g:"177",t:"@1x"},"2":{p:1,n:"LEARNMORE_CTA-1_2x.png",g:"171",o:true,t:"@2x"},"20":{p:1,n:"Nav%20Mockups%20Content%20Nav.png",g:"7",t:"@1x"}},h,[],d,[{n:"Concept A",o:"1",X:[0]},{n:"Concept B",o:"25",X:[1]}],[{A:{a:[{p:4,h:"11"}]},o:"3",p:"600px",cA:false,Y:1440,Z:3827,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"109":{i:"109",n:"Education",z:0.05,b:[],a:[{f:"c",y:0,z:0.05,i:"e",e:0.65000000000000002,s:0.55000000000000004,o:"261"},{y:0.05,i:"e",s:0.65000000000000002,z:0,o:"261",f:"c"}],f:30},"24":{i:"24",n:"Learn More Button",z:0.1,b:[],a:[{y:0,i:"b",s:1203,z:0,o:"229",f:"c"},{y:0,i:"a",s:256,z:0,o:"229",f:"c"},{f:"c",y:0,z:0.1,i:"b",e:18,s:21,o:"232"},{f:"c",y:0,z:0.1,i:"a",e:5,s:0,o:"231"},{f:"c",y:0,z:0.1,i:"b",e:-2,s:4,o:"231"},{y:0,i:"a",s:0,z:0,o:"233",f:"c"},{y:0,i:"b",s:40,z:0,o:"233",f:"c"},{f:"c",y:0,z:0.1,i:"a",e:42,s:40,o:"232"},{y:0.1,i:"b",s:18,z:0,o:"232",f:"c"},{y:0.1,i:"a",s:5,z:0,o:"231",f:"c"},{y:0.1,i:"b",s:-2,z:0,o:"231",f:"c"},{y:0.1,i:"a",s:42,z:0,o:"232",f:"c"}],f:30},"108":{i:"108",n:"BecomeAMember",z:0.1,b:[],a:[{f:"c",y:0,z:0.1,i:"b",e:19,s:21,o:"237"},{f:"c",y:0,z:0.1,i:"a",e:42,s:40,o:"237"},{f:"c",y:0,z:0.05,i:"e",e:0.59999999999999998,s:0.55000000000000004,o:"261"},{f:"c",y:0,z:0.05,i:"e",e:0.65000000000000002,s:0.55000000000000004,o:"257"},{f:"c",y:0,z:0.1,i:"a",e:5,s:0,o:"236"},{f:"c",y:0,z:0.1,i:"b",e:-2,s:4,o:"236"},{y:0.05,i:"e",s:0.59999999999999998,z:0,o:"261",f:"c"},{y:0.05,i:"e",s:0.65000000000000002,z:0,o:"257",f:"c"},{y:0.1,i:"b",s:19,z:0,o:"237",f:"c"},{y:0.1,i:"a",s:42,z:0,o:"237",f:"c"},{y:0.1,i:"b",s:-2,z:0,o:"236",f:"c"},{y:0.1,i:"a",s:5,z:0,o:"236",f:"c"}],f:30},"14":{i:"14",n:"Content Nav",z:0.15,b:[],a:[{f:"c",y:0,z:0.15,i:"b",e:0,s:-241,o:"249"},{f:"c",y:0,z:0.15,i:"e",e:1,s:0,o:"249"},{f:"c",y:0,z:0,i:"cY",e:"0",s:"1",o:"249"},{f:"c",y:0,z:0.05,i:"e",e:1,s:0,o:"271"},{f:"c",y:0,z:0,i:"cY",e:"0",s:"1",o:"271"},{y:0,i:"cY",s:"0",z:0,o:"271",f:"c"},{y:0,i:"cY",s:"0",z:0,o:"249",f:"c"},{y:0.05,i:"e",s:1,z:0,o:"271",f:"c"},{y:0.15,i:"b",s:0,z:0,o:"249",f:"c"},{y:0.15,i:"e",s:1,z:0,o:"249",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:335.1,b:[],a:[{y:0,p:1,i:"Video Track",z:335.1,o:"239",f:"a"}],f:30},"116":{i:"116",n:"ReadTheReportButton",z:0.1,b:[],a:[{f:"c",y:0,z:0.1,i:"a",e:42,s:39,o:"237"},{f:"c",y:0,z:0.1,i:"b",e:19,s:22,o:"237"},{f:"c",y:0,z:0.1,i:"a",e:5,s:0,o:"236"},{f:"c",y:0,z:0.1,i:"b",e:-2,s:4,o:"236"},{y:0.1,i:"b",s:19,z:0,o:"237",f:"c"},{y:0.1,i:"a",s:42,z:0,o:"237",f:"c"},{y:0.1,i:"b",s:-2,z:0,o:"236",f:"c"},{y:0.1,i:"a",s:5,z:0,o:"236",f:"c"}],f:30},"44":{i:"44",n:"What We Do Hover",z:0.05,b:[],a:[{f:"c",y:0,z:0.05,i:"e",e:0.65000000000000002,s:0.55000000000000004,o:"266"},{y:0.05,i:"e",s:0.65000000000000002,z:0,o:"266",f:"c"}],f:30}},bZ:180,O:["250","242","241","243","244","245","239","240","238","254","247","246","233","248","271","269","249","253","251","230","229","231","232","252","235","234","236","237","268","265","264","263","260","259","258","256","255","266","261","257","267","262","270"],n:"Untitled Layout","_":0,v:{"231":{c:161,d:48,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:2,N:2,bF:"229",A:"#4592AB",x:"visible",j:"absolute",B:"#4592AB",k:"div",O:2,C:"#4592AB",z:2,P:2,D:"#4592AB",a:0,b:4},"239":{aR:"1",x:"visible",bE:"117",a:-86,b:0,j:"absolute",bF:"238",c:1584,k:"video",z:2,d:891,aO:"0",aQ:"1",aH:"1"},"250":{h:"9",p:"no-repeat",x:"visible",i:"menu",q:"100% 100%",b:-81,a:1,j:"absolute",z:48,k:"div",dB:"img",d:81,c:1440,r:"inline"},"258":{c:414,d:532,I:"None",r:"inline",J:"None",K:"None",L:"None",M:0,N:0,bF:"255",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:5,P:0,D:"#D8DDE4",aC:{a:[{b:"108",p:3,z:true,symbolOid:"2"}]},a:0,aD:{a:[{b:"108",p:3,z:false,symbolOid:"2"}]},b:0},"245":{b:7,z:7,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"241",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"25"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Concept B",x:"visible",I:"None",a:725,y:"preserve",J:"None"},"264":{k:"div",x:"hidden",c:414,d:532,z:22,r:"inline",a:80,j:"absolute",b:2323},"232":{h:"171",p:"no-repeat",x:"visible",a:40,q:"100% 100%",b:22,j:"absolute",bF:"229",z:3,k:"div",dB:"img",d:10,c:87,r:"inline"},"251":{c:226,d:78,I:"None",J:"None",K:"None",g:"#FFFFFF",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,k:"div",C:"#D8DDE4",z:23,O:0,D:"#D8DDE4",a:226,b:1195},"259":{k:"div",x:"hidden",c:413,d:532,z:20,r:"inline",a:513,j:"absolute",b:2323},"270":{h:"224",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:372,j:"absolute",bF:"255",z:3,k:"div",dB:"img",d:161,c:414,r:"inline"},"246":{k:"div",x:"visible",c:1440,d:389,z:42,a:0,j:"absolute",b:40},"265":{h:"221",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"264",z:3,k:"div",dB:"img",d:534,c:414,r:"inline"},"233":{w:"",h:"182",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:1,k:"div",c:1440,d:3793,r:"inline"},"252":{c:226,d:78,I:"None",J:"None",K:"None",g:"#FFFFFF",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,k:"div",C:"#D8DDE4",z:24,O:0,D:"#D8DDE4",a:965,b:1768},"271":{c:70,d:-1,I:"Solid",cY:"1",e:2,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,bF:"246",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:1,C:"#D8DDE4",z:4,P:1,D:"#D8DDE4",a:868,b:51},"247":{Q:2,h:"9",x:"visible",R:"rgba(0, 0, 0, 0.101)",q:"100% 100%",b:0,S:1,a:0,z:3,T:1,dB:"img",d:81,j:"absolute",k:"div",p:"no-repeat",bF:"246",c:1440,r:"inline"},"266":{c:413,d:530,I:"None",e:0.5,J:"None",K:"None",L:"None",M:0,N:0,bF:"264",A:"#D8DDE4",x:"visible",j:"absolute",O:0,k:"div",B:"#D8DDE4",C:"#D8DDE4",z:6,l:0,D:"#D8DDE4",m:"#000000",P:0,n:"rgba(0, 0, 0, 0.000)",a:0,b:3},"234":{x:"visible",k:"div",aD:{a:[{b:"116",p:3,z:false,symbolOid:"2"}]},c:202,d:56,z:26,r:"inline",a:977,aC:{a:[{b:"116",p:3,z:true,symbolOid:"2"}]},j:"absolute",b:1774},"253":{h:"179",p:"no-repeat",x:"visible",a:80,q:"100% 100%",b:331,j:"absolute",dB:"img",z:40,k:"div",c:402,d:253,r:"inline"},"229":{x:"visible",k:"div",aD:{a:[{b:"24",p:3,z:false,symbolOid:"2"}]},c:167,d:56,z:25,r:"inline",a:256,aC:{a:[{b:"24",p:3,z:true,symbolOid:"2"}]},j:"absolute",b:1203},"240":{c:1457,d:757,I:"None",e:0.29999999999999999,J:"None",K:"None",g:"#000000",L:"None",M:0,w:"",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:4,bF:"238",D:"#D8DDE4",P:0,a:0,b:0},"248":{c:96,d:25,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,bF:"246",A:"#D8DDE4",x:"visible",j:"absolute",k:"div",O:1,B:"#D8DDE4",C:"#D8DDE4",z:6,P:1,D:"#D8DDE4",aC:{a:[{b:"14",p:3,z:true,symbolOid:"2"}]},a:852,aD:{a:[{b:"14",p:3,z:false,symbolOid:"2"}]},b:26},"267":{w:"",h:"222",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:372,j:"absolute",dB:"img",z:7,k:"div",bF:"264",d:161,c:414,r:"inline"},"235":{c:193,d:48,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:2,N:2,bF:"234",A:"#4592AB",x:"visible",j:"absolute",B:"#4592AB",k:"div",O:2,C:"#4592AB",z:1,P:2,D:"#4592AB",a:5,b:-2},"254":{c:1457,d:767,I:"None",e:1,J:"None",K:"None",g:"#FFFFFF",L:"None",M:0,w:"",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,bF:"238",D:"#D8DDE4",P:0,a:10,b:0},"241":{x:"visible",k:"div",c:1440,d:40,z:46,e:1,a:0,j:"absolute",b:0},"249":{h:"7",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:33,j:"absolute",cY:"1",z:1,k:"div",dB:"img",d:275,bF:"269",c:1029,e:1,r:"inline"},"260":{h:"220",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"259",z:1,k:"div",dB:"img",d:534,c:413,r:"inline"},"268":{c:414,d:532,I:"None",J:"None",K:"None",L:"None",M:0,w:"",N:0,A:"#D8DDE4",x:"visible",j:"absolute",k:"div",B:"#D8DDE4",O:0,C:"#D8DDE4",z:8,bF:"264",D:"#D8DDE4",aC:{a:[{b:"44",p:3,z:true,symbolOid:"2"}]},P:0,a:-1,aD:{a:[{b:"44",p:3,z:false,symbolOid:"2"}]},b:0},"236":{c:193,d:48,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:2,N:2,bF:"234",A:"#4592AB",x:"visible",j:"absolute",B:"#4592AB",k:"div",O:2,C:"#4592AB",z:2,P:2,D:"#4592AB",a:0,b:4},"255":{k:"div",x:"hidden",c:414,d:532,z:19,r:"inline",a:947,j:"absolute",b:2323},"242":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"241",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"261":{c:413,d:530,I:"None",e:0.59999999999999998,J:"None",K:"None",L:"None",M:0,N:0,bF:"259",A:"#D8DDE4",x:"visible",j:"absolute",O:0,k:"div",B:"#D8DDE4",C:"#D8DDE4",z:2,l:0,D:"#D8DDE4",m:"#000000",P:0,n:"rgba(0, 0, 0, 0.000)",a:0,b:3},"269":{k:"div",x:"hidden",c:1029,d:278,z:1,a:275,j:"absolute",bF:"246",b:81},"237":{h:"172",p:"no-repeat",x:"visible",a:42,q:"100% 100%",b:23,j:"absolute",bF:"234",z:4,k:"div",dB:"img",d:10,c:124,r:"inline"},"256":{h:"217",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"255",z:1,k:"div",dB:"img",d:534,c:414,r:"inline"},"243":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"241",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"262":{h:"223",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:372,j:"absolute",bF:"259",z:3,k:"div",dB:"img",d:161,c:414,r:"inline"},"230":{c:161,d:48,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:2,N:2,bF:"229",A:"#4592AB",x:"visible",j:"absolute",B:"#4592AB",k:"div",O:2,C:"#4592AB",z:1,P:2,D:"#4592AB",a:5,b:-2},"238":{k:"div",x:"hidden",c:1474,d:757,z:34,r:"inline",a:-17,j:"absolute",b:40},"257":{c:413,d:530,I:"None",e:0.59999999999999998,J:"None",K:"None",L:"None",M:0,N:0,bF:"255",A:"#D8DDE4",x:"visible",j:"absolute",O:0,k:"div",B:"#D8DDE4",C:"#D8DDE4",z:2,l:0,D:"#D8DDE4",m:"#000000",P:0,n:"rgba(0, 0, 0, 0.000)",a:0,b:4},"244":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"241",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Concept A",x:"visible",I:"None",a:610,y:"preserve",J:"None"},"263":{c:414,d:532,I:"None",J:"None",K:"None",L:"None",M:0,N:0,bF:"259",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:4,P:0,D:"#D8DDE4",aC:{a:[{b:"109",p:3,z:true,symbolOid:"2"}]},a:0,aD:{a:[{b:"109",p:3,z:false,symbolOid:"2"}]},b:0}}},{A:{a:[{p:4,h:"186"}]},o:"27",p:"600px",cA:false,Y:1440,Z:3612,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"37":{i:"37",n:"Navigation",z:0.14,b:[],a:[{f:"c",y:0,z:0,i:"cY",e:"0",s:"1",o:"273"},{f:"c",y:0,z:0.05,i:"e",e:1,s:0,o:"275"},{f:"c",y:0,z:0.14,i:"b",e:153,s:-147,o:"274"},{f:"c",y:0,z:0.14,i:"e",e:1,s:0,o:"274"},{y:0,i:"cY",s:"0",z:0,o:"273",f:"c"},{y:0.05,i:"e",s:1,z:0,o:"275",f:"c"},{y:0.14,i:"b",s:153,z:0,o:"274",f:"c"},{y:0.14,i:"e",s:1,z:0,o:"274",f:"c"}],f:30},"156":{i:"156",n:"WhatWeDo",z:0.05,b:[],a:[{f:"c",y:0,z:0.05,i:"e",e:0.34999999999999998,s:0.20000000000000001,o:"297"},{y:0.05,i:"e",s:0.34999999999999998,z:0,o:"297",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:335.1,b:[],a:[{y:0,p:1,i:"Video Track",z:335.1,o:"285",f:"a"}],f:30},"157":{i:"157",n:"Education",z:0.05,b:[],a:[{f:"c",y:0,z:0.05,i:"e",e:0.34999999999999998,s:0.20000000000000001,o:"293"},{y:0.05,i:"e",s:0.34999999999999998,z:0,o:"293",f:"c"}],f:30},"158":{i:"158",n:"BecomeAMember",z:0.05,b:[],a:[{f:"c",y:0,z:0.05,i:"e",e:0.34999999999999998,s:0.20000000000000001,o:"289"},{y:0.05,i:"e",s:0.34999999999999998,z:0,o:"289",f:"c"}],f:30}},bZ:180,O:["299","283","279","301","280","281","282","285","284","275","273","286","276","278","300","277","274","272","302","297","296","295","293","292","291","289","288","287","298","294","290"],n:"Untitled Layout","_":1,v:{"275":{x:"visible",k:"div",c:1455,r:"inline",d:148,z:3,e:1,a:0,j:"absolute",bF:"273",b:6},"302":{c:1337,d:330,I:"None",J:"None",K:"None",g:"#F6F3F1",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,k:"div",C:"#D8DDE4",z:4,O:0,D:"#D8DDE4",a:37,b:2149},"296":{h:"177",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:7,j:"absolute",bF:"295",z:1,k:"div",dB:"img",d:299,c:414,r:"inline"},"288":{h:"213",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:-6,j:"absolute",bF:"287",z:1,k:"div",dB:"img",d:300,c:427,r:"inline"},"292":{w:"",h:"178",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:-1,j:"absolute",dB:"img",z:1,k:"div",bF:"291",d:300,c:413,cQ:1,r:"inline",cR:1},"284":{k:"div",x:"hidden",c:1474,d:627,z:13,r:"inline",a:-17,j:"absolute",b:30},"276":{h:"166",p:"no-repeat",x:"visible",a:6,q:"100% 100%",b:8,j:"absolute",dB:"img",z:3,k:"div",bF:"275",d:139,c:1440,r:"inline",e:1},"297":{c:414,d:293,I:"None",r:"inline",e:0.20000000000000001,J:"None",K:"None",g:"#000000",L:"None",M:0,w:"",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:5,bF:"295",D:"#D8DDE4",P:0,a:0,b:7},"289":{c:419,d:306,I:"None",r:"inline",e:0.20000000000000001,J:"None",K:"None",g:"#000000",L:"None",M:0,N:0,bF:"287",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:2,P:0,D:"#D8DDE4",a:0,b:-6},"280":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"279",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"272":{w:"",h:"197",p:"no-repeat",x:"visible",a:474,q:"100% 100%",b:314,j:"absolute",dB:"img",z:27,k:"div",c:493,d:127,r:"inline"},"293":{c:412,d:295,I:"None",r:"inline",e:0.20000000000000001,J:"None",K:"None",g:"#000000",L:"None",M:0,w:"",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:2,bF:"291",D:"#D8DDE4",P:0,a:0,b:-1},"285":{aR:"1",x:"visible",bE:"117",a:-126,b:-9,j:"absolute",bF:"284",c:1601,k:"video",z:3,d:910,aO:"0",aQ:"1",aH:"1"},"277":{c:92,d:45,I:"None",J:"None",K:"None",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:33,P:0,D:"#D8DDE4",aC:{a:[{b:"37",p:3,z:true,symbolOid:"26"}]},a:842,aD:{a:[{b:"37",p:3,z:false,symbolOid:"26"}]},b:90},"298":{h:"150",p:"no-repeat",x:"visible",a:129,q:"100% 100%",b:144,j:"absolute",bF:"295",z:6,k:"div",dB:"img",d:17,c:154,r:"inline"},"281":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.54673655063291138,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"279",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Concept A",x:"visible",I:"None",a:610,y:"preserve",J:"None"},"273":{x:"visible",cY:"1",k:"div",c:1462,d:128,z:32,r:"inline",a:-6,j:"absolute",b:25},"300":{h:"208",p:"no-repeat",x:"visible",a:37,q:"100% 100%",b:49,j:"absolute",dB:"img",z:30,k:"div",c:1343,d:115,r:"inline"},"294":{h:"152",p:"no-repeat",x:"visible",a:139,q:"100% 100%",b:138,j:"absolute",bF:"291",z:4,k:"div",dB:"img",d:17,c:136,r:"inline"},"286":{c:1457,d:757,I:"None",e:0.29999999999999999,J:"None",K:"None",g:"#000000",L:"None",M:0,w:"",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:4,bF:"284",D:"#D8DDE4",P:0,a:0,b:10},"278":{h:"170",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:39,j:"absolute",dB:"img",z:1,k:"div",c:1440,d:3435,r:"none"},"299":{h:"198",p:"no-repeat",x:"visible",i:"menub",q:"100% 100%",b:-77,a:0,j:"absolute",z:38,k:"div",dB:"img",d:77,c:1440,r:"inline"},"290":{w:"",h:"154",p:"no-repeat",x:"visible",a:92,q:"100% 100%",b:138,j:"absolute",dB:"img",z:3,k:"div",bF:"287",d:17,c:230,r:"inline"},"282":{b:7,z:7,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"279",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Concept B",x:"visible",I:"None",a:725,y:"preserve",J:"None"},"274":{h:"34",p:"no-repeat",x:"visible",a:346,q:"100% 100%",b:128,j:"absolute",dB:"img",z:1,k:"div",bF:"273",d:275,c:1028,r:"inline",e:1},"301":{h:"170",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:3,k:"div",c:1440,d:3613,r:"inline"},"295":{aD:{a:[{b:"156",p:3,z:false,symbolOid:"26"}]},x:"hidden",a:80,b:2165,j:"absolute",r:"inline",c:414,k:"div",z:11,d:300,e:1,aC:{a:[{b:"156",p:3,z:true,symbolOid:"26"}]}},"287":{x:"hidden",k:"div",aD:{a:[{b:"158",p:3,z:false,symbolOid:"26"}]},c:414,d:294,z:8,a:946,aC:{a:[{b:"158",p:3,z:true,symbolOid:"26"}]},j:"absolute",b:2171},"279":{x:"visible",k:"div",c:1440,d:40,z:35,e:1,a:0,j:"absolute",b:0},"291":{x:"hidden",k:"div",aD:{a:[{b:"157",p:3,z:false,symbolOid:"26"}]},c:413,d:294,z:10,a:516,aC:{a:[{b:"157",p:3,z:true,symbolOid:"26"}]},j:"absolute",b:2171},"283":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"279",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0}}}],{},g,{},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
