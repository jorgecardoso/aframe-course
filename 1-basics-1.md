---
title: Basics 1
previous: 0-intro-glitch
previoustitle: Intro
next: 1-basics-2
nexttitle: Basics 2 - Lights, Text
---

# Basics 1 - Primitives

## Primitives - Position, Size, Color

### Position

:::example 01-basics-01-position https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2F01-basics-01-position.png?1523993011680

A-Frame provides various "primitives": simple building blocks for 3D content. In example `01-basics-01-position` you will see one such primitives -- a "box":

```html
<a-box position="0 2 -2" width="1" height="1" depth="1" rotation="0 0 0" color="red" ></a-box>
```

Notice that the position attribute is "0 2 -2". This means that the box center is at two meters in front of the user (z: -2) and two meters above the ground (y: 2) 
<img  src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Faxis.png?1523305221866">

1. Try changing the position so that the box is higher in the screen and further away.
2. Add a second box positioned on top of the first.

### Size

:::example 01-basics-02-size


To define the size of a primitive you can use the `width`, `height`, and `depth` attributes to control the length in the x, y, and z axes.

In example `01-basics-02-size`, notice how our box is now taller:

```html
<a-box position="0 2 -2" width="1" height="3" depth="1" rotation="0 0 0" color="red" ></a-box>
```

1. In example `01-basics-02-size`, add a second box that is wider than taller.

### Rotation

:::example 01-basics-03-rotation


The `rotation` attribute specifies three values for the rotation around each of the x, y, z axes. In the example, notice how the box is rotated 45º in the x-axis - towards you.


1. Experiment with different rotations in example `01-basics-03-rotation`. Try adding another box and rotate it in the z-axis.


### Color

:::example 01-basics-04-color


The `color` attribute allows you to set the color of the primitive. You can use color names such as "red", or "green" for colors that have a pre-defined name. For general colors, you can use the hex format such as `#ff8533` (you can use any color picker to find out the hex values, e.g., https://www.w3schools.com/colors/colors_picker.asp )


1. In example `01-basics-04-color`, change the color of the green box to a color chosen from https://www.w3schools.com/colors/colors_picker.asp 


## Different Primitives 

:::example 01-basics-05-primitives


In this example, you can see different types of primitives for creating different objects.

Notice how primitives such as the cylinder and sphere have a `radius` attribute:

```html
<a-sphere position="3 3 -10" radius="0.7" color="#FF4136"></a-sphere>
```

## Exercises

Go to: <a href="https://aframe-usj-exercises.glitch.me/basics-1.html" target="_blank">https://aframe-usj-exercises.glitch.me/basics-1.html</a>

## References

* 2D and 3D shapes
  * `<a-box>`: https://aframe.io/docs/0.8.0/primitives/a-box.html
  * `<a-circle>`: https://aframe.io/docs/0.8.0/primitives/a-circle.html
  * `<a-cone>`: https://aframe.io/docs/0.8.0/primitives/a-cone.html
  * `<a-cylinder>`: https://aframe.io/docs/0.8.0/primitives/a-cylinder.html
  * `<a-dodecahedron>`: https://aframe.io/docs/0.8.0/primitives/a-dodecahedron.html
  * `<a-icosahedron>`: https://aframe.io/docs/0.8.0/primitives/a-icosahedron.html
  * `<a-octahedron>`: https://aframe.io/docs/0.8.0/primitives/a-octahedron.html
  * `<a-plane>`: https://aframe.io/docs/0.8.0/primitives/a-plane.html
  * `<a-ring>`: https://aframe.io/docs/0.8.0/primitives/a-ring.html
  * `<a-sky>`: https://aframe.io/docs/0.8.0/primitives/a-sky.html
  * `<a-sphere>`: https://aframe.io/docs/0.8.0/primitives/a-sphere.html
  * `<a-tetrahedron>`: https://aframe.io/docs/0.8.0/primitives/a-tetrahedron.html
  * `<a-torus-knot>`: https://aframe.io/docs/0.8.0/primitives/a-torus-knot.html
  * `<a-torus>`: https://aframe.io/docs/0.8.0/primitives/a-torus.html  
  * `<a-triangle>`: https://aframe.io/docs/0.8.0/primitives/a-triangle.html