!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s="./src/index.js")}({"./node_modules/lodash/_baseSlice.js":function(e,r){e.exports=function(e,r,t){var n=-1,o=e.length;r<0&&(r=o<-r?0:o+r),(t=o<t?o:t)<0&&(t+=o),o=t<r?0:t-r>>>0,r>>>=0;for(var u=Array(o);++n<o;)u[n]=e[n+r];return u}},"./node_modules/lodash/head.js":function(e,r){e.exports=function(e){return e&&e.length?e[0]:void 0}},"./node_modules/lodash/reverse.js":function(e,r){var t=Array.prototype.reverse;e.exports=function(e){return null==e?e:t.call(e)}},"./node_modules/lodash/tail.js":function(e,r,t){var n=t("./node_modules/lodash/_baseSlice.js");e.exports=function(e){var r=null==e?0:e.length;return r?n(e,1,r):[]}},"./node_modules/uuid/lib/bytesToUuid.js":function(e,r){for(var t=[],n=0;n<256;++n)t[n]=(n+256).toString(16).substr(1);e.exports=function(e,r){var n=r||0,o=t;return[o[e[n++]],o[e[n++]],o[e[n++]],o[e[n++]],"-",o[e[n++]],o[e[n++]],"-",o[e[n++]],o[e[n++]],"-",o[e[n++]],o[e[n++]],"-",o[e[n++]],o[e[n++]],o[e[n++]],o[e[n++]],o[e[n++]],o[e[n++]]].join("")}},"./node_modules/uuid/lib/rng-browser.js":function(e,r){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var n=new Uint8Array(16);e.exports=function(){return t(n),n}}else{var o=new Array(16);e.exports=function(){for(var e,r=0;r<16;r++)0==(3&r)&&(e=4294967296*Math.random()),o[r]=e>>>((3&r)<<3)&255;return o}}},"./node_modules/uuid/v4.js":function(e,r,t){var n=t("./node_modules/uuid/lib/rng-browser.js"),o=t("./node_modules/uuid/lib/bytesToUuid.js");e.exports=function(e,r,t){var u=r&&t||0;"string"==typeof e&&(r="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||n)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,r)for(var c=0;c<16;++c)r[u+c]=i[c];return r||o(i)}},"./src/index.js":function(e,r,t){"use strict";function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}t.r(r);var u=function(e,r,t){return e.map((function(e){return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(t,!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(t).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},e,{lessonsPerMonth:Math.round(r*e.percentage/100/t)})})).filter((function(e){return 0<e.lessonsPerMonth}))},i=t("./node_modules/uuid/v4.js"),c=t.n(i);function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e){return function(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var l=function(e){return e.sort((function(e,r){return e.percentage>r.percentage?-1:1})).reduce((function(e,r){var t=s(new Array(r.lessonsPerMonth)).map((function(){return{id:r.id,percentage:r.percentage,title:r.title,type:r.type}}));return[].concat(s(e),[t])}),[]).map((function(e){return e.map((function(e){return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(t,!0).forEach((function(r){f(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(t).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},e,{id:c()()})}))}))};var p=function(e){return function(e){return function(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(new Array(e)).map((function(e,r){return{id:r+1,subjects:[]}}))},b=t("./node_modules/lodash/head.js"),d=t.n(b),y=t("./node_modules/lodash/tail.js"),O=t.n(y),j=t("./node_modules/lodash/reverse.js"),g=t.n(j);function v(e){return function(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var h=function e(r,t,n){if(!t.length)return r;var o=function(e,r,t){var n=e.length;return function e(r,o,u){if(!u.length)return r;if(r.every((function(e){return e.subjects.length===t})))return r;var i=o===n-1?0:o+1,c=r[o];if(c.subjects.length===t)return e(r,i,u);var a=d()(u);return e(r.map((function(e){return e.id!==c.id?e:function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(t,!0).forEach((function(r){_(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(t).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},e,{subjects:[].concat(v(e.subjects),[a])})})),i,O()(u))}(e,0,r)}(r,d()(t),n);return e(g()(o),O()(t),n)};function P(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function w(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}r.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],r=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?P(t,!0).forEach((function(r){w(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(t).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},{SUBJECTS_PERCENTAGE_LIMIT:100,EDUCATION_DAYS_PER_MONTH:12,EDUCATION_TIME_PER_MONTH_IN_HOURS:48,LESSON_DURATION_IN_MINUTES:60,LESSONS_PER_DAY:4},{},1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}),t=60*r.EDUCATION_TIME_PER_MONTH_IN_HOURS;if(e.reduce((function(e,r){return e+r.percentage}),0)!==r.SUBJECTS_PERCENTAGE_LIMIT)throw new Error("Subjects percentage sum can not be greater then ".concat(r.SUBJECTS_PERCENTAGE_LIMIT));var n=u(e,t,r.LESSON_DURATION_IN_MINUTES),o=l(n),i=p(r.EDUCATION_DAYS_PER_MONTH);return h(i,o,r.LESSONS_PER_DAY)}}});