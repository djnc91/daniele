const __vite__fileDeps=["_app/immutable/nodes/0.DJk4LxJr.js","_app/immutable/chunks/scheduler.eJV6ods6.js","_app/immutable/chunks/index.CUoEoFqd.js","_app/immutable/nodes/1.Bz6oBPcF.js","_app/immutable/chunks/entry.BgUSC3RO.js","_app/immutable/nodes/2.CbbjY-F4.js","_app/immutable/assets/2.BX-zsBti.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{s as U,d as V,o as j,e as L,t as B}from"../chunks/scheduler.eJV6ods6.js";import{S as W,i as z,s as F,m as h,h as G,j as b,a as p,n as P,t as g,g as w,e as H,c as J,d as K,o as R,p as m,b as Q,f as X,l as Y,q as S,r as k,u as v,v as q,w as E,x as y}from"../chunks/index.CUoEoFqd.js";const Z="modulepreload",M=function(a){return"/daniele/"+a},C={},A=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),t=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));s=Promise.all(n.map(i=>{if(i=M(i),i in C)return;C[i]=!0;const l=i.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${u}`))return;const o=document.createElement("link");if(o.rel=l?"stylesheet":Z,l||(o.as="script",o.crossOrigin=""),o.href=i,t&&o.setAttribute("nonce",t),document.head.appendChild(o),l)return new Promise((_,d)=>{o.addEventListener("load",_),o.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})}))}return s.then(()=>e()).catch(f=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=f,window.dispatchEvent(t),!t.defaultPrevented)throw f})},re={};function $(a){let e,n,r;var s=a[1][0];function f(t,i){return{props:{data:t[3],form:t[2]}}}return s&&(e=k(s,f(a)),a[12](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&q(e.$$.fragment,t),n=h()},m(t,i){e&&E(e,t,i),b(t,n,i),r=!0},p(t,i){if(i&2&&s!==(s=t[1][0])){if(e){S();const l=e;p(l.$$.fragment,1,0,()=>{y(l,1)}),P()}s?(e=k(s,f(t)),t[12](e),v(e.$$.fragment),g(e.$$.fragment,1),E(e,n.parentNode,n)):e=null}else if(s){const l={};i&8&&(l.data=t[3]),i&4&&(l.form=t[2]),e.$set(l)}},i(t){r||(e&&g(e.$$.fragment,t),r=!0)},o(t){e&&p(e.$$.fragment,t),r=!1},d(t){t&&w(n),a[12](null),e&&y(e,t)}}}function x(a){let e,n,r;var s=a[1][0];function f(t,i){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return s&&(e=k(s,f(a)),a[11](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&q(e.$$.fragment,t),n=h()},m(t,i){e&&E(e,t,i),b(t,n,i),r=!0},p(t,i){if(i&2&&s!==(s=t[1][0])){if(e){S();const l=e;p(l.$$.fragment,1,0,()=>{y(l,1)}),P()}s?(e=k(s,f(t)),t[11](e),v(e.$$.fragment),g(e.$$.fragment,1),E(e,n.parentNode,n)):e=null}else if(s){const l={};i&8&&(l.data=t[3]),i&8215&&(l.$$scope={dirty:i,ctx:t}),e.$set(l)}},i(t){r||(e&&g(e.$$.fragment,t),r=!0)},o(t){e&&p(e.$$.fragment,t),r=!1},d(t){t&&w(n),a[11](null),e&&y(e,t)}}}function ee(a){let e,n,r;var s=a[1][1];function f(t,i){return{props:{data:t[4],form:t[2]}}}return s&&(e=k(s,f(a)),a[10](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&q(e.$$.fragment,t),n=h()},m(t,i){e&&E(e,t,i),b(t,n,i),r=!0},p(t,i){if(i&2&&s!==(s=t[1][1])){if(e){S();const l=e;p(l.$$.fragment,1,0,()=>{y(l,1)}),P()}s?(e=k(s,f(t)),t[10](e),v(e.$$.fragment),g(e.$$.fragment,1),E(e,n.parentNode,n)):e=null}else if(s){const l={};i&16&&(l.data=t[4]),i&4&&(l.form=t[2]),e.$set(l)}},i(t){r||(e&&g(e.$$.fragment,t),r=!0)},o(t){e&&p(e.$$.fragment,t),r=!1},d(t){t&&w(n),a[10](null),e&&y(e,t)}}}function D(a){let e,n=a[6]&&I(a);return{c(){e=H("div"),n&&n.c(),this.h()},l(r){e=J(r,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=K(e);n&&n.l(s),s.forEach(w),this.h()},h(){R(e,"id","svelte-announcer"),R(e,"aria-live","assertive"),R(e,"aria-atomic","true"),m(e,"position","absolute"),m(e,"left","0"),m(e,"top","0"),m(e,"clip","rect(0 0 0 0)"),m(e,"clip-path","inset(50%)"),m(e,"overflow","hidden"),m(e,"white-space","nowrap"),m(e,"width","1px"),m(e,"height","1px")},m(r,s){b(r,e,s),n&&n.m(e,null)},p(r,s){r[6]?n?n.p(r,s):(n=I(r),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(r){r&&w(e),n&&n.d()}}}function I(a){let e;return{c(){e=Q(a[7])},l(n){e=X(n,a[7])},m(n,r){b(n,e,r)},p(n,r){r&128&&Y(e,n[7])},d(n){n&&w(e)}}}function te(a){let e,n,r,s,f;const t=[x,$],i=[];function l(o,_){return o[1][1]?0:1}e=l(a),n=i[e]=t[e](a);let u=a[5]&&D(a);return{c(){n.c(),r=F(),u&&u.c(),s=h()},l(o){n.l(o),r=G(o),u&&u.l(o),s=h()},m(o,_){i[e].m(o,_),b(o,r,_),u&&u.m(o,_),b(o,s,_),f=!0},p(o,[_]){let d=e;e=l(o),e===d?i[e].p(o,_):(S(),p(i[d],1,1,()=>{i[d]=null}),P(),n=i[e],n?n.p(o,_):(n=i[e]=t[e](o),n.c()),g(n,1),n.m(r.parentNode,r)),o[5]?u?u.p(o,_):(u=D(o),u.c(),u.m(s.parentNode,s)):u&&(u.d(1),u=null)},i(o){f||(g(n),f=!0)},o(o){p(n),f=!1},d(o){o&&(w(r),w(s)),i[e].d(o),u&&u.d(o)}}}function ne(a,e,n){let{stores:r}=e,{page:s}=e,{constructors:f}=e,{components:t=[]}=e,{form:i}=e,{data_0:l=null}=e,{data_1:u=null}=e;V(r.page.notify);let o=!1,_=!1,d=null;j(()=>{const c=r.page.subscribe(()=>{o&&(n(6,_=!0),B().then(()=>{n(7,d=document.title||"untitled page")}))});return n(5,o=!0),c});function N(c){L[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function O(c){L[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function T(c){L[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return a.$$set=c=>{"stores"in c&&n(8,r=c.stores),"page"in c&&n(9,s=c.page),"constructors"in c&&n(1,f=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,i=c.form),"data_0"in c&&n(3,l=c.data_0),"data_1"in c&&n(4,u=c.data_1)},a.$$.update=()=>{a.$$.dirty&768&&r.page.set(s)},[t,f,i,l,u,o,_,d,r,s,N,O,T]}class oe extends W{constructor(e){super(),z(this,e,ne,te,U,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>A(()=>import("../nodes/0.DJk4LxJr.js"),__vite__mapDeps([0,1,2])),()=>A(()=>import("../nodes/1.Bz6oBPcF.js"),__vite__mapDeps([3,1,2,4])),()=>A(()=>import("../nodes/2.CbbjY-F4.js"),__vite__mapDeps([5,1,2,6]))],le=[],fe={"/":[2]},ce={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{fe as dictionary,ce as hooks,re as matchers,ae as nodes,oe as root,le as server_loads};