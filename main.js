(()=>{"use strict";function t(t,e,n){const r=document.createElement(t);return Object.entries(e).forEach((([t,e])=>{if(void 0!==t){if("className"===t&&(r.className=e.join().replace(","," ")),"events"===t){const{type:t,action:n}=e;r.addEventListener(t,n)}"className"!==t&&"events"!==t&&r.setAttribute(t,e)}})),n?("string"==typeof n?r.innerText=n:r.append(...n),r):r}function e(e){return t("h1",{className:["title"]},e)}function n(e){const n=t("article",{className:["content"]},null);return e?(n.append(...e),n):n}function r(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var o="function"==typeof Symbol&&Symbol.observable||"@@observable",i=function(){return Math.random().toString(36).substring(7).split("").join(".")},c={INIT:"@@redux/INIT"+i(),REPLACE:"@@redux/REPLACE"+i(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+i()}};function u(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}const a=function t(e,n,i){var a;if("function"==typeof n&&"function"==typeof i||"function"==typeof i&&"function"==typeof arguments[3])throw new Error(r(0));if("function"==typeof n&&void 0===i&&(i=n,n=void 0),void 0!==i){if("function"!=typeof i)throw new Error(r(1));return i(t)(e,n)}if("function"!=typeof e)throw new Error(r(2));var s=e,l=n,f=[],p=f,d=!1;function h(){p===f&&(p=f.slice())}function m(){if(d)throw new Error(r(3));return l}function w(t){if("function"!=typeof t)throw new Error(r(4));if(d)throw new Error(r(5));var e=!0;return h(),p.push(t),function(){if(e){if(d)throw new Error(r(6));e=!1,h();var n=p.indexOf(t);p.splice(n,1),f=null}}}function v(t){if(!u(t))throw new Error(r(7));if(void 0===t.type)throw new Error(r(8));if(d)throw new Error(r(9));try{d=!0,l=s(l,t)}finally{d=!1}for(var e=f=p,n=0;n<e.length;n++)(0,e[n])();return t}function y(t){if("function"!=typeof t)throw new Error(r(10));s=t,v({type:c.REPLACE})}function b(){var t,e=w;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new Error(r(11));function n(){t.next&&t.next(m())}return n(),{unsubscribe:e(n)}}})[o]=function(){return this},t}return v({type:c.INIT}),(a={dispatch:v,subscribe:w,getState:m,replaceReducer:y})[o]=b,a}(((t="",e)=>{switch(e.type){case"calculate":return e.data;case"reset":return"";default:return t}}));function s({onclick:e,value:n}){return t("button",{className:["button"],events:{type:"click",action:e}},n)}function l(e){return t("div",{className:["table__items"]},e)}function f(e,n,r){return t("p",{className:["result"]},`Total: 총 ${r}일 간 ${e}시간 ${n}분`)}function p(){const e=a.getState(),{records:n,totalHour:r,totalMin:o,count:i}=function(t){let e=0,n=0,r=0;const o=t.split("\n").reduce(((t,o)=>{if(!o)return t.push(["","","","",""]),t;const[i,c,u,a]=o.split(" ");if("결근"===u)return t.push([i,c,"결근","결근","결근"]),t;const[s,l]=function(t,e){const[n,r]=t.split(":").map(Number),[o,i]=e.split(":").map(Number);let c=o-n,u=i-r;return i-r<0&&(u=60+u,c-=1),[c,u]}(u,a);return e+=s,n+=l,r+=1,t.push([i,c,u,a,`${s}시간 ${l}분`]),t}),[]);return e+=Math.floor(n/60),n%=60,{records:o,totalHour:e,totalMin:n,count:r}}(e),c=t("div",{className:["table"]},[(u=["날짜","요일","출근 시간","퇴근 시간","시간"],t("div",{className:["table__head"]},u.map((t=>l(t))))),...n.map((e=>function(e){return t("div",{className:["table__row"]},e.map((t=>l(t))))}(e))),f(r,o,i)]);var u;return c}function d(t){return e=>function(t){window.history.pushState("",document.title,t),h()}(t)}function h(){!function(r){const o=document.getElementById("root");if(o)switch(r){case"":o.innerHTML="";const r=t("div",{className:["container"]},[e("근무 시간 입력"),n([("예시) 6/7 화 11:00 18:00",t("textarea",{className:["textarea"],placeholder:"예시) 6/7 화 11:00 18:00",events:{type:"input",action:t=>{const e=t.target.value;a.dispatch({type:"calculate",data:e})}}},null)),s({onclick:d("/result"),value:"총 근무 시간 확인"})])]);o.append(r);break;case"result":o.innerHTML="";const i=t("div",{className:["container"]},[e("입력 결과 출력"),n([p()]),s({onclick:d("/"),value:"다시 입력하기"})]);o.append(i);break;default:console.log("error")}}(window.location.pathname.split("/")[1])}window.location.hash&&window.history.replaceState(null,""," "),h(),document.getElementById("root")})();