"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6525],{76:(Y,_,g)=>{g.d(_,{GW:()=>C,dk:()=>f,oK:()=>l});var l=(()=>{return(b=l||(l={})).Prompt="PROMPT",b.Camera="CAMERA",b.Photos="PHOTOS",l;var b})(),C=(()=>{return(b=C||(C={})).Rear="REAR",b.Front="FRONT",C;var b})(),f=(()=>{return(b=f||(f={})).Uri="uri",b.Base64="base64",b.DataUrl="dataUrl",f;var b})()},7423:(Y,_,g)=>{g.d(_,{Uw:()=>w,dV:()=>O,fo:()=>S,xz:()=>j});var l=g(5861);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var k=(()=>{return(o=k||(k={})).Unimplemented="UNIMPLEMENTED",o.Unavailable="UNAVAILABLE",k;var o})();class j extends Error{constructor(e,t,i){super(e),this.message=e,this.code=t,this.data=i}}const D=o=>{var e,t,i,s,r;const d=o.CapacitorCustomPlatform||null,a=o.Capacitor||{},h=a.Plugins=a.Plugins||{},u=o.CapacitorPlatforms,W=(null===(e=null==u?void 0:u.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==d?d.name:(o=>{var e,t;return null!=o&&o.androidBridge?"android":null!==(t=null===(e=null==o?void 0:o.webkit)||void 0===e?void 0:e.messageHandlers)&&void 0!==t&&t.bridge?"ios":"web"})(o)),le=(null===(t=null==u?void 0:u.currentPlatform)||void 0===t?void 0:t.isNativePlatform)||(()=>"web"!==W()),de=(null===(i=null==u?void 0:u.currentPlatform)||void 0===i?void 0:i.isPluginAvailable)||(p=>{const m=J.get(p);return!!(null!=m&&m.platforms.has(W())||Q(p))}),Q=(null===(s=null==u?void 0:u.currentPlatform)||void 0===s?void 0:s.getPluginHeader)||(p=>{var m;return null===(m=a.PluginHeaders)||void 0===m?void 0:m.find($=>$.name===p)}),J=new Map,me=(null===(r=null==u?void 0:u.currentPlatform)||void 0===r?void 0:r.registerPlugin)||((p,m={})=>{const $=J.get(p);if($)return console.warn(`Capacitor plugin "${p}" already registered. Cannot register plugins twice.`),$.proxy;const A=W(),z=Q(p);let E;const he=function(){var P=(0,l.Z)(function*(){return!E&&A in m?E=E="function"==typeof m[A]?yield m[A]():m[A]:null!==d&&!E&&"web"in m&&(E=E="function"==typeof m.web?yield m.web():m.web),E});return function(){return P.apply(this,arguments)}}(),V=P=>{let v;const L=(...U)=>{const M=he().then(x=>{const T=((P,v)=>{var L,U;if(!z){if(P)return null===(U=P[v])||void 0===U?void 0:U.bind(P);throw new j(`"${p}" plugin is not implemented on ${A}`,k.Unimplemented)}{const M=null==z?void 0:z.methods.find(x=>v===x.name);if(M)return"promise"===M.rtype?x=>a.nativePromise(p,v.toString(),x):(x,T)=>a.nativeCallback(p,v.toString(),x,T);if(P)return null===(L=P[v])||void 0===L?void 0:L.bind(P)}})(x,P);if(T){const H=T(...U);return v=null==H?void 0:H.remove,H}throw new j(`"${p}.${P}()" is not implemented on ${A}`,k.Unimplemented)});return"addListener"===P&&(M.remove=(0,l.Z)(function*(){return v()})),M};return L.toString=()=>`${P.toString()}() { [capacitor code] }`,Object.defineProperty(L,"name",{value:P,writable:!1,configurable:!1}),L},X=V("addListener"),ee=V("removeListener"),be=(P,v)=>{const L=X({eventName:P},v),U=function(){var x=(0,l.Z)(function*(){const T=yield L;ee({eventName:P,callbackId:T},v)});return function(){return x.apply(this,arguments)}}(),M=new Promise(x=>L.then(()=>x({remove:U})));return M.remove=(0,l.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield U()}),M},q=new Proxy({},{get(P,v){switch(v){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return z?be:X;case"removeListener":return ee;default:return V(v)}}});return h[p]=q,J.set(p,{name:p,proxy:q,platforms:new Set([...Object.keys(m),...z?[A]:[]])}),q});return a.convertFileSrc||(a.convertFileSrc=p=>p),a.getPlatform=W,a.handleError=p=>o.console.error(p),a.isNativePlatform=le,a.isPluginAvailable=de,a.pluginMethodNoop=(p,m,$)=>Promise.reject(`${$} does not have an implementation of "${m}".`),a.registerPlugin=me,a.Exception=j,a.DEBUG=!!a.DEBUG,a.isLoggingEnabled=!!a.isLoggingEnabled,a.platform=a.getPlatform(),a.isNative=a.isNativePlatform(),a},O=(o=>o.Capacitor=D(o))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),S=O.registerPlugin;class w{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){var i=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);const r=this.windowListeners[e];r&&!r.registered&&this.addWindowListener(r);const d=function(){var h=(0,l.Z)(function*(){return i.removeListener(e,t)});return function(){return h.apply(this,arguments)}}(),a=Promise.resolve({remove:d});return Object.defineProperty(a,"remove",{value:(h=(0,l.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield d()}),function(){return h.apply(this,arguments)})}),a;var h}removeAllListeners(){var e=this;return(0,l.Z)(function*(){e.listeners={};for(const t in e.windowListeners)e.removeWindowListener(e.windowListeners[t]);e.windowListeners={}})()}notifyListeners(e,t){const i=this.listeners[e];i&&i.forEach(s=>s(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:i=>{this.notifyListeners(t,i)}}}unimplemented(e="not implemented"){return new O.Exception(e,k.Unimplemented)}unavailable(e="not available"){return new O.Exception(e,k.Unavailable)}removeListener(e,t){var i=this;return(0,l.Z)(function*(){const s=i.listeners[e];if(!s)return;const r=s.indexOf(t);i.listeners[e].splice(r,1),i.listeners[e].length||i.removeWindowListener(i.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){!e||(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}const Z=o=>encodeURIComponent(o).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),R=o=>o.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class ne extends w{getCookies(){return(0,l.Z)(function*(){const e=document.cookie,t={};return e.split(";").forEach(i=>{if(i.length<=0)return;let[s,r]=i.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=R(s).trim(),r=R(r).trim(),t[s]=r}),t})()}setCookie(e){return(0,l.Z)(function*(){try{const t=Z(e.key),i=Z(e.value),s=`; expires=${(e.expires||"").replace("expires=","")}`,r=(e.path||"/").replace("path=",""),d=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${i||""}${s}; path=${r}; ${d};`}catch(t){return Promise.reject(t)}})()}deleteCookie(e){return(0,l.Z)(function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}})()}clearCookies(){return(0,l.Z)(function*(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})()}clearAllCookies(){var e=this;return(0,l.Z)(function*(){try{yield e.clearCookies()}catch(t){return Promise.reject(t)}})()}}S("CapacitorCookies",{web:()=>new ne});const oe=function(){var o=(0,l.Z)(function*(e){return new Promise((t,i)=>{const s=new FileReader;s.onload=()=>{const r=s.result;t(r.indexOf(",")>=0?r.split(",")[1]:r)},s.onerror=r=>i(r),s.readAsDataURL(e)})});return function(t){return o.apply(this,arguments)}}();class se extends w{request(e){return(0,l.Z)(function*(){const t=((o,e={})=>{const t=Object.assign({method:o.method||"GET",headers:o.headers},e),s=((o={})=>{const e=Object.keys(o);return Object.keys(o).map(s=>s.toLocaleLowerCase()).reduce((s,r,d)=>(s[r]=o[e[d]],s),{})})(o.headers)["content-type"]||"";if("string"==typeof o.data)t.body=o.data;else if(s.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[d,a]of Object.entries(o.data||{}))r.set(d,a);t.body=r.toString()}else if(s.includes("multipart/form-data")){const r=new FormData;if(o.data instanceof FormData)o.data.forEach((a,h)=>{r.append(h,a)});else for(const a of Object.keys(o.data))r.append(a,o.data[a]);t.body=r;const d=new Headers(t.headers);d.delete("content-type"),t.headers=d}else(s.includes("application/json")||"object"==typeof o.data)&&(t.body=JSON.stringify(o.data));return t})(e,e.webFetchExtra),i=((o,e=!0)=>o?Object.entries(o).reduce((i,s)=>{const[r,d]=s;let a,h;return Array.isArray(d)?(h="",d.forEach(u=>{a=e?encodeURIComponent(u):u,h+=`${r}=${a}&`}),h.slice(0,-1)):(a=e?encodeURIComponent(d):d,h=`${r}=${a}`),`${i}&${h}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),s=i?`${e.url}?${i}`:e.url,r=yield fetch(s,t),d=r.headers.get("content-type")||"";let h,u,{responseType:a="text"}=r.ok?e:{};switch(d.includes("application/json")&&(a="json"),a){case"arraybuffer":case"blob":u=yield r.blob(),h=yield oe(u);break;case"json":h=yield r.json();break;default:h=yield r.text()}const F={};return r.headers.forEach((W,K)=>{F[K]=W}),{data:h,headers:F,status:r.status,url:r.url}})()}get(e){var t=this;return(0,l.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"GET"}))})()}post(e){var t=this;return(0,l.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"POST"}))})()}put(e){var t=this;return(0,l.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PUT"}))})()}patch(e){var t=this;return(0,l.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})()}delete(e){var t=this;return(0,l.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})()}}S("CapacitorHttp",{web:()=>new se})},6525:(Y,_,g)=>{g.r(_),g.d(_,{EmployeeLoginPageModule:()=>N});var l=g(6895),C=g(433),f=g(2723),b=g(6955),G=g(655),B=g(7423),I=g(76);const k=(0,B.fo)("Camera",{web:()=>g.e(3954).then(g.bind(g,3954)).then(c=>new c.CameraWeb)}),j=(0,B.fo)("Share",{web:()=>g.e(7907).then(g.bind(g,7907)).then(c=>new c.ShareWeb)});var n=g(8256);function D(c,w){if(1&c){const y=n.EpF();n.TgZ(0,"ion-button",24),n.NdJ("click",function(){n.CHM(y);const R=n.oxw();return n.KtG(R.sharePhoto())}),n._uU(1,"Share"),n.qZA()}}const O=[{path:"",component:(()=>{class c{constructor(){}checkPlateformForWeb(){return"web"==B.dV.getPlatform()}ngOnInit(){}takePicture(){return(0,G.mG)(this,void 0,void 0,function*(){const y=yield k.getPhoto({quality:90,source:I.oK.Prompt,allowEditing:!0,resultType:this.checkPlateformForWeb()?I.dk.DataUrl:I.dk.Uri});this.selectedImage=y,this.checkPlateformForWeb()&&(this.selectedImage.webPath=y.dataUrl)})}sharePhoto(){return(0,G.mG)(this,void 0,void 0,function*(){yield j.share({title:"Share Via Whatsaap",text:"I am Sharing Image",url:this.selectedImage.path,dialogTitle:"Shre your real time image"})})}}return c.\u0275fac=function(y){return new(y||c)},c.\u0275cmp=n.Xpm({type:c,selectors:[["app-employee-login"]],decls:45,vars:2,consts:[[2,"align-items","center"],["size","8"],["slot","start"],["src","https://bluethinkinc.com/wp-content/uploads/2023/app/bluethinkinc_logo_1.png","alt","BluethinkInc Logo",2,"width","210px"],["size","2",2,"text-align","center"],["name","person-sharp",2,"font-size","36px","color","rgb(114, 113, 113)"],["size","2",2,"text-align","right"],["src","https://bluethinkinc.com/wp-content/uploads/2023/app/us-flag-n.jpg","alt","BluethinkInc Logo",2,"width","45px"],[1,"clent-login-wrraper"],[1,"contact-form-section"],[1,"contact-inner","ion-padding"],[1,"client-title"],[2,"text-align","center"],["type","text","placeholder","E-mail",1,"custom"],["type","password","placeholder","Password",1,"custom"],[1,"clent-select"],["value","locatin"],["value","office"],["value","home"],[1,"client-loginbtn-sec"],[1,"c-loginbtn"],["size","default","shape","round",2,"text-transform","capitalize","font-size","15px"],[1,"c-forgetbtn"],[1,"c-takecamtbtn"],["size","default","shape","round","expand","block",2,"text-transform","capitalize","font-size","15px",3,"click"],[3,"src"],["style","text-transform: capitalize; font-size: 15px;","size","default","shape","round","expand","block",3,"click",4,"ngIf"]],template:function(y,Z){1&y&&(n.TgZ(0,"ion-header")(1,"ion-grid")(2,"ion-row",0)(3,"ion-col",1)(4,"ion-toolbar")(5,"ion-buttons",2),n._UZ(6,"ion-menu-button"),n.qZA(),n.TgZ(7,"ion-title"),n._UZ(8,"img",3),n.qZA()()(),n.TgZ(9,"ion-col",4),n._UZ(10,"ion-icon",5),n.qZA(),n.TgZ(11,"ion-col",6),n._UZ(12,"img",7),n.qZA()()()(),n.TgZ(13,"ion-content")(14,"div",8)(15,"div",9)(16,"ion-card")(17,"div",10)(18,"div",11)(19,"h2",12),n._uU(20,"Welcome to BluethinkInc"),n.qZA(),n.TgZ(21,"p"),n._uU(22,"Employee Login"),n.qZA()(),n._UZ(23,"ion-input",13)(24,"ion-input",14),n.TgZ(25,"select",15)(26,"option",16),n._uU(27,"Select Location"),n.qZA(),n.TgZ(28,"option",17),n._uU(29,"Login From Office"),n.qZA(),n.TgZ(30,"option",18),n._uU(31,"Login From Home"),n.qZA()(),n.TgZ(32,"div",19)(33,"div",20)(34,"ion-button",21),n._uU(35,"Login"),n.qZA()(),n.TgZ(36,"div",22)(37,"ion-button",21),n._uU(38,"Forgot Password"),n.qZA()()(),n.TgZ(39,"div",23)(40,"ion-button",24),n.NdJ("click",function(){return Z.takePicture()}),n._uU(41,"Take Photo"),n.qZA()(),n._UZ(42,"img",25),n.TgZ(43,"div",23),n.YNc(44,D,2,0,"ion-button",26),n.qZA()()()()()()),2&y&&(n.xp6(42),n.Q6J("src",null==Z.selectedImage?null:Z.selectedImage.webPath,n.LSH),n.xp6(2),n.Q6J("ngIf",Z.selectedImage))},dependencies:[l.O5,C.YN,C.Kr,f.YG,f.Sm,f.PM,f.wI,f.W2,f.jY,f.Gu,f.gu,f.pK,f.fG,f.Nd,f.wd,f.sr,f.j9],styles:["p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{font-family:Titillium Web,sans-serif}.client-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:22px;color:#000;font-weight:600;line-height:23px;margin:0;text-align:center;padding-bottom:8px;padding-top:15px}.contact-main-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;color:#000;line-height:24px;text-align:center;margin:0}.contact-inner[_ngcontent-%COMP%]   ion-input.custom[_ngcontent-%COMP%]{--background: #eee;--color: #000;--placeholder-color: #000;--placeholder-opacity: .8;--padding-bottom: 10px;--padding-end: 10px;--padding-start: 10px;--padding-top: 10px;width:100%;height:50px;outline:none;background:#fff;border-bottom:solid 3px transparent;box-sizing:border-box;transition:all .2s ease;margin:10px 0;border:1px solid #ccc}select.clent-select[_ngcontent-%COMP%]{--background: #eee;--color: #000;--placeholder-color: #000;--placeholder-opacity: .8;--padding-bottom: 10px;--padding-end: 10px;--padding-start: 10px;--padding-top: 10px;width:100%;height:50px;outline:none;background:#fff;border-bottom:solid 3px transparent;box-sizing:border-box;transition:all .2s ease;margin:0 0 10px;border:1px solid #ccc;padding-left:5px}.contact-inner.ion-padding[_ngcontent-%COMP%]{background-color:#f4f5f8;padding:12px}.client-loginbtn-sec[_ngcontent-%COMP%]{display:flex;gap:15px;justify-content:center;margin-top:20px;padding-bottom:15px}.clent-login-wrraper[_ngcontent-%COMP%]{background-image:url(https://bluethinkinc.com/wp-content/uploads/2023/app/emp_1.JPG);background-repeat:no-repeat;background-size:cover;background-position:center;padding-bottom:50px;padding-top:76px;height:100vh}.client-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;margin:0;font-size:18px;color:#085694;font-weight:600;padding-bottom:12px}"]}),c})()}];let S=(()=>{class c{}return c.\u0275fac=function(y){return new(y||c)},c.\u0275mod=n.oAB({type:c}),c.\u0275inj=n.cJS({imports:[b.Bz.forChild(O),b.Bz]}),c})(),N=(()=>{class c{}return c.\u0275fac=function(y){return new(y||c)},c.\u0275mod=n.oAB({type:c}),c.\u0275inj=n.cJS({imports:[l.ez,C.u5,f.Pc,S]}),c})()}}]);