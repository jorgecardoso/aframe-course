---
title: Basics 2
previous: 1-basics-1
previoustitle: Basics 1 - Primitives
next: 2-textures
nexttitle: Textures
---


# Basics 2 - Lights, Text

## Lights

:::example 01-basics-06-lights


There are various kinds of lights. In the example, you can see three types: ambient, point, and directional lights. 

Note that the `intensity` attribute on all of them is set to zero (light is turned off), except on the point light. Try setting the intensity to 1 to see the effect of each type of light.

Also, it is good at this point to introduce the A-Frame inspector to manipulate the lights interactively.

Open the example in a new tab and then press `<ctrl> + <alt> + i` (or `<cmd> + <alt> + i`).

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


Go to: <a href="https://aframe-usj-exercises.glitch.me/basics-2.html" target="_blank">https://aframe-usj-exercises.glitch.me/basics-2.html</a>

## References

* Lights
  * `<a-light>`: https://aframe.io/docs/0.8.0/primitives/a-light.html
* Text
  * `<a-text>`: https://aframe.io/docs/0.8.0/primitives/a-text.html
* Using the A-Frame Inspector
  * https://aframe.io/docs/0.8.0/introduction/visual-inspector-and-dev-tools.html