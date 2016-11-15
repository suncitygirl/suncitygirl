function ScrollManager(){function t(t){t.preventDefault(),t.target.hasAttribute("data-scroll")&&o(t.target)}function o(t){var o=t.getAttribute("data-scroll"),e=document.getElementsByClassName(o)[0];e.scrollIntoView({behavior:"smooth"})}console.log(arguments),[].forEach.call(arguments,function(o){o.addEventListener("click",t)})}!function(t,o,e){"use strict";function l(){function l(t,o){this.scrollLeft=t,this.scrollTop=o}function r(t){return.5*(1-Math.cos(Math.PI*t))}function n(t){if("object"!=typeof t||null===t||t.behavior===e||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior not valid")}function c(e){var l,r,n;do e=e.parentNode,l=e===o.body,r=e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth,n="visible"===t.getComputedStyle(e,null).overflow;while(!l&&(!r||n));return l=r=n=null,e}function a(o){o.frame=t.requestAnimationFrame(a.bind(t,o));var e,l,n,c=m(),i=(c-o.startTime)/f;if(i=i>1?1:i,e=r(i),l=o.startX+(o.x-o.startX)*e,n=o.startY+(o.y-o.startY)*e,o.method.call(o.scrollable,l,n),l===o.x&&n===o.y)return void t.cancelAnimationFrame(o.frame)}function i(e,r,n){var c,i,s,f,d,p=m();e===o.body?(c=t,i=t.scrollX||t.pageXOffset,s=t.scrollY||t.pageYOffset,f=u.scroll):(c=e,i=e.scrollLeft,s=e.scrollTop,f=l),d&&t.cancelAnimationFrame(d),a({scrollable:c,method:f,startTime:p,startX:i,startY:s,x:r,y:n,frame:d})}if(!("scrollBehavior"in o.documentElement.style)){var s=t.HTMLElement||t.Element,f=468,u={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,scrollIntoView:s.prototype.scrollIntoView},m=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now;t.scroll=t.scrollTo=function(){return n(arguments[0])?void u.scroll.call(t,arguments[0].left||arguments[0],arguments[0].top||arguments[1]):void i.call(t,o.body,~~arguments[0].left,~~arguments[0].top)},t.scrollBy=function(){return n(arguments[0])?void u.scrollBy.call(t,arguments[0].left||arguments[0],arguments[0].top||arguments[1]):void i.call(t,o.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset))},s.prototype.scrollIntoView=function(){if(n(arguments[0]))return void u.scrollIntoView.call(this,arguments[0]||!0);var e=c(this),l=e.getBoundingClientRect(),r=this.getBoundingClientRect();e!==o.body?(i.call(this,e,e.scrollLeft+r.left-l.left,e.scrollTop+r.top-l.top),t.scrollBy({left:l.left,top:l.top,behavior:"smooth"})):t.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}}}"object"==typeof exports?module.exports={polyfill:l}:l()}(window,document);var menu=document.getElementsByClassName("main-nav__list")[0],promo=document.getElementsByClassName("promo")[0];document.addEventListener("DOMContentLoaded",function(){new ScrollManager(menu,promo)});