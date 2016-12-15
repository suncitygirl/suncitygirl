"use strict";function ScrollManager(){function e(e){if(e.preventDefault(),e.target.hasAttribute("data-scroll"))t(e.target);else{if(!this.hasAttribute("data-scroll"))return;t(this)}}function t(e){var t=e.getAttribute("data-scroll"),l=document.getElementsByClassName(t)[0];l.scrollIntoView({behavior:"smooth"})}console.log(arguments),[].forEach.call(arguments,function(t){t.addEventListener("click",e)})}!function(){function e(e){"none"==getComputedStyle(e).display?e.style.display="block":e.style.display="none"}var t=25,l=4,n=document.getElementsByClassName("carousel")[0],o=n.querySelector("ul"),a=n.querySelectorAll("li"),i=n.getElementsByClassName("carousel__arrow--next")[0],s=n.getElementsByClassName("carousel__arrow--prev")[0],r=0;s.onclick=function(){document.documentElement.clientWidth>599?(e(s),e(i),r=Math.min(r+t*l,0),o.style.marginLeft=r+"vw"):(r=Math.min(r+t*l,0),o.style.marginLeft=r+"vw",0==r?e(s):r==-200&&e(i))},i.onclick=function(){document.documentElement.clientWidth>599?(e(s),e(i),r=Math.max(r-t*l,-t*(a.length-l)),o.style.marginLeft=r+"vw"):(t=50,l=2,r=Math.max(r-t*l,-t*(a.length-l)),o.style.marginLeft=r+"vw",r==-300?e(i):r==-100&&e(s))},e(s)}(),function(){function e(){t=new ymaps.Map("map",{center:[59.9363,30.321132],zoom:[16],controls:[]}),t.behaviors.disable("scrollZoom"),t.controls.add("zoomControl")}ymaps.ready(e);var t}(),function(e,t,l){function n(){function n(e,t){this.scrollLeft=e,this.scrollTop=t}function o(e){return.5*(1-Math.cos(Math.PI*e))}function a(e){if("object"!=typeof e||null===e||e.behavior===l||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior not valid")}function i(l){var n,o,a;do l=l.parentNode,n=l===t.body,o=l.clientHeight<l.scrollHeight||l.clientWidth<l.scrollWidth,a="visible"===e.getComputedStyle(l,null).overflow;while(!n&&(!o||a));return n=o=a=null,l}function s(t){t.frame=e.requestAnimationFrame(s.bind(e,t));var l,n,a,i=f(),r=(i-t.startTime)/m;if(r=r>1?1:r,l=o(r),n=t.startX+(t.x-t.startX)*l,a=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,n,a),n===t.x&&a===t.y)return void e.cancelAnimationFrame(t.frame)}function r(l,o,a){var i,r,c,m,d,g=f();l===t.body?(i=e,r=e.scrollX||e.pageXOffset,c=e.scrollY||e.pageYOffset,m=u.scroll):(i=l,r=l.scrollLeft,c=l.scrollTop,m=n),d&&e.cancelAnimationFrame(d),s({scrollable:i,method:m,startTime:g,startX:r,startY:c,x:o,y:a,frame:d})}if(!("scrollBehavior"in t.documentElement.style)){var c=e.HTMLElement||e.Element,m=468,u={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,scrollIntoView:c.prototype.scrollIntoView},f=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now;e.scroll=e.scrollTo=function(){return a(arguments[0])?void u.scroll.call(e,arguments[0].left||arguments[0],arguments[0].top||arguments[1]):void r.call(e,t.body,~~arguments[0].left,~~arguments[0].top)},e.scrollBy=function(){return a(arguments[0])?void u.scrollBy.call(e,arguments[0].left||arguments[0],arguments[0].top||arguments[1]):void r.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset))},c.prototype.scrollIntoView=function(){if(a(arguments[0]))return void u.scrollIntoView.call(this,arguments[0]||!0);var l=i(this),n=l.getBoundingClientRect(),o=this.getBoundingClientRect();l!==t.body?(r.call(this,l,l.scrollLeft+o.left-n.left,l.scrollTop+o.top-n.top),e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}}}"object"==typeof exports?module.exports={polyfill:n}:n()}(window,document);var menu=document.getElementsByClassName("main-nav__list")[0],upBtn=document.getElementsByClassName("up-btn")[0];document.addEventListener("DOMContentLoaded",function(){new ScrollManager(menu,upBtn)}),function(){function e(e){var t=e.target;if(t.classList.contains("main-header__lang-item")){if(t.classList.contains("main-header__lang-item--active"))return;t.classList.toggle("main-header__lang-item--active"),[].forEach.call(l,function(e){console.log(e),e.classList.contains("main-header__lang-item--active")&&e!=t&&e.classList.toggle("main-header__lang-item--active")})}}var t=document.getElementsByClassName("main-header__lang-list")[0],l=t.getElementsByClassName("main-header__lang-item");t.addEventListener("click",e)}(),function(){function e(e){l.classList.toggle("main-nav__list--visible"),t.classList.toggle("page__main-header--menu-open"),n.classList.toggle("main-nav__open-icon--menu-open")}var t=document.getElementsByClassName("page__main-header")[0],l=t.getElementsByClassName("main-nav__list")[0],n=t.getElementsByClassName("main-nav__open-icon")[0];n.addEventListener("click",e)}();