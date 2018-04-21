---
title: Basics 2
---

<a href="index.html">Home</a> | <a href="1-basics-1.html">Previous: Basics 1</a> | <a href="2-textures.html">Next: Textures</a> 

--------

# Basics 2

## Lights

:::example 01-basics-06-lights

There are various kinds of lights. In the example, you can see three types: ambient, point, and directional lights. 

Note that the `intensity` attribute on all of them is set to zero (light is turned off). Try setting the intensity to 1 to see the effect of each type of light.

Also, it is good at this point to introduce the A-Frame inspector to manipulate the lights interactively.

Open the example in a new tab and then press `<ctrl> + <alt> + i`.

<a href="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Fa-frame-inspector.png?1523376452697" target="_blank">
<img src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Fa-frame-inspector.png?1523376452697" width="600"></a>

After you adjusted the light, you can copy the values of the attributes back to your code.

1. Use the inspector to change the directional light so that it illuminates objects from the right side
 
## Text 
:::example 01-basics-07-text

Text can be added with the `<a-text>` primitive:

```html
<a-text position="0 2 -2" value="Hello, A-Frame World!" align="center"></a-text>
```

You specify the text in the `value` attribute and you can position it just like any other primitive.

Color can also be specified just like in any other primitive.

  
## Exercises

2. Based on example 01-basics-07-text
  1. Try adding and positioning another line of text.
  2. Can you rotate it to align it to the side of the cube?
  
--------

<a href="index.html">Home</a> | <a href="1-basics-1.html">Previous: Basics 1</a> | <a href="2-textures.html">Next: Textures</a> 

-----

Copyright &copy; 2018 Jorge C. S. Cardoso jorgecardoso@ieee.org