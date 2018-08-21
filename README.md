# Vue CSS Variables Parallax

Allow to create powerfull parallax effects by using CSS Variables when the element gets to the viewport, a `--scroll-amount` css variable will be attached to it and will be updated by the scrolled amount.

## Install

Install using NPM/Yarn.

```sh
npm install --save vue-custom-properties-parallax

# Using Yarn
yarn add vue-custom-properties-parallax
```
Import this into your scripts.

```js
import CustomPropertiesParallax from 'vue-custom-properties-parallax'

// Using CommonJS
const CustomPropertiesParallax = require('vue-custom-properties-parallax')

Vue.use(CustomPropertiesParallax)
```

It also exports directive to use locally or in a mixin.

```vue
<script>
  import { directive as customPropertiesParallaxDirective } from 'vue-custom-properties-parallax'

  export default {
    directives: {
      'custom-properties-parallax': customPropertiesParallaxDirective
    }
  }
</script>
```

## Usage

In the CSS we have a `--multiplier` variable, which will manager the speed and direction.

```vue
<template>
  <div v-custom-properties-parallax class="parallax">
    <img src="/parallax-image.png" />
  </div>
</template>

<style>
  .parallax {

    /*
     * All logic is handled by CSS.
     */
    img {
      --multiplier: 0.1;
      --opacity: calc(1 - calc(var(--scroll-amount) * 0.002));
      --translate: calc(var(--scroll-amount) * var(--multiplier) * 1px);
      opacity: var(--opacity);
      transform: translateY(var(--translate));
    }
  }
</style>
```

## Custom Settings

###### Start the parallax only when the elements get to the center of the screen by passing `center` as a modifier

`<my-element v-custom-properties-parallax.center />`


###### You can disable `--scroll-amount` on mobile by passing `mobileOff` as an argument if you don't want to perform the effect on small devices
 
 `<my-element v-custom-properties-parallax:mobileOff.center />`

...


example: https://codepen.io/nobrefelipe/pen/aqYyOy

inspired by: https://daverupert.com/2018/02/cheapass-parallax/
