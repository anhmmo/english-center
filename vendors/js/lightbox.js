
(function(a){a.fn.visualLightbox=function(ah){var Y=null,z=["select","object","embed"],ab=null,e=[],b=null,aZ=null,av=0,p=50,af,an;if(!document.getElementsByTagName){return}ah=a.extend({animate:true,autoPlay:true,borderSize:39,containerID:document,enableSlideshow:true,googleAnalytics:false,descSliding:true,imageDataLocation:"south",shadowLocation:"",closeLocation:"",pauseLocation:"",initImage:"",loop:true,overlayDuration:0.2,overlayOpacity:0.7,prefix:"",classNames:"vlightbox",resizeSpeed:7,showGroupName:false,slideTime:4,strings:{closeLink:"",loadingMsg:"loading",nextLink:"",prevLink:"",startSlideshow:"",stopSlideshow:"",numDisplayPrefix:"",numDisplaySeparator:"/"},openByHover:false,enableRightClick:false,featBrowser:true,breathingSize:10,startZoom:false,floating:true},ah);if(ah.animate){var aW=Math.max(ah.overlayDuration,0);ah.resizeSpeed=Math.max(Math.min(ah.resizeSpeed,10),1);var aQ=(11-ah.resizeSpeed)*0.15}else{var aW=0;var aQ=0}var aY=ah.enableSlideshow;ah.overlayOpacity=Math.max(Math.min(ah.overlayOpacity,1),0);var az=ah.autoPlay;var au=a(ah.containerID);var m=ah.classNames;aO();var aK=au.length&&au.get(0)!=document?au.get(0):document.getElementsByTagName("body").item(0);if(aK.childNodes.length){a(aK.childNodes[0]).before(a("<div></div>"));aK=aK.childNodes[0]}function y(t,c,d){(a("#"+t).unbind())[c](d)}if(!document.getElementById(J("overlay"))){var ak=document.createElement("div");ak.setAttribute("id",J("overlay"));ak.style.display="none";aK.appendChild(ak);var aI=document.createElement("div");aI.setAttribute("id",J("lightbox"));aI.style.display="none";aK.appendChild(aI);var aG=document.createElement("div");aG.setAttribute("id",J("imageDataContainer"));aG.className=J("clearfix");var w=document.createElement("table");w.setAttribute("id",J("outerImageContainer"));w.cellSpacing=0;aI.appendChild(w);var aM=w.insertRow(-1);var aq=aM.insertCell(-1);aq.className="tl";var aw=aM.insertCell(-1);aw.className="tc";var ap=aM.insertCell(-1);ap.className="tr";var k=w.insertRow(-1);var aF=k.insertCell(-1);aF.className="ml";var N=k.insertCell(-1);N.setAttribute("id",J("lightboxFrameBody"));var aB=k.insertCell(-1);aB.className="mr";var am=w.insertRow(-1);var al=am.insertCell(-1);al.className="bl";var ao=am.insertCell(-1);ao.className="bc";var ae=am.insertCell(-1);ae.className="br";if(ah.imageDataLocation=="north"){N.appendChild(aG)}var W=document.createElement("div");W.setAttribute("id",J("imageData"));aG.appendChild(W);var u=document.createElement("div");u.setAttribute("id",J("imageDetails"));W.appendChild(u);var B=document.createElement("div");B.setAttribute("id",J("caption"));u.appendChild(B);B.style.display="none";var s=document.createElement("span");s.setAttribute("id",J("numberDisplay"));u.appendChild(s);var aa=document.createElement("span");aa.setAttribute("id",J("detailsNav"));u.appendChild(aa);var r=document.createElement("div");r.setAttribute("id",J("imageContainerMain"));N.appendChild(r);var ad=document.createElement("div");ad.setAttribute("id",J("imageContainer"));r.appendChild(ad);var aC=document.createElement("img");aC.setAttribute("id",J("lightboxImage"));ad.appendChild(aC);if(!ah.enableRightClick){var at=document.createElement("div");at.setAttribute("id",J("hoverNav"));at.style.background="white";at.style.opacity=0;at.style.filter="alpha(opacity=0)";ad.appendChild(at)}var aH=document.createElement("a");aH.setAttribute("id",J("prevLinkImg"));aH.setAttribute("href","javascript:void(0);");r.appendChild(aH);var o=document.createElement("a");o.setAttribute("id",J("nextLinkImg"));o.setAttribute("href","javascript:void(0);");r.appendChild(o);var S=document.createElement("div");S.setAttribute("id",J("loading"));ad.appendChild(S);var I=document.createElement("a");I.setAttribute("id",J("loadingLink"));I.setAttribute("href","javascript:void(0);");I.innerHTML=ah.strings.loadingMsg;S.appendChild(I);if(ah.imageDataLocation!="north"){N.appendChild(aG)}var aS=document.createElement("div");aS.setAttribute("id",J("shadow"));(ah.shadowLocation?document.getElementById(J(ah.shadowLocation)):ao).appendChild(aS);var l=document.createElement("a");l.setAttribute("id",J("prevLinkDetails"));l.setAttribute("href","javascript:void(0);");l.innerHTML=ah.strings.prevLink;aa.appendChild(l);var aP=document.createElement("a");aP.setAttribute("id",J("slideShowControl"));aP.setAttribute("href","javascript:void(0);");document.getElementById(J(ah.pauseLocation||"detailsNav")).appendChild(aP);var V=document.createElement("a");V.setAttribute("id",J("closeLink"));V.setAttribute("href","javascript:void(0);");V.innerHTML=ah.strings.closeLink;if(ah.closeLocation=="nav"){aa.appendChild(V)}else{var D=document.createElement("div");D.setAttribute("id",J("close"));if(ah.closeLocation=="top"){ap.appendChild(D)}else{W.appendChild(D)}D.appendChild(V)}var aL=document.createElement("a");aL.setAttribute("id",J("nextLinkDetails"));aL.setAttribute("href","javascript:void(0);");aL.innerHTML=ah.strings.nextLink;aa.appendChild(aL)}var F=new ag(function(c){q(c)},400,function(){P()},300);function ay(){y(J("overlay"),"click",P);if(ah.openByHover){aX("lightbox").unbind().hover(function(){F.start()},function(){F.stop()})}else{y(J("lightbox"),"click",P)}y(J("prevLinkDetails"),"click",Z);y(J("slideShowControl"),"click",v);y(J("closeLink"),"click",P);y(J("nextLinkDetails"),"click",aE);if(!ah.enableRightClick){y(J("hoverNav"),"mousemove",A);y(J("hoverNav"),"mouseout",T)}y(J("prevLinkImg"),"click",Z);y(J("nextLinkImg"),"click",aE);y(J("loadingLink"),"click",P)}if(ah.initImage!=""){q("#"+ah.initImage)}function aT(c){if(c.tagName.toLowerCase()!="a"){c=a("A:first",c)}return a(c).attr("href")}function M(c){if(/^a$/i.test(c.tagName)){return a(c).attr("title")||c.title}return a(">div:first",c).html()}function aO(){a("."+m.replace(/\,/g,",."),au).each(function(){if(aT(this)){if(ah.openByHover){a(this).hover(function(){F.start(this)},function(){F.stop(this)})}else{a(this).click(function(c){c.preventDefault();q(this);return false})}}})}var K="";if(K){var R=a("<div></div>");R.css({position:"absolute",right:"0px",bottom:"0px",padding:"0px 0px","background-color":"#EEE","z-index":-99});a(ad).append(R);var Q=a(document.createElement("A"));Q.css({color:"#555",font:"11px Arial,Verdana,sans-serif",padding:"3px 6px",width:"auto",height:"auto",margin:"0 0 0 0",outline:"none"});Q.attr({href:"http://"+K.toLowerCase()});Q.html(K);Q.bind("contextmenu",function(c){return false});R.append(Q)}var q=this.start=function(c){n();c=a(c);av=c.get(0);aX("overlay").css({height:O()[1]+"px",top:0,left:i().x+"px"});if(ah.descSliding){aX("imageDataContainer").hide()}aX("lightboxImage").hide().attr({src:""});if(ah.startZoom){aX("imageContainer").css({width:c.width()+"px",height:c.height()+"px"});if(!document.all){aX("outerImageContainer").css({opacity:0.1})}aX("lightbox").css({left:c.offset().left-ah.borderSize+"px",top:c.offset().top-ah.borderSize+"px",width:c.width()+ah.borderSize*2+"px",height:"auto"})}else{aX("overlay").css({opacity:0}).show().fadeTo(aW*1000,ah.overlayOpacity);aX("lightbox").css({left:0,width:"100%"})}ay();aX("lightbox").show();e=[];ab=null;aZ=0;a("."+(c.attr("className")||c.get(0).className),au).each(function(){if(aT(this)){e.push({link:aT(this),title:M(this)});if(this==c.get(0)){aZ=e.length-1}}});if(e.length>1){ab=c.attr("className")}if(ah.featBrowser){a(window).resize(ai)}if(ah.floating){a(window).scroll(ai)}a(window).resize(G);a(window).scroll(G);g(aZ)};function g(c){Y=c;aR();U();H();if(!ah.startZoom){aX("lightboxImage").hide()}aX("prevLinkImg").hide();aX("nextLinkImg").hide();if(ah.descSliding){aX("imageDataContainer").hide()}af=new Image();af.onload=function(){e[Y].link=af.src;e[Y].width=af.width;e[Y].height=af.height;aD(false)};if(ah.startZoom&&!aX("lightboxImage").attr("src")){e[Y].width=320;e[Y].height=240;aD(false,true)}af.src=e[Y].link;if(ah.googleAnalytics){urchinTracker(e[Y].link)}}function aD(t,be){var a3=e[Y].width;var bc=e[Y].height;var bf=f();var a7=a3/bc;if(ah.featBrowser){var a0=bf.winWidth/bf.winHeight;var a5=(a3+ah.borderSize*2+ah.breathingSize*2)/(bc+ah.borderSize*2+ah.breathingSize*2+p);if(a5>a0){var bb=bf.winWidth-ah.borderSize*2-ah.breathingSize*2;var a6=Math.round(bb/a7)}else{var a6=bf.winHeight-ah.borderSize*2-ah.breathingSize*2-p;var bb=Math.round(a6*a7)}if(a3>bb||bc>a6){a3=bb;bc=a6}}var a1,c,a4,a2;a4=(a3+ah.borderSize*2);a2=(bc+p+ah.borderSize*2);var a9=i();if(ah.openByHover){c=Math.min(Math.max(a(av).offset().left+a(av).width()/2-a4/2,a9.x),a9.x+bf.winWidth-a4);a1=Math.min(Math.max(a(av).offset().top+a(av).height()/2-a2/2,a9.y),a9.y+bf.winHeight-a2)}else{a1=a9.y+(bf.winHeight-a2)/2;c=a9.x}a2=Math.max(a2,parseInt(aX("lightbox").height()));if(a2>bf.winHeight){a1=Math.max(Math.min(aX("lightbox").offset().top,a9.y),a9.y+bf.winHeight-a2)}var bd=ah.openByHover?a4+"px":(/mobile.+safari/i.test(navigator.userAgent)?bf.winWidth+"px":"100%");var bh=aX("imageContainer");if(t==true){bh.css({height:bc+"px",width:a3+"px"});if(ah.floating){h(aX("lightbox"),c,a1,bd)}else{aX("lightbox").css({top:a1+"px",left:c+"px"})}}else{var a8=aX("lightboxImage");bh.stop(true,false);a8.stop(true,false);var d;if(ah.startZoom&&a8.attr("src")){d=a8;d.attr({id:J("lightboxImage2")})}else{a8.remove()}if(!be){a8=a(af);a8.hide();a8.attr({id:J("lightboxImage")});bh.append(a8)}var bg=a7/(bh.width()/bh.height());if(!be){if(ah.startZoom){if(d){aX("lightboxImage2").stop(true,true)}var ba=d?120:100;if(d){d.css({width:(1>bg?"auto":(d.width()/d.parent().width())*100+"%"),height:(1>bg?(d.height()/d.parent().height())*100+"%":"auto"),left:0,top:0})}a8.css({opacity:0,display:"block",position:"absolute",width:(1>bg)?ba+"%":"auto",height:(1>bg)?"auto":ba+"%",left:(100-ba*(1>bg?1:bg))/2+"%",top:(100-ba*(1>bg?1/(bg):1))/2+"%"})}if(ah.startZoom){aV()}}if(!ah.featBrowser){window.scrollTo(i().x,a1)}L(c,a1,a3,bc,bd,bg,be)}if(aX("imageDataContainer").css("position")!="absolute"){aX("imageDataContainer").css({width:a3+"px"})}if(ah.enableRightClick){aX("lightboxImage").mousemove(A);aX("lightboxImage").mouseout(T)}}function L(a6,a1,a4,a5,a0,a7,a2){var a3=aX("imageContainer");var d=aX("lightboxImage");var t=aX("lightbox");if(!a2){var c=aX("lightboxImage2")}if(ah.startZoom){d.fadeTo(aQ*1000,1);if(!document.all){aX("outerImageContainer").fadeTo(aQ*1000,1)}}h(t,a6,a1,a0);if(ah.startZoom&&!a2){c.animate(a.extend({opacity:0},a7<1?{height:"120%",top:"-10%",left:(100-120/a7)/2+"%"}:{width:"120%",left:"-10%",top:(100-a7*120)/2+"%"}),{queue:false,duration:aQ*1000,complete:function(){a(this).remove()}});d.animate(a.extend({left:0,top:0},a7<1?{width:"100%"}:{height:"100%"}),{queue:false,duration:aQ*1000})}a3.animate({width:a4+"px",height:a5+"px"},{queue:false,duration:aQ*1000,complete:!a2?function(){aU()}:null})}function h(a0,a1,d,c){a0.stop(true,false);var t={top:d,left:a1};if(c!=a0.get(0).style.width){t.width=c}a0.animate(t,{queue:false,duration:aQ*1000})}function H(){clearTimeout(an);var c=aX("loading");c.show();c.css({visibility:"hidden"});an=setTimeout(function(){aX("loading").css({visibility:"visible"})},300)}function aV(){clearTimeout(an);aX("loading").hide()}function aU(){aV();if(ah.startZoom){aX("overlay:hidden").css({opacity:0}).show().fadeTo(aW*1000,ah.overlayOpacity);aN()}else{aX("lightboxImage").css({opacity:0}).show().fadeTo(500,1,function(){aN()})}E()}function x(){aX("caption").html((e[Y].title||"").replace(/\n/g,"<br>"));if(e[Y].title){aX("caption").show()}else{aX("caption").hide()}if(e.length>1){var c=ah.strings.numDisplayPrefix+" "+parseInt(Y+1)+" "+ah.strings.numDisplaySeparator+" "+e.length;if(ah.showGroupName&&ab){c+=" "+ah.strings.numDisplaySeparator+" "+ab}aX("numberDisplay").text(c);aX("slideShowControl").css({display:aY?"":"none"})}}function aN(){x();if(ah.descSliding){aX("imageDataContainer").animate({height:"show",opacity:"show"},650,null,function(){C()})}else{C()}}function C(){var c=1/e.length;p=p*(1-c)+aX("imageDataContainer").height()*c;if(e.length>1){aX("prevLinkImg").show();aX("nextLinkImg").show();if(aY){if(az){ac()}else{aA()}}}else{aX("prevLinkImg").hide();aX("nextLinkImg").hide()}j()}function ac(){if(aX("lightbox:hidden").length){return}U();az=true;b=setTimeout(function(){aE()},ah.slideTime*1000);aX("slideShowControl").text(ah.strings.stopSlideshow);aX("slideShowControl").addClass("started")}function aA(){az=false;U();aX("slideShowControl").text(ah.strings.startSlideshow);aX("slideShowControl").removeClass("started")}function v(){if(az){aA()}else{ac()}}function U(){if(b){b=clearTimeout(b)}}function aE(){if(e.length>1){U();if(!ah.loop&&((Y==e.length-1&&aZ==0)||(Y+1==aZ))){P();return}if(Y==e.length-1){ax(0)}else{ax(Y+1)}}}function ax(c){if(ah.descSliding){aX("imageDataContainer").animate({height:"hide",opacity:"hide"},650,null,function(){g(c)})}else{g(c)}}function Z(){if(e.length>1){if(Y==0){ax(e.length-1)}else{ax(Y-1)}}}function aJ(){if(e.length>1){ax(0)}}function ar(){if(e.length>1){ax(e.length-1)}}function j(){document.onkeydown=aj}function aR(){document.onkeydown=""}function aj(c){if(c==null){keycode=event.keyCode}else{keycode=c.which}key=String.fromCharCode(keycode).toLowerCase();if(key=="x"||key=="o"||key=="c"||keycode==27){P()}else{if(key=="p"||key=="%"){Z()}else{if(key=="n"||key=="'"){aE()}else{if(key=="f"){aJ()}else{if(key=="l"){ar()}else{if(key=="s"){if(e.length>0&&ah.enableSlideshow){v()}}}}}}}}function E(){var d=e.length-1==Y?0:Y+1;(new Image()).src=e[d].link;var c=Y==0?e.length-1:Y-1;(new Image()).src=e[c].link}function P(c){if(c){var d=a(c.target).attr("id");if(J("closeLink")!=d&&J("lightbox")!=d&&J("overlay")!=d){return}}aX("imageContainer").stop(true,false);aX("lightboxImage").stop(true,false);if(af){af.onload=null}aR();U();aX("lightbox").hide();X();if(ah.overlayOpacity){aX("overlay").fadeOut(aW*1000)}else{aX("overlay").hide()}a(window).unbind("resize",ai);a(window).unbind("scroll",ai);a(window).unbind("resize",G);a(window).unbind("scroll",G)}function A(c){if(c.pageX-aX("imageContainer").offset().left<aX("imageContainer").width()/2){aX("prevLinkImg").addClass("hover");aX("nextLinkImg").removeClass("hover")}else{aX("prevLinkImg").removeClass("hover");aX("nextLinkImg").addClass("hover")}}function T(){aX("prevLinkImg").removeClass("hover");aX("nextLinkImg").removeClass("hover")}function ai(){aD(true)}function G(){aX("overlay").css({left:i().x+"px",top:0,width:"100%",height:O()[1]+"px"})}function X(){var a0;var d=z;for(var t=0;t<d.length;t++){a0=document.getElementsByTagName(d[t]);for(var c=0;c<a0.length;c++){a(a0[c]).css({visibility:"visible"})}}}function n(){var c=z;for(var d=0;d<c.length;d++){a(c[d]).css({visibility:"hidden"})}}function i(){var c,d;if(self.pageYOffset||self.pageXOffset){c=self.pageXOffset;d=self.pageYOffset}else{if(document.documentElement&&(document.documentElement.scrollTop||document.documentElement.scrollLeft)){c=document.documentElement.scrollLeft;d=document.documentElement.scrollTop}else{if(document.body){c=document.body.scrollLeft;d=document.body.scrollTop}}}return{x:c,y:d}}function f(){var d,c;if(self.innerHeight){d=self.innerWidth;c=self.innerHeight}else{if(document.documentElement&&document.documentElement.clientHeight){d=document.documentElement.clientWidth;c=document.documentElement.clientHeight}else{if(document.body){d=document.body.clientWidth;c=document.body.clientHeight}}}return{winWidth:d,winHeight:c}}function O(){var c=document.body,a0=document.documentElement,d=0,t=0;if(a0){d=Math.max(d,a0.scrollWidth,a0.offsetWidth);t=Math.max(t,a0.scrollHeight,a0.offsetHeight)}if(c){d=Math.max(d,c.scrollWidth,c.offsetWidth);t=Math.max(t,c.scrollHeight,c.offsetHeight);if(window.innerWidth){d=Math.max(d,window.innerWidth);t=Math.max(t,window.innerHeight)}}return[d,t]}function J(c){return ah.prefix+c}function aX(c){return a("#"+J(c))}function ag(a3,c,a1,t){var a2,d,a0;this.start=function(a4){if(a0){clearTimeout(a0)}a0=0;if(!a4||(a4==a2)){return}if(a2){if(d){clearTimeout(d)}else{a1(a2)}d=0}a2=a4;d=setTimeout(function(){d=0;a3(a4)},c)};this.stop=function(a4){if(!a2||a4&&(a2!=a4)){return}if(d){clearTimeout(d)}d=0;if(!a0){a0=setTimeout(function(){a0=0;a1(a4||a2);a2=0},t)}}}return this}})(jQuery);