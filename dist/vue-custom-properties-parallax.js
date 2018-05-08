(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.vueCustomPropertiesParallax = {})));
}(this, (function (exports) { 'use strict';

function directive(el, binding, vnode) {

  function setScrollParallax() {

    //[!quick fix]: lets disable on mobile
    var ww = window.innerWidth;
    if (ww < 768) { return false; }

    // document scrolled amount - parallax container offset from top + window height
    // this make sure to update --scroll-amount only when the elements are in the viewport
    var scroll = document.documentElement.scrollTop - el.offsetTop + window.innerHeight;

    // set the "--scroll-amount" for each parallax container
    el.style.setProperty("--scroll-amount", scroll);

    // global "--scroll-amount" attached to the body
    document.body.style.setProperty("--scroll-amount", document.documentElement.scrollTop);

    window.requestAnimationFrame(setScrollParallax);
  }

  window.requestAnimationFrame(setScrollParallax);
}

function install(Vue) {
  Vue.directive('css-parallax', {

    bind: directive

  });
}

exports.directive = directive;
exports.install = install;
exports['default'] = install;

Object.defineProperty(exports, '__esModule', { value: true });

})));
