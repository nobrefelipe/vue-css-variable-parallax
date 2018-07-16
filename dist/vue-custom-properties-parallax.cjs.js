'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function directive(el, binding, vnode) {

  function setScrollParallax() {

    // SOME SETTINGS HERE
    var FROM_CENTER = binding.modifiers.center;
    // if center modifier is true, we want to start the magic from the middle of the screen
    var WINDOW_POS = FROM_CENTER ? window.innerHeight / 2 : window.innerHeight;

    //[!quick fix]: lets disable on mobile
    var ww = window.innerWidth;
    if (ww < 768) { return false; }

    // document scrolled amount - parallax container offset from top + window height
    // this make sure to update --scroll-amount only when the elements are in the viewport
    var scroll = document.documentElement.scrollTop - el.offsetTop + WINDOW_POS;

    // Make sure we dont have negative values
    if (scroll < 0) { scroll = 0; }

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
