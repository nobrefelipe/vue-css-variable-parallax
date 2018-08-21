function directive(el, binding, vnode) {

  const MOBILE_OFF = (binding.arg == "mobileoff") ? true : false;
  const WINDOW_WIDTH = window.innerWidth;

  // DISABLE ON MOBILE IF ARG `mobileoff` IS SET
  if(WINDOW_WIDTH < 768 && MOBILE_OFF){

    // do something
    return false;

  }else{

    window.requestAnimationFrame( setScrollParallax );

  }

  function setScrollParallax() {

    // SOME SETTINGS HERE
    const FROM_CENTER = binding.modifiers.center;
    // if center modifier is true, we want to start the magic from the middle of the screen
    const WINDOW_POS = FROM_CENTER ? (window.innerHeight / 2) : window.innerHeight;

    // document scrolled amount - parallax container offset from top + window height
    // this make sure to update --scroll-amount only when the elements are in the viewport
    var scroll = document.documentElement.scrollTop - el.offsetTop + WINDOW_POS ;

    // Make sure we dont have negative values
    if(scroll < 0) scroll = 0;

    // set the "--scroll-amount" for each parallax container
    el.style.setProperty("--scroll-amount", scroll);

    // global "--scroll-amount" attached to the body
    //document.body.style.setProperty("--scroll-amount", document.documentElement.scrollTop );

    window.requestAnimationFrame( setScrollParallax );

  }

}

function install (Vue) {
  Vue.directive('css-parallax', {

    bind: directive

  });
}

export { directive, install }

export default install
