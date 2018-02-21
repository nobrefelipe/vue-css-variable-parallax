# Vue CSS Variables Parallax

Allow to create powerfull parallax effects by using CSS Variables
When the element gets to the viewport, 
<br>a `--scroll-amount` css variable will be attached to it
and will be updated by the scrolled amount. <br>
In the CSS we have a `--multiplier` variable, which will manager the speed and direction


```
<div v-css-parallax ></div>

img{
  --multiplier: 0.1;
  transform: translateY(calc(var(--scroll-amount) * var(--multiplier) * 1px ));
}
```

example: https://codepen.io/nobrefelipe/pen/aqYyOy

inspired by: https://daverupert.com/2018/02/cheapass-parallax/
