!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let r="X";const o=document.querySelector(".game-status");let u=!0,c=["","","","","","","","",""];function i(){return`Player ${r} turns`}o.innerHTML=i();const l=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function a(){let e=!1;for(let t=0;t<=7;t++){const n=l[t];let r=c[n[0]],o=c[n[1]],u=c[n[2]];if(""!==r&&""!==o&&""!==u&&(r===o&&o===u)){e=!0;break}}return e?(o.innerHTML=`Player ${r} has won the game!`,void(u=!1)):c.includes("")?(r="X"===r?"O":"X",void(o.innerHTML=i())):(o.innerHTML="Game ended with a draw!",void(u=!1))}function d(e){const t=e.target,n=parseInt(t.getAttribute("data-cell-index"));""===c[n]&&u&&(!function(e,t){c[t]=r,e.innerHTML=r}(t,n),a())}document.querySelectorAll(".cell").forEach(e=>e.addEventListener("click",d)),document.querySelector(".game-restart").addEventListener("click",(function(){document.querySelector(".game-status").innerHTML=i(),document.querySelectorAll(".cell").forEach(e=>e.innerHTML=""),location.reload()}))}]);