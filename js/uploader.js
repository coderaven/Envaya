/* plupload 1.5.1.1*/
(function(){var f=0,k=[],m={},i={},a={"<":"lt",">":"gt","&":"amp",'"':"quot","'":"#39"},l=/[<>&\"\']/g,b,c=window.setTimeout,d={},e;function h(){this.returnValue=false}function j(){this.cancelBubble=true}(function(n){var o=n.split(/,/),p,r,q;for(p=0;p<o.length;p+=2){q=o[p+1].split(/ /);for(r=0;r<q.length;r++){i[q[r]]=o[p]}}})("application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb,application/vnd.ms-powerpoint,ppt pps pot,application/zip,zip,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats,docx pptx xlsx,audio/mpeg,mpga mpega mp2 mp3,audio/x-wav,wav,audio/mp4,m4a,image/bmp,bmp,image/gif,gif,image/jpeg,jpeg jpg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/html,htm html xhtml,text/rtf,rtf,video/mpeg,mpeg mpg mpe,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/vnd.rn-realvideo,rv,text/csv,csv,text/plain,asc txt text diff log,application/octet-stream,exe");var g={VERSION:"1.5.1.1",STOPPED:1,STARTED:2,QUEUED:1,UPLOADING:2,FAILED:4,DONE:5,GENERIC_ERROR:-100,HTTP_ERROR:-200,IO_ERROR:-300,SECURITY_ERROR:-400,INIT_ERROR:-500,FILE_SIZE_ERROR:-600,FILE_EXTENSION_ERROR:-601,IMAGE_FORMAT_ERROR:-700,IMAGE_MEMORY_ERROR:-701,IMAGE_DIMENSIONS_ERROR:-702,mimeTypes:i,ua:(function(){var r=navigator,q=r.userAgent,s=r.vendor,o,n,p;o=/WebKit/.test(q);p=o&&s.indexOf("Apple")!==-1;n=window.opera&&window.opera.buildNumber;return{windows:navigator.platform.indexOf("Win")!==-1,ie:!o&&!n&&(/MSIE/gi).test(q)&&(/Explorer/gi).test(r.appName),webkit:o,gecko:!o&&/Gecko/.test(q),safari:p,opera:!!n}}()),extend:function(n){g.each(arguments,function(o,p){if(p>0){g.each(o,function(r,q){n[q]=r})}});return n},cleanName:function(n){var o,p;p=[/[\300-\306]/g,"A",/[\340-\346]/g,"a",/\307/g,"C",/\347/g,"c",/[\310-\313]/g,"E",/[\350-\353]/g,"e",/[\314-\317]/g,"I",/[\354-\357]/g,"i",/\321/g,"N",/\361/g,"n",/[\322-\330]/g,"O",/[\362-\370]/g,"o",/[\331-\334]/g,"U",/[\371-\374]/g,"u"];for(o=0;o<p.length;o+=2){n=n.replace(p[o],p[o+1])}n=n.replace(/\s+/g,"_");n=n.replace(/[^a-z0-9_\-\.]+/gi,"");return n},addRuntime:function(n,o){o.name=n;k[n]=o;k.push(o);return o},guid:function(){var n=new Date().getTime().toString(32),o;for(o=0;o<5;o++){n+=Math.floor(Math.random()*65535).toString(32)}return(g.guidPrefix||"p")+n+(f++).toString(32)},buildUrl:function(o,n){var p="";g.each(n,function(r,q){p+=(p?"&":"")+encodeURIComponent(q)+"="+encodeURIComponent(r)});if(p){o+=(o.indexOf("?")>0?"&":"?")+p}return o},each:function(q,r){var p,o,n;if(q){p=q.length;if(p===b){for(o in q){if(q.hasOwnProperty(o)){if(r(q[o],o)===false){return}}}}else{for(n=0;n<p;n++){if(r(q[n],n)===false){return}}}}},formatSize:function(n){if(n===b||/\D/.test(n)){return g.translate("N/A")}if(n>1073741824){return Math.round(n/1073741824,1)+" GB"}if(n>1048576){return Math.round(n/1048576,1)+" MB"}if(n>1024){return Math.round(n/1024,1)+" KB"}return n+" b"},getPos:function(o,s){var t=0,r=0,v,u=document,p,q;o=o;s=s||u.body;function n(B){var z,A,w=0,C=0;if(B){A=B.getBoundingClientRect();z=u.compatMode==="CSS1Compat"?u.documentElement:u.body;w=A.left+z.scrollLeft;C=A.top+z.scrollTop}return{x:w,y:C}}if(o&&o.getBoundingClientRect&&(navigator.userAgent.indexOf("MSIE")>0&&u.documentMode!==8)){p=n(o);q=n(s);return{x:p.x-q.x,y:p.y-q.y}}v=o;while(v&&v!=s&&v.nodeType){t+=v.offsetLeft||0;r+=v.offsetTop||0;v=v.offsetParent}v=o.parentNode;while(v&&v!=s&&v.nodeType){t-=v.scrollLeft||0;r-=v.scrollTop||0;v=v.parentNode}return{x:t,y:r}},getSize:function(n){return{w:n.offsetWidth||n.clientWidth,h:n.offsetHeight||n.clientHeight}},parseSize:function(n){var o;if(typeof(n)=="string"){n=/^([0-9]+)([mgk]?)$/.exec(n.toLowerCase().replace(/[^0-9mkg]/g,""));o=n[2];n=+n[1];if(o=="g"){n*=1073741824}if(o=="m"){n*=1048576}if(o=="k"){n*=1024}}return n},xmlEncode:function(n){return n?(""+n).replace(l,function(o){return a[o]?"&"+a[o]+";":o}):n},toArray:function(p){var o,n=[];for(o=0;o<p.length;o++){n[o]=p[o]}return n},addI18n:function(n){return g.extend(m,n)},translate:function(n){return m[n]||n},isEmptyObj:function(n){if(n===b){return true}for(var o in n){return false}return true},hasClass:function(p,o){var n;if(p.className==""){return false}n=new RegExp("(^|\\s+)"+o+"(\\s+|$)");return n.test(p.className)},addClass:function(o,n){if(!g.hasClass(o,n)){o.className=o.className==""?n:o.className.replace(/\s+$/,"")+" "+n}},removeClass:function(p,o){var n=new RegExp("(^|\\s+)"+o+"(\\s+|$)");p.className=p.className.replace(n,function(r,q,s){return q===" "&&s===" "?" ":""})},getStyle:function(o,n){if(o.currentStyle){return o.currentStyle[n]}else{if(window.getComputedStyle){return window.getComputedStyle(o,null)[n]}}},addEvent:function(s,n,t){var r,q,p,o;o=arguments[3];n=n.toLowerCase();if(e===b){e="Plupload_"+g.guid()}if(s.addEventListener){r=t;s.addEventListener(n,r,false)}else{if(s.attachEvent){r=function(){var u=window.event;if(!u.target){u.target=u.srcElement}u.preventDefault=h;u.stopPropagation=j;t(u)};s.attachEvent("on"+n,r)}}if(s[e]===b){s[e]=g.guid()}if(!d.hasOwnProperty(s[e])){d[s[e]]={}}q=d[s[e]];if(!q.hasOwnProperty(n)){q[n]=[]}q[n].push({func:r,orig:t,key:o})},removeEvent:function(s,n){var q,t,p;if(typeof(arguments[2])=="function"){t=arguments[2]}else{p=arguments[2]}n=n.toLowerCase();if(s[e]&&d[s[e]]&&d[s[e]][n]){q=d[s[e]][n]}else{return}for(var o=q.length-1;o>=0;o--){if(q[o].key===p||q[o].orig===t){if(s.detachEvent){s.detachEvent("on"+n,q[o].func)}else{if(s.removeEventListener){s.removeEventListener(n,q[o].func,false)}}q[o].orig=null;q[o].func=null;q.splice(o,1);if(t!==b){break}}}if(!q.length){delete d[s[e]][n]}if(g.isEmptyObj(d[s[e]])){delete d[s[e]];try{delete s[e]}catch(r){s[e]=b}}},removeAllEvents:function(o){var n=arguments[1];if(o[e]===b||!o[e]){return}g.each(d[o[e]],function(q,p){g.removeEvent(o,p,n)})}};g.Uploader=function(q){var o={},t,s=[],p;t=new g.QueueProgress();q=g.extend({chunk_size:0,multipart:true,multi_selection:true,file_data_name:"file",filters:[]},q);function r(){var v,w=0,u;if(this.state==g.STARTED){for(u=0;u<s.length;u++){if(!v&&s[u].status==g.QUEUED){v=s[u];v.status=g.UPLOADING;if(this.trigger("BeforeUpload",v)){this.trigger("UploadFile",v)}}else{w++}}if(w==s.length){this.stop();this.trigger("UploadComplete",s)}}}function n(){var v,u;t.reset();for(v=0;v<s.length;v++){u=s[v];if(u.size!==b){t.size+=u.size;t.loaded+=u.loaded}else{t.size=b}if(u.status==g.DONE){t.uploaded++}else{if(u.status==g.FAILED){t.failed++}else{t.queued++}}}if(t.size===b){t.percent=s.length>0?Math.ceil(t.uploaded/s.length*100):0}else{t.bytesPerSec=Math.ceil(t.loaded/((+new Date()-p||1)/1000));t.percent=t.size>0?Math.ceil(t.loaded/t.size*100):0}}g.extend(this,{state:g.STOPPED,runtime:"",features:{},files:s,settings:q,total:t,id:g.guid(),init:function(){var z=this,A,w,v,y=0,x;if(typeof(q.preinit)=="function"){q.preinit(z)}else{g.each(q.preinit,function(C,B){z.bind(B,C)})}q.page_url=q.page_url||document.location.pathname.replace(/\/[^\/]+$/g,"/");if(!/^(\w+:\/\/|\/)/.test(q.url)){q.url=q.page_url+q.url}q.chunk_size=g.parseSize(q.chunk_size);q.max_file_size=g.parseSize(q.max_file_size);z.bind("FilesAdded",function(B,E){var D,C,G=0,H,F=q.filters;if(F&&F.length){H=[];g.each(F,function(I){g.each(I.extensions.split(/,/),function(J){if(/^\s*\*\s*$/.test(J)){H.push("\\.*")}else{H.push("\\."+J.replace(new RegExp("["+("/^$.*+?|()[]{}\\".replace(/./g,"\\$&"))+"]","g"),"\\$&"))}})});H=new RegExp(H.join("|")+"$","i")}for(D=0;D<E.length;D++){C=E[D];C.loaded=0;C.percent=0;C.status=g.QUEUED;if(H&&!H.test(C.name)){B.trigger("Error",{code:g.FILE_EXTENSION_ERROR,message:g.translate("File extension error."),file:C});continue}if(C.size!==b&&C.size>q.max_file_size){B.trigger("Error",{code:g.FILE_SIZE_ERROR,message:g.translate("File size error."),file:C});continue}s.push(C);G++}if(G){c(function(){z.trigger("QueueChanged");z.refresh()},1)}else{return false}});if(q.unique_names){z.bind("UploadFile",function(B,C){var E=C.name.match(/\.([^.]+)$/),D="tmp";if(E){D=E[1]}C.target_name=C.id+"."+D})}z.bind("UploadProgress",function(B,C){C.percent=C.size>0?Math.ceil(C.loaded/C.size*100):100;n()});z.bind("StateChanged",function(B){if(B.state==g.STARTED){p=(+new Date())}else{if(B.state==g.STOPPED){for(A=B.files.length-1;A>=0;A--){if(B.files[A].status==g.UPLOADING){B.files[A].status=g.QUEUED;n()}}}}});z.bind("QueueChanged",n);z.bind("Error",function(B,C){if(C.file){C.file.status=g.FAILED;n();if(B.state==g.STARTED){c(function(){r.call(z)},1)}}});z.bind("FileUploaded",function(B,C){C.status=g.DONE;C.loaded=C.size;B.trigger("UploadProgress",C);c(function(){r.call(z)},1)});if(q.runtimes){w=[];x=q.runtimes.split(/\s?,\s?/);for(A=0;A<x.length;A++){if(k[x[A]]){w.push(k[x[A]])}}}else{w=k}function u(){var E=w[y++],D,B,C;if(E){D=E.getFeatures();B=z.settings.required_features;if(B){B=B.split(",");for(C=0;C<B.length;C++){if(!D[B[C]]){u();return}}}E.init(z,function(F){if(F&&F.success){z.features=D;z.runtime=E.name;z.trigger("Init",{runtime:E.name});z.trigger("PostInit");z.refresh()}else{u()}})}else{z.trigger("Error",{code:g.INIT_ERROR,message:g.translate("Init error.")})}}u();if(typeof(q.init)=="function"){q.init(z)}else{g.each(q.init,function(C,B){z.bind(B,C)})}},refresh:function(){this.trigger("Refresh")},start:function(){if(this.state!=g.STARTED){this.state=g.STARTED;this.trigger("StateChanged");r.call(this)}},stop:function(){if(this.state!=g.STOPPED){this.state=g.STOPPED;this.trigger("StateChanged")}},getFile:function(v){var u;for(u=s.length-1;u>=0;u--){if(s[u].id===v){return s[u]}}},removeFile:function(v){var u;for(u=s.length-1;u>=0;u--){if(s[u].id===v.id){return this.splice(u,1)[0]}}},splice:function(w,u){var v;v=s.splice(w===b?0:w,u===b?s.length:u);this.trigger("FilesRemoved",v);this.trigger("QueueChanged");return v},trigger:function(v){var x=o[v.toLowerCase()],w,u;if(x){u=Array.prototype.slice.call(arguments);u[0]=this;for(w=0;w<x.length;w++){if(x[w].func.apply(x[w].scope,u)===false){return false}}}return true},hasEventListener:function(u){return !!o[u.toLowerCase()]},bind:function(u,w,v){var x;u=u.toLowerCase();x=o[u]||[];x.push({func:w,scope:v||this});o[u]=x},unbind:function(u){u=u.toLowerCase();var x=o[u],v,w=arguments[1];if(x){if(w!==b){for(v=x.length-1;v>=0;v--){if(x[v].func===w){x.splice(v,1);break}}}else{x=[]}if(!x.length){delete o[u]}}},unbindAll:function(){var u=this;g.each(o,function(w,v){u.unbind(v)})},destroy:function(){this.trigger("Destroy");this.unbindAll()}})};g.File=function(q,o,p){var n=this;n.id=q;n.name=o;n.size=p;n.loaded=0;n.percent=0;n.status=0};g.Runtime=function(){this.getFeatures=function(){};this.init=function(n,o){}};g.QueueProgress=function(){var n=this;n.size=0;n.loaded=0;n.uploaded=0;n.failed=0;n.queued=0;n.percent=0;n.bytesPerSec=0;n.reset=function(){n.size=n.loaded=n.uploaded=n.failed=n.queued=n.percent=n.bytesPerSec=0}};g.runtimes={};window.plupload=g})();
/* html5 */
(function(h,k,j,e){var c={},g;function m(o,p){var n;if("FileReader" in h){n=new FileReader();n.readAsDataURL(o);n.onload=function(){p(n.result)}}else{return p(o.getAsDataURL())}}function l(o,p){var n;if("FileReader" in h){n=new FileReader();n.readAsBinaryString(o);n.onload=function(){p(n.result)}}else{return p(o.getAsBinary())}}function d(r,p,n,v){var q,o,u,s,t=this;m(c[r.id],function(w){q=k.createElement("canvas");q.style.display="none";k.body.appendChild(q);o=q.getContext("2d");u=new Image();u.onerror=u.onabort=function(){v({success:false})};u.onload=function(){var B,x,z,y,A;if(!p.width){p.width=u.width}if(!p.height){p.height=u.height}s=Math.min(p.width/u.width,p.height/u.height);if(s<1||(s===1&&n==="image/jpeg")){B=Math.round(u.width*s);x=Math.round(u.height*s);q.width=B;q.height=x;o.drawImage(u,0,0,B,x);if(n==="image/jpeg"){y=new f(atob(w.substring(w.indexOf("base64,")+7)));if(y.headers&&y.headers.length){A=new a();if(A.init(y.get("exif")[0])){A.setExif("PixelXDimension",B);A.setExif("PixelYDimension",x);y.set("exif",A.getBinary());if(t.hasEventListener("ExifData")){t.trigger("ExifData",r,A.EXIF())}if(t.hasEventListener("GpsData")){t.trigger("GpsData",r,A.GPS())}}}if(p.quality){try{w=q.toDataURL(n,p.quality/100)}catch(C){w=q.toDataURL(n)}}}else{w=q.toDataURL(n)}w=w.substring(w.indexOf("base64,")+7);w=atob(w);if(y&&y.headers&&y.headers.length){w=y.restore(w);y.purge()}q.parentNode.removeChild(q);v({success:true,data:w})}else{v({success:false})}};u.src=w})}j.runtimes.Html5=j.addRuntime("html5",{getFeatures:function(){var s,o,r,q,p,n;o=r=p=n=false;if(h.XMLHttpRequest){s=new XMLHttpRequest();r=!!s.upload;o=!!(s.sendAsBinary||s.upload)}if(o){q=!!(s.sendAsBinary||(h.Uint8Array&&h.ArrayBuffer));p=!!(File&&(File.prototype.getAsDataURL||h.FileReader)&&q);n=!!(File&&(File.prototype.mozSlice||File.prototype.webkitSlice||File.prototype.slice))}g=j.ua.safari&&j.ua.windows;return{html5:o,dragdrop:(function(){var t=k.createElement("div");return("draggable" in t)||("ondragstart" in t&&"ondrop" in t)}()),jpgresize:p,pngresize:p,multipart:p||!!h.FileReader||!!h.FormData,canSendBinary:q,cantSendBlobInFormData:!!(j.ua.gecko&&h.FormData&&h.FileReader&&!FileReader.prototype.readAsArrayBuffer),progress:r,chunks:n,multi_selection:!(j.ua.safari&&j.ua.windows),triggerDialog:(j.ua.gecko&&h.FormData||j.ua.webkit)}},init:function(p,q){var n;function o(v){var t,s,u=[],w,r={};for(s=0;s<v.length;s++){t=v[s];if(r[t.name]){continue}r[t.name]=true;w=j.guid();c[w]=t;u.push(new j.File(w,t.fileName||t.name,t.fileSize||t.size))}if(u.length){p.trigger("FilesAdded",u)}}n=this.getFeatures();if(!n.html5){q({success:false});return}p.bind("Init",function(v){var F,E,B=[],u,C,s=v.settings.filters,t,A,r=k.body,D;F=k.createElement("div");F.id=v.id+"_html5_container";j.extend(F.style,{position:"absolute",background:p.settings.shim_bgcolor||"transparent",width:"100px",height:"100px",overflow:"hidden",zIndex:99999,opacity:p.settings.shim_bgcolor?"":0});F.className="plupload html5";if(p.settings.container){r=k.getElementById(p.settings.container);if(j.getStyle(r,"position")==="static"){r.style.position="relative"}}r.appendChild(F);no_type_restriction:for(u=0;u<s.length;u++){t=s[u].extensions.split(/,/);for(C=0;C<t.length;C++){if(t[C]==="*"){B=[];break no_type_restriction}A=j.mimeTypes[t[C]];if(A){B.push(A)}}}F.innerHTML='<input id="'+p.id+'_html5"  style="font-size:999px" type="file" accept="'+B.join(",")+'" '+(p.settings.multi_selection&&p.features.multi_selection?'multiple="multiple"':"")+" />";F.scrollTop=100;D=k.getElementById(p.id+"_html5");if(v.features.triggerDialog){j.extend(D.style,{position:"absolute",width:"100%",height:"100%"})}else{j.extend(D.style,{cssFloat:"right",styleFloat:"right"})}D.onchange=function(){o(this.files);this.value=""};E=k.getElementById(v.settings.browse_button);if(E){var x=v.settings.browse_button_hover,z=v.settings.browse_button_active,w=v.features.triggerDialog?E:F;if(x){j.addEvent(w,"mouseover",function(){j.addClass(E,x)},v.id);j.addEvent(w,"mouseout",function(){j.removeClass(E,x)},v.id)}if(z){j.addEvent(w,"mousedown",function(){j.addClass(E,z)},v.id);j.addEvent(k.body,"mouseup",function(){j.removeClass(E,z)},v.id)}if(v.features.triggerDialog){j.addEvent(E,"click",function(y){k.getElementById(v.id+"_html5").click();y.preventDefault()},v.id)}}});p.bind("PostInit",function(){var r=k.getElementById(p.settings.drop_element);if(r){if(g){j.addEvent(r,"dragenter",function(v){var u,s,t;u=k.getElementById(p.id+"_drop");if(!u){u=k.createElement("input");u.setAttribute("type","file");u.setAttribute("id",p.id+"_drop");u.setAttribute("multiple","multiple");j.addEvent(u,"change",function(){o(this.files);j.removeEvent(u,"change",p.id);u.parentNode.removeChild(u)},p.id);r.appendChild(u)}s=j.getPos(r,k.getElementById(p.settings.container));t=j.getSize(r);if(j.getStyle(r,"position")==="static"){j.extend(r.style,{position:"relative"})}j.extend(u.style,{position:"absolute",display:"block",top:0,left:0,width:t.w+"px",height:t.h+"px",opacity:0})},p.id);return}j.addEvent(r,"dragover",function(s){s.preventDefault()},p.id);j.addEvent(r,"drop",function(t){var s=t.dataTransfer;if(s&&s.files){o(s.files)}t.preventDefault()},p.id)}});p.bind("Refresh",function(r){var s,t,u,w,v;s=k.getElementById(p.settings.browse_button);if(s){t=j.getPos(s,k.getElementById(r.settings.container));u=j.getSize(s);w=k.getElementById(p.id+"_html5_container");j.extend(w.style,{top:t.y+"px",left:t.x+"px",width:u.w+"px",height:u.h+"px"});if(p.features.triggerDialog){if(j.getStyle(s,"position")==="static"){j.extend(s.style,{position:"relative"})}v=parseInt(j.getStyle(s,"z-index"),10);if(isNaN(v)){v=0}j.extend(s.style,{zIndex:v});j.extend(w.style,{zIndex:v-1})}}});p.bind("UploadFile",function(r,t){var u=r.settings,x,s;function w(z,C,y){var A;if(File.prototype.slice){try{z.slice();return z.slice(C,y)}catch(B){return z.slice(C,y-C)}}else{if(A=File.prototype.webkitSlice||File.prototype.mozSlice){return A.call(z,C,y)}else{return null}}}function v(z){var C=0,B=0,y=("FileReader" in h)?new FileReader:null;function A(){var H,L,J,K,G,I,E,D=r.settings.url;function F(V){var S=0,T=new XMLHttpRequest,W=T.upload,M="----pluploadboundary"+j.guid(),N,O="--",U="\r\n",Q="";if(W){W.onprogress=function(X){t.loaded=Math.min(t.size,B+X.loaded-S);r.trigger("UploadProgress",t)}}T.onreadystatechange=function(){var X,Z;if(T.readyState==4){try{X=T.status}catch(Y){X=0}if(X>=400){r.trigger("Error",{code:j.HTTP_ERROR,message:j.translate("HTTP Error."),file:t,status:X})}else{if(J){Z={chunk:C,chunks:J,response:T.responseText,status:X};r.trigger("ChunkUploaded",t,Z);B+=I;if(Z.cancelled){t.status=j.FAILED;return}t.loaded=Math.min(t.size,(C+1)*G)}else{t.loaded=t.size}r.trigger("UploadProgress",t);V=H=N=Q=null;if(!J||++C>=J){t.status=j.DONE;r.trigger("FileUploaded",t,{response:T.responseText,status:X})}else{A()}}T=null}};if(r.settings.multipart&&n.multipart){K.name=t.target_name||t.name;T.open("post",D,true);j.each(r.settings.headers,function(Y,X){T.setRequestHeader(X,Y)});if(typeof(V)!=="string"&&!!h.FormData){N=new FormData();j.each(j.extend(K,r.settings.multipart_params),function(Y,X){N.append(X,Y)});N.append(r.settings.file_data_name,V);T.send(N);return}if(typeof(V)==="string"){T.setRequestHeader("Content-Type","multipart/form-data; boundary="+M);j.each(j.extend(K,r.settings.multipart_params),function(Y,X){Q+=O+M+U+'Content-Disposition: form-data; name="'+X+'"'+U+U;Q+=unescape(encodeURIComponent(Y))+U});E=j.mimeTypes[t.name.replace(/^.+\.([^.]+)/,"$1").toLowerCase()]||"application/octet-stream";Q+=O+M+U+'Content-Disposition: form-data; name="'+r.settings.file_data_name+'"; filename="'+unescape(encodeURIComponent(t.name))+'"'+U+"Content-Type: "+E+U+U+V+U+O+M+O+U;S=Q.length-V.length;V=Q;if(T.sendAsBinary){T.sendAsBinary(V)}else{if(n.canSendBinary){var R=new Uint8Array(V.length);for(var P=0;P<V.length;P++){R[P]=(V.charCodeAt(P)&255)}T.send(R.buffer)}}return}}D=j.buildUrl(r.settings.url,j.extend(K,r.settings.multipart_params));T.open("post",D,true);T.setRequestHeader("Content-Type","application/octet-stream");j.each(r.settings.headers,function(Y,X){T.setRequestHeader(X,Y)});T.send(V)}if(t.status==j.DONE||t.status==j.FAILED||r.state==j.STOPPED){return}K={name:t.target_name||t.name};if(u.chunk_size&&t.size>u.chunk_size&&(n.chunks||typeof(z)=="string")){G=u.chunk_size;J=Math.ceil(t.size/G);I=Math.min(G,t.size-(C*G));if(typeof(z)=="string"){H=z.substring(C*G,C*G+I)}else{H=w(z,C*G,C*G+I)}K.chunk=C;K.chunks=J}else{I=t.size;H=z}if(typeof(H)!=="string"&&y&&n.cantSendBlobInFormData&&n.chunks&&r.settings.chunk_size){y.onload=function(){F(y.result)};y.readAsBinaryString(H)}else{F(H)}}A()}x=c[t.id];if(n.jpgresize&&r.settings.resize&&/\.(png|jpg|jpeg)$/i.test(t.name)){d.call(r,t,r.settings.resize,/\.png$/i.test(t.name)?"image/png":"image/jpeg",function(y){if(y.success){t.size=y.data.length;v(y.data)}else{v(x)}})}else{if(!n.chunks&&n.jpgresize){l(x,v)}else{v(x)}}});p.bind("Destroy",function(r){var t,u,s=k.body,v={inputContainer:r.id+"_html5_container",inputFile:r.id+"_html5",browseButton:r.settings.browse_button,dropElm:r.settings.drop_element};for(t in v){u=k.getElementById(v[t]);if(u){j.removeAllEvents(u,r.id)}}j.removeAllEvents(k.body,r.id);if(r.settings.container){s=k.getElementById(r.settings.container)}s.removeChild(k.getElementById(v.inputContainer))});q({success:true})}});function b(){var q=false,o;function r(t,v){var s=q?0:-8*(v-1),w=0,u;for(u=0;u<v;u++){w|=(o.charCodeAt(t+u)<<Math.abs(s+u*8))}return w}function n(u,s,t){var t=arguments.length===3?t:o.length-s-1;o=o.substr(0,s)+u+o.substr(t+s)}function p(t,u,w){var x="",s=q?0:-8*(w-1),v;for(v=0;v<w;v++){x+=String.fromCharCode((u>>Math.abs(s+v*8))&255)}n(x,t,w)}return{II:function(s){if(s===e){return q}else{q=s}},init:function(s){q=false;o=s},SEGMENT:function(s,u,t){switch(arguments.length){case 1:return o.substr(s,o.length-s-1);case 2:return o.substr(s,u);case 3:n(t,s,u);break;default:return o}},BYTE:function(s){return r(s,1)},SHORT:function(s){return r(s,2)},LONG:function(s,t){if(t===e){return r(s,4)}else{p(s,t,4)}},SLONG:function(s){var t=r(s,4);return(t>2147483647?t-4294967296:t)},STRING:function(s,t){var u="";for(t+=s;s<t;s++){u+=String.fromCharCode(r(s,1))}return u}}}function f(s){var u={65505:{app:"EXIF",name:"APP1",signature:"Exif\0"},65506:{app:"ICC",name:"APP2",signature:"ICC_PROFILE\0"},65517:{app:"IPTC",name:"APP13",signature:"Photoshop 3.0\0"}},t=[],r,n,p=e,q=0,o;r=new b();r.init(s);if(r.SHORT(0)!==65496){return}n=2;o=Math.min(1048576,s.length);while(n<=o){p=r.SHORT(n);if(p>=65488&&p<=65495){n+=2;continue}if(p===65498||p===65497){break}q=r.SHORT(n+2)+2;if(u[p]&&r.STRING(n+4,u[p].signature.length)===u[p].signature){t.push({hex:p,app:u[p].app.toUpperCase(),name:u[p].name.toUpperCase(),start:n,length:q,segment:r.SEGMENT(n,q)})}n+=q}r.init(null);return{headers:t,restore:function(y){r.init(y);var w=new f(y);if(!w.headers){return false}for(var x=w.headers.length;x>0;x--){var z=w.headers[x-1];r.SEGMENT(z.start,z.length,"")}w.purge();n=r.SHORT(2)==65504?4+r.SHORT(4):2;for(var x=0,v=t.length;x<v;x++){r.SEGMENT(n,0,t[x].segment);n+=t[x].length}return r.SEGMENT()},get:function(x){var y=[];for(var w=0,v=t.length;w<v;w++){if(t[w].app===x.toUpperCase()){y.push(t[w].segment)}}return y},set:function(y,x){var z=[];if(typeof(x)==="string"){z.push(x)}else{z=x}for(var w=ii=0,v=t.length;w<v;w++){if(t[w].app===y.toUpperCase()){t[w].segment=z[ii];t[w].length=z[ii].length;ii++}if(ii>=z.length){break}}},purge:function(){t=[];r.init(null)}}}function a(){var q,n,o={},t;q=new b();n={tiff:{274:"Orientation",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer"},exif:{36864:"ExifVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",36867:"DateTimeOriginal",33434:"ExposureTime",33437:"FNumber",34855:"ISOSpeedRatings",37377:"ShutterSpeedValue",37378:"ApertureValue",37383:"MeteringMode",37384:"LightSource",37385:"Flash",41986:"ExposureMode",41987:"WhiteBalance",41990:"SceneCaptureType",41988:"DigitalZoomRatio",41992:"Contrast",41993:"Saturation",41994:"Sharpness"},gps:{0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude"}};t={ColorSpace:{1:"sRGB",0:"Uncalibrated"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{1:"Daylight",2:"Fliorescent",3:"Tungsten",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 -5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire.",1:"Flash fired.",5:"Strobe return light not detected.",7:"Strobe return light detected.",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},ExposureMode:{0:"Auto exposure",1:"Manual exposure",2:"Auto bracket"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},GPSLatitudeRef:{N:"North latitude",S:"South latitude"},GPSLongitudeRef:{E:"East longitude",W:"West longitude"}};function p(u,C){var w=q.SHORT(u),z,F,G,B,A,v,x,D,E=[],y={};for(z=0;z<w;z++){x=v=u+12*z+2;G=C[q.SHORT(x)];if(G===e){continue}B=q.SHORT(x+=2);A=q.LONG(x+=2);x+=4;E=[];switch(B){case 1:case 7:if(A>4){x=q.LONG(x)+o.tiffHeader}for(F=0;F<A;F++){E[F]=q.BYTE(x+F)}break;case 2:if(A>4){x=q.LONG(x)+o.tiffHeader}y[G]=q.STRING(x,A-1);continue;case 3:if(A>2){x=q.LONG(x)+o.tiffHeader}for(F=0;F<A;F++){E[F]=q.SHORT(x+F*2)}break;case 4:if(A>1){x=q.LONG(x)+o.tiffHeader}for(F=0;F<A;F++){E[F]=q.LONG(x+F*4)}break;case 5:x=q.LONG(x)+o.tiffHeader;for(F=0;F<A;F++){E[F]=q.LONG(x+F*4)/q.LONG(x+F*4+4)}break;case 9:x=q.LONG(x)+o.tiffHeader;for(F=0;F<A;F++){E[F]=q.SLONG(x+F*4)}break;case 10:x=q.LONG(x)+o.tiffHeader;for(F=0;F<A;F++){E[F]=q.SLONG(x+F*4)/q.SLONG(x+F*4+4)}break;default:continue}D=(A==1?E[0]:E);if(t.hasOwnProperty(G)&&typeof D!="object"){y[G]=t[G][D]}else{y[G]=D}}return y}function s(){var v=e,u=o.tiffHeader;q.II(q.SHORT(u)==18761);if(q.SHORT(u+=2)!==42){return false}o.IFD0=o.tiffHeader+q.LONG(u+=2);v=p(o.IFD0,n.tiff);o.exifIFD=("ExifIFDPointer" in v?o.tiffHeader+v.ExifIFDPointer:e);o.gpsIFD=("GPSInfoIFDPointer" in v?o.tiffHeader+v.GPSInfoIFDPointer:e);return true}function r(w,u,z){var B,y,x,A=0;if(typeof(u)==="string"){var v=n[w.toLowerCase()];for(hex in v){if(v[hex]===u){u=hex;break}}}B=o[w.toLowerCase()+"IFD"];y=q.SHORT(B);for(i=0;i<y;i++){x=B+12*i+2;if(q.SHORT(x)==u){A=x+8;break}}if(!A){return false}q.LONG(A,z);return true}return{init:function(u){o={tiffHeader:10};if(u===e||!u.length){return false}q.init(u);if(q.SHORT(0)===65505&&q.STRING(4,5).toUpperCase()==="EXIF\0"){return s()}return false},EXIF:function(){var u;u=p(o.exifIFD,n.exif);if(u.ExifVersion){u.ExifVersion=String.fromCharCode(u.ExifVersion[0],u.ExifVersion[1],u.ExifVersion[2],u.ExifVersion[3])}return u},GPS:function(){var u;u=p(o.gpsIFD,n.gps);if(u.GPSVersionID){u.GPSVersionID=u.GPSVersionID.join(".")}return u},setExif:function(u,v){if(u!=="PixelXDimension"&&u!=="PixelYDimension"){return false}return r("exif",u,v)},getBinary:function(){return q.SEGMENT()}}}})(window,document,plupload);
/* html4 */
/**
 * plupload.html4.js
 *
 * Copyright 2010, Ryan Demmer
 * Copyright 2009, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

// JSLint defined globals
/*global plupload:false, window:false */

(function(window, document, plupload, undef) {
	function getById(id) {
		return document.getElementById(id);
	}

	/**
	 * HTML4 implementation. This runtime has no special features it uses an form that posts files into an hidden iframe.
	 *
	 * @static
	 * @class plupload.runtimes.Html4
	 * @extends plupload.Runtime
	 */
	plupload.runtimes.Html4 = plupload.addRuntime("html4", {
		/**
		 * Returns a list of supported features for the runtime.
		 *
		 * @return {Object} Name/value object with supported features.
		 */
		getFeatures : function() {			
			// Only multipart feature
			return {
				multipart: true,
				
				// WebKit and Gecko 2+ can trigger file dialog progrmmatically
				triggerDialog: (plupload.ua.gecko && window.FormData || plupload.ua.webkit) 
			};
		},

		/**
		 * Initializes the upload runtime.
		 *
		 * @method init
		 * @param {plupload.Uploader} uploader Uploader instance that needs to be initialized.
		 * @param {function} callback Callback to execute when the runtime initializes or fails to initialize. If it succeeds an object with a parameter name success will be set to true.
		 */
		init : function(uploader, callback) {
			uploader.bind("Init", function(up) {
				var container = document.body, iframe, url = "javascript", currentFile,
					input, currentFileId, fileIds = [], IE = /MSIE/.test(navigator.userAgent), mimes = [],
					filters = up.settings.filters, i, ext, type, y;

				// Convert extensions to mime types list
				no_type_restriction:
				for (i = 0; i < filters.length; i++) {
					ext = filters[i].extensions.split(/,/);

					for (y = 0; y < ext.length; y++) {
						
						// If there's an asterisk in the list, then accept attribute is not required
						if (ext[y] === '*') {
							mimes = [];
							break no_type_restriction;
						}
						
						type = plupload.mimeTypes[ext[y]];

						if (type) {
							mimes.push(type);
						}
					}
				}
				
				mimes = mimes.join(',');

				function createForm() {
					var form, input, bgcolor, browseButton;

					// Setup unique id for form
					currentFileId = plupload.guid();
					
					// Save id for Destroy handler
					fileIds.push(currentFileId);

					// Create form
					form = document.createElement('form');
					form.setAttribute('id', 'form_' + currentFileId);
					form.setAttribute('method', 'post');
					form.setAttribute('enctype', 'multipart/form-data');
					form.setAttribute('encoding', 'multipart/form-data');
					form.setAttribute("target", up.id + '_iframe');
					//form.style.position = 'absolute';

					// Create input and set attributes
					input = document.createElement('input');
					input.setAttribute('id', 'input_' + currentFileId);
					input.setAttribute('type', 'file');
					input.setAttribute('accept', mimes);
					//input.setAttribute('size', 1);
					
					browseButton = getById(up.settings.browse_button);
                    
                    if (browseButton)
                    {
                        browseButton.style.display = 'none';
                    }
					
					// Route click event to input element programmatically, if possible
                    /*
					if (up.features.triggerDialog && browseButton) {
						plupload.addEvent(getById(up.settings.browse_button), 'click', function(e) {
							input.click();
							e.preventDefault();
						}, up.id);
					}
                    */

					// Set input styles
                    /*
					plupload.extend(input.style, {
						width : '100%',
						height : '100%',
						opacity : 0,
						fontSize: '999px' // force input element to be bigger then needed to occupy whole space
					});
                    */
					
                    /*
					plupload.extend(form.style, {
						overflow: 'hidden'
					});
                    */

					// Show the container if shim_bgcolor is specified
                    /*
					bgcolor = up.settings.shim_bgcolor;
					if (bgcolor) {
						form.style.background = bgcolor;
					}
                    */

					// no opacity in IE
                    /*
					if (IE) {
						plupload.extend(input.style, {
							filter : "alpha(opacity=0)"
						}); 
					}
                    */

					// add change event
					plupload.addEvent(input, 'change', function(e) {
						var element = e.target, name, files = [], topElement;

						if (element.value) {
                            var oldForm = getById('form_' + currentFileId);
                        
                            oldForm.style.position = "absolute";
							oldForm.style.top = -0xFFFFF + "px";

							// Get file name
							name = element.value.replace(/\\/g, '/');
							name = name.substring(name.length, name.lastIndexOf('/') + 1);

							// Push files
							files.push(new plupload.File(currentFileId, name));
							
							// Clean-up events - they won't be needed anymore
							if (!up.features.triggerDialog) {
								plupload.removeAllEvents(form, up.id);								
							} else {
								plupload.removeEvent(browseButton, 'click', up.id);	
							}
							plupload.removeEvent(input, 'change', up.id);

							// Create and position next form
							createForm();

							// Fire FilesAdded event
							if (files.length) {
								uploader.trigger("FilesAdded", files);
							}							
						}
					}, up.id);

					// append to container
					form.appendChild(input);
					container.appendChild(form);

					up.refresh();
				}


				function createIframe() {
					var temp = document.createElement('div');

					// Create iframe using a temp div since IE 6 won't be able to set the name using setAttribute or iframe.name
					temp.innerHTML = '<iframe id="' + up.id + '_iframe" name="' + up.id + '_iframe" src="' + url + ':&quot;&quot;" style="display:none"></iframe>';
					iframe = temp.firstChild;
					container.appendChild(iframe);

					// Add IFrame onload event
					plupload.addEvent(iframe, 'load', function(e) {
						var n = e.target, el, result;

						// Ignore load event if there is no file
						if (!currentFile) {
							return;
						}

						try {
							el = n.contentWindow.document || n.contentDocument || window.frames[n.id].document;
						} catch (ex) {
							// Probably a permission denied error
							up.trigger('Error', {
								code : plupload.SECURITY_ERROR,
								message : plupload.translate('Security error.'),
								file : currentFile
							});

							return;
						}

						// Get result
						result = el.body.innerHTML;
						
						// Assume no error
						if (result) {
							currentFile.status = plupload.DONE;
							currentFile.loaded = 1025;
							currentFile.percent = 100;

							up.trigger('UploadProgress', currentFile);
							up.trigger('FileUploaded', currentFile, {
								response : result
							});
						}
					}, up.id);
				} // end createIframe
				
				if (up.settings.container) {
					container = getById(up.settings.container);
					/* if (plupload.getStyle(container, 'position') === 'static') {
						container.style.position = 'relative';
					} */
				}
				
				// Upload file
				up.bind("UploadFile", function(up, file) {
					var form, input;
					
					// File upload finished
					if (file.status == plupload.DONE || file.status == plupload.FAILED || up.state == plupload.STOPPED) {
						return;
					}

					// Get the form and input elements
					form = getById('form_' + file.id);
					input = getById('input_' + file.id);

					// Set input element name attribute which allows it to be submitted
					input.setAttribute('name', up.settings.file_data_name);

					// Store action
					form.setAttribute("action", up.settings.url);

					// Append multipart parameters
					plupload.each(plupload.extend({name : file.target_name || file.name}, up.settings.multipart_params), function(value, name) {
						var hidden = document.createElement('input');

						plupload.extend(hidden, {
							type : 'hidden',
							name : name,
							value : value
						});

						form.insertBefore(hidden, form.firstChild);
					});

					currentFile = file;

					// Hide the current form
					//getById('form_' + currentFileId).style.top = -0xFFFFF + "px";
					
					form.submit();
					form.parentNode.removeChild(form);
				});
				
				
				
				up.bind('FileUploaded', function(up) {
					up.refresh(); // just to get the form back on top of browse_button
				});				

				up.bind('StateChanged', function(up) {
					if (up.state == plupload.STARTED) {
						createIframe();
					}

					if (up.state == plupload.STOPPED) {
						window.setTimeout(function() {
							plupload.removeEvent(iframe, 'load', up.id);
							if (iframe.parentNode) { // #382
								iframe.parentNode.removeChild(iframe);
							}
						}, 0);
					}
				});

				// Refresh button, will reposition the input form
				up.bind("Refresh", function(up) {
					var browseButton, topElement, hoverClass, activeClass, browsePos, browseSize, inputContainer, inputFile, zIndex;

					browseButton = getById(up.settings.browse_button);
					if (browseButton) {
						browsePos = plupload.getPos(browseButton, getById(up.settings.container));
						browseSize = plupload.getSize(browseButton);
						inputContainer = getById('form_' + currentFileId);
						inputFile = getById('input_' + currentFileId);
	
                            /*
						plupload.extend(inputContainer.style, {
							top : browsePos.y + 'px',
							left : browsePos.x + 'px',
							width : browseSize.w + 'px',
							height : browseSize.h + 'px'
						});
                        */
						
						// for IE and WebKit place input element underneath the browse button and route onclick event 
						// TODO: revise when browser support for this feature will change
						if (up.features.triggerDialog) {
							/* if (plupload.getStyle(browseButton, 'position') === 'static') {
								plupload.extend(browseButton.style, {
									position : 'relative'
								});
							} 
							
							zIndex = parseInt(browseButton.style.zIndex, 10);

							if (isNaN(zIndex)) {
								zIndex = 0;
							}

							plupload.extend(browseButton.style, {
								zIndex : zIndex
							});							

							plupload.extend(inputContainer.style, {
								zIndex : zIndex - 1
							});
                            */
						}

						/* Since we have to place input[type=file] on top of the browse_button for some browsers (FF, Opera),
						browse_button loses interactivity, here we try to neutralize this issue highlighting browse_button
						with a special class
						TODO: needs to be revised as things will change */
                        /*
						hoverClass = up.settings.browse_button_hover;
						activeClass = up.settings.browse_button_active;
						topElement = up.features.triggerDialog ? browseButton : inputContainer;
						
						if (hoverClass) {
							plupload.addEvent(topElement, 'mouseover', function() {
								plupload.addClass(browseButton, hoverClass);	
							}, up.id);
							plupload.addEvent(topElement, 'mouseout', function() {
								plupload.removeClass(browseButton, hoverClass);
							}, up.id);
						}
						
						if (activeClass) {
							plupload.addEvent(topElement, 'mousedown', function() {
								plupload.addClass(browseButton, activeClass);	
							}, up.id);
							plupload.addEvent(document.body, 'mouseup', function() {
								plupload.removeClass(browseButton, activeClass);	
							}, up.id);
						}
                        */
					}
				});

				// Remove files
				uploader.bind("FilesRemoved", function(up, files) {
					var i, n;

					for (i = 0; i < files.length; i++) {
						n = getById('form_' + files[i].id);
						if (n) {
							n.parentNode.removeChild(n);
						}
					}
				});
				
				
				// Completely destroy the runtime
				uploader.bind("Destroy", function(up) {
					var name, element, form,
						elements = {
							inputContainer: 'form_' + currentFileId,
							inputFile: 'input_' + currentFileId,	
							browseButton: up.settings.browse_button
						};

					// Unbind event handlers
					for (name in elements) {
						element = getById(elements[name]);
						if (element) {
							plupload.removeAllEvents(element, up.id);
						}
					}
					plupload.removeAllEvents(document.body, up.id);
					
					// Remove mark-up
					plupload.each(fileIds, function(id, i) {
						form = getById('form_' + id);
						if (form) {
							container.removeChild(form);
						}
					});
                        
				});

				// Create initial form
				createForm();
			});

			callback({success : true});
		}
	});
})(window, document, plupload);
/* flash */
(function(f,b,d,e){var a={},g={};function c(){var h;try{h=navigator.plugins["Shockwave Flash"];h=h.description}catch(j){try{h=new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")}catch(i){h="0.0"}}h=h.match(/\d+/g);return parseFloat(h[0]+"."+h[1])}d.flash={trigger:function(j,h,i){setTimeout(function(){var m=a[j],l,k;if(m){m.trigger("Flash:"+h,i)}},0)}};d.runtimes.Flash=d.addRuntime("flash",{getFeatures:function(){return{jpgresize:true,pngresize:true,maxWidth:8091,maxHeight:8091,chunks:true,progress:true,multipart:true,multi_selection:true}},init:function(m,o){var k,l,h=0,i=b.body;if(c()<10){o({success:false});return}g[m.id]=false;a[m.id]=m;k=b.getElementById(m.settings.browse_button);l=b.createElement("div");l.id=m.id+"_flash_container";d.extend(l.style,{position:"absolute",top:"0px",background:m.settings.shim_bgcolor||"transparent",zIndex:99999,width:"100%",height:"100%"});l.className="plupload flash";if(m.settings.container){i=b.getElementById(m.settings.container);if(d.getStyle(i,"position")==="static"){i.style.position="relative"}}i.appendChild(l);(function(){var p,q;p='<object id="'+m.id+'_flash" type="application/x-shockwave-flash" data="'+m.settings.flash_swf_url+'" ';if(d.ua.ie){p+='classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '}p+='width="100%" height="100%" style="outline:0"><param name="movie" value="'+m.settings.flash_swf_url+'" /><param name="flashvars" value="id='+escape(m.id)+'" /><param name="wmode" value="transparent" /><param name="allowscriptaccess" value="always" /></object>';if(d.ua.ie){q=b.createElement("div");l.appendChild(q);q.outerHTML=p;q=null}else{l.innerHTML=p}}());function n(){return b.getElementById(m.id+"_flash")}function j(){if(h++>5000){o({success:false});return}if(!g[m.id]){setTimeout(j,1)}}j();k=l=null;m.bind("Flash:Init",function(){var q={},p;n().setFileFilters(m.settings.filters,m.settings.multi_selection);if(g[m.id]){return}g[m.id]=true;m.bind("UploadFile",function(r,t){var u=r.settings,s=m.settings.resize||{};n().uploadFile(q[t.id],u.url,{name:t.target_name||t.name,mime:d.mimeTypes[t.name.replace(/^.+\.([^.]+)/,"$1").toLowerCase()]||"application/octet-stream",chunk_size:u.chunk_size,width:s.width,height:s.height,quality:s.quality,multipart:u.multipart,multipart_params:u.multipart_params||{},file_data_name:u.file_data_name,format:/\.(jpg|jpeg)$/i.test(t.name)?"jpg":"png",headers:u.headers,urlstream_upload:u.urlstream_upload})});m.bind("Flash:UploadProcess",function(s,r){var t=s.getFile(q[r.id]);if(t.status!=d.FAILED){t.loaded=r.loaded;t.size=r.size;s.trigger("UploadProgress",t)}});m.bind("Flash:UploadChunkComplete",function(r,t){var u,s=r.getFile(q[t.id]);u={chunk:t.chunk,chunks:t.chunks,response:t.text};r.trigger("ChunkUploaded",s,u);if(s.status!=d.FAILED){n().uploadNextChunk()}if(t.chunk==t.chunks-1){s.status=d.DONE;r.trigger("FileUploaded",s,{response:t.text})}});m.bind("Flash:SelectFiles",function(r,u){var t,s,v=[],w;for(s=0;s<u.length;s++){t=u[s];w=d.guid();q[w]=t.id;q[t.id]=w;v.push(new d.File(w,t.name,t.size))}if(v.length){m.trigger("FilesAdded",v)}});m.bind("Flash:SecurityError",function(r,s){m.trigger("Error",{code:d.SECURITY_ERROR,message:d.translate("Security error."),details:s.message,file:m.getFile(q[s.id])})});m.bind("Flash:GenericError",function(r,s){m.trigger("Error",{code:d.GENERIC_ERROR,message:d.translate("Generic error."),details:s.message,file:m.getFile(q[s.id])})});m.bind("Flash:IOError",function(r,s){m.trigger("Error",{code:d.IO_ERROR,message:d.translate("IO error."),details:s.message,file:m.getFile(q[s.id])})});m.bind("Flash:ImageError",function(r,s){m.trigger("Error",{code:parseInt(s.code,10),message:d.translate("Image error."),file:m.getFile(q[s.id])})});m.bind("Flash:StageEvent:rollOver",function(r){var s,t;s=b.getElementById(m.settings.browse_button);t=r.settings.browse_button_hover;if(s&&t){d.addClass(s,t)}});m.bind("Flash:StageEvent:rollOut",function(r){var s,t;s=b.getElementById(m.settings.browse_button);t=r.settings.browse_button_hover;if(s&&t){d.removeClass(s,t)}});m.bind("Flash:StageEvent:mouseDown",function(r){var s,t;s=b.getElementById(m.settings.browse_button);t=r.settings.browse_button_active;if(s&&t){d.addClass(s,t);d.addEvent(b.body,"mouseup",function(){d.removeClass(s,t)},r.id)}});m.bind("Flash:StageEvent:mouseUp",function(r){var s,t;s=b.getElementById(m.settings.browse_button);t=r.settings.browse_button_active;if(s&&t){d.removeClass(s,t)}});m.bind("Flash:ExifData",function(r,s){m.trigger("ExifData",m.getFile(q[s.id]),s.data)});m.bind("Flash:GpsData",function(r,s){m.trigger("GpsData",m.getFile(q[s.id]),s.data)});m.bind("QueueChanged",function(r){m.refresh()});m.bind("FilesRemoved",function(r,t){var s;for(s=0;s<t.length;s++){n().removeFile(q[t[s].id])}});m.bind("StateChanged",function(r){m.refresh()});m.bind("Refresh",function(r){var s,t,u;n().setFileFilters(m.settings.filters,m.settings.multi_selection);s=b.getElementById(r.settings.browse_button);if(s){t=d.getPos(s,b.getElementById(r.settings.container));u=d.getSize(s);d.extend(b.getElementById(r.id+"_flash_container").style,{top:t.y+"px",left:t.x+"px",width:u.w+"px",height:u.h+"px"})}});m.bind("Destroy",function(r){var s;d.removeAllEvents(b.body,r.id);delete g[r.id];delete a[r.id];s=b.getElementById(r.id+"_flash_container");if(s){i.removeChild(s)}});o({success:true})})}})})(window,document,plupload);

/**
    Envaya-specific usage below:
 **/
 
var FileUploader = makeClass();

FileUploader.prototype.init = function($vars)
{
    this.options = $vars;
    var uploader = this.uploader = new plupload.Uploader(this.getPluploadOptions());
    
    var $self = this;
    
    uploader.bind('Error', function(up, error) {
        function translateMessage() 
        {
            switch (error.code)
            {
                case plupload.FILE_SIZE_ERROR:
                    return $self.options.size_error_message;
                case plupload.FILE_EXTENSION_ERROR:
                    return $self.options.format_error_message || error.message;
                default:
                     return error.message;
            }
        }
        return $self.setProgress($self.options.queue_error_message + " " + translateMessage());
    });
    
    uploader.bind('QueueChanged', function(up) {
        $self.fileDialogCompleteHandler();
    });
    
    uploader.bind('BeforeUpload', function(up, file, serverData) {
        $self.inUpload = true;        
        $self.setProgress($self.options.upload_progress_message);
    });    
    
    uploader.bind('UploadProgress', function(up, file) {
        if ($self.inUpload)
        {
            $self.uploadProgressHandler(file);
        }
    });

    uploader.bind('FileUploaded', function(up, file, serverData) {
        $self.inUpload = false;
        $self.uploadSuccessHandler(file, serverData.response);
    });
    
    uploader.init();
    
    this.setProgress(this.options.initial_message);
};

FileUploader.prototype.getPluploadOptions = function()
{        
    var opts = this.options;
    
    // backwards compatibility for JS hardcoded in Envaya Reports
    if (opts.placeholder_id)
    {
        opts.browse_id = opts.placeholder_id + "_browse";        
        $(opts.placeholder_id).appendChild(createElem('a', {id: opts.browse_id, href:'javascript:void(0)'}, "Browse"));
        opts.container_id = opts.placeholder_id;
    }

    return {
        runtimes : opts.runtimes || "flash,html5,html4",
        browse_button : opts.browse_id,
        container: opts.container_id,
        max_file_size : '10mb',
        browse_button_hover: "upload_hover",
        url : '/pg/upload',
        multi_selection: opts.multi_selection,
        required_features: 'multipart',
        multipart : true,
        multipart_params: opts.post_params,
        resize : ((opts.max_width) ? 
            {width : opts.max_width, height : opts.max_height, quality : 75} : null),
        flash_swf_url : '/_media/plupload.flash.swf?v8',
        filters : ((opts.file_types) ? [{   
            title : opts.file_types_description, 
            extensions : opts.file_types
        }] : [])
    };
};        

FileUploader.prototype.fileDialogCompleteHandler = function()
{
    this.setProgress(this.options.processing_message);    
    this.uploader.start();
};    
    
FileUploader.prototype.setProgress = function($html)
{
    $(this.options.progress_id).innerHTML = $html; 
};

FileUploader.prototype.uploadProgressHandler = function(file)
{
    var msg;

    if (!file)
    {
        return;
    }
    if (file.loaded == file.size)
    {
        msg = this.options.server_processing_message;
    }
    else
    {
        msg = this.options.upload_progress_message;

        if (file.size)
        {
            msg += " " + Math.floor(100 * file.loaded / file.size) + "%";
        }    
    }    

    this.setProgress(msg); 
};

FileUploader.prototype.uploadSuccessHandler = function($file, $serverData)
{
    if (this.options.track_dirty)
    {
        setDirty(true);
    }
    this.showPreviewJson($serverData);            
}; 
               
FileUploader.prototype.showPreviewJson = function($json) 
{
    var $files = _eval($json);

    if ($files.error)
    {
        this.setProgress($files.error);
        if (this.onError)
        {
            this.onError($files.error);
        }        
        
        return false;
    }
    else
    {
        this.setProgress('');
        this.showPreview($files, $json);
        if (this.onComplete)
        {
            this.onComplete($files);
        }
                
        return true;
    }    
};

FileUploader.prototype.showPreview = function($files, $json) {};
    
FileUploader.prototype.getFileByProp = function(files, prop, value)
{
    for (var i = 0; files && i < files.length; i++)
    {
        var file = files[i];
        if (file[prop] == value)
        {
            return file;
        }
    }
    return null;
};

var SingleImageUploader = makeClass(FileUploader);

SingleImageUploader.prototype.init = function($vars)
{    
    FileUploader.prototype.init.call(this, $vars);

    var prevValue = $($vars.result_id).value;
    if (prevValue)
    {
        this.showPreviewJson(prevValue);
    }    
};

SingleImageUploader.prototype.reset = function()
{
    this.setProgress('');
    $(this.options.result_id).value = '';
};

SingleImageUploader.prototype.getCurrentImage = function()
{
    var imageJson = $(this.options.result_id).value;
    return imageJson ? _eval(imageJson) : null;    
};
    
SingleImageUploader.prototype.showPreview = function($images, $json)
{
    $(this.options.result_id).value = $json;
    
    var progress = $(this.options.progress_id);

    var loadingMessage = createElem('span', this.options.loading_preview_message);

    removeChildren(progress);
    progress.appendChild(loadingMessage);
    progress.style.display = 'block';
    
    var img = createElem('img');

    img.style.display = 'none';

    addEvent(img, 'load', function() {
        img.style.display = 'inline';
        removeElem(loadingMessage);
    });

    var $image = this.getFileByProp($images, 'size', this.options.thumbnail_size);
    img.src = $image.url;
    progress.appendChild(img);    
};
