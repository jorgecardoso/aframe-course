---
title: Basics 1
---

<a href="index.html">Home</a> | <a href="0-intro-glitch.html">Previous: Intro</a> | <a href="1-basics-2.html">Next: Basics 2</a> 

--------

# Basics 1
## Structure


## Primitives - Position, Size, Color

### Position

:::example 01-basics-01-position https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2F01-basics-01-position.png?1523993011680

A-Frame provides various "primitives": simple building blocks for 3D content. In the "01-basics.html" example you will see one such primitives -- a "box":

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

In example 01-basics-02, notice how our box is now taller:

```html
<a-box position="0 2 -2" width="1" height="3" depth="1" rotation="0 0 0" color="red" ></a-box>
```

1. In example 01-basics-02, add a second box that is wider than taller.

### Rotation

:::example 01-basics-03-rotation

The `rotation` attribute specifies three values for the rotation around each of the x, y, z axes. In the example, notice how the box is rotated 45º in the x-axis - towards you.

1. Experiment with different rotations in example 01-basics-03-rotation. Try adding another box and rotate it in the z-axis.

### Color

:::example 01-basics-04-color

The `color` attribute allows you to set the color of the primitive. You can use color names such as "red", or "green" for colors that have a pre-defined name. For general colors, you can use the hex format such as `#ff8533` (you can use any color picker to find out the hex values, e.g., https://www.w3schools.com/colors/colors_picker.asp )

1. In example 01-basics-03, change the color of the green box to a color chosen from https://www.w3schools.com/colors/colors_picker.asp 

## Different Primitives 

:::example 01-basics-05-primitives

In this example, you can see different types of primitives for creating different objects.

Notice how primitives such as the cyllinder and sphere have a `radius` attribute:

```html

<a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E" shadow></a-sphere>

```

Also note that you can add a `shadow` attribute to make an object cast a shadow.

1. Change the color of the sky (`<a-sky>` primitive)
2. Enlarge the floor (`<a-plane>` primitive)
3. Add a second cylinder, and rotate it

## Exercises

1. Create a scene with 9 colored boxes (1m x 1m x 1m) as in the following example: 
<iframe width="600" height="400" src="https://rhinestone-attack.glitch.me/exercises/01-basics-01.html"></iframe>
1. Create a scene with 4 boxes to represent walls, and a sphere as in the following example: 
<iframe width="600" height="400" src="https://rhinestone-attack.glitch.me/exercises/01-basics-02.html"></iframe>
Add a light blue sky.

--------

<a href="index.html">Home</a>

<a href="0-intro-glitch.html">Previous: Intro</a> | <a href="1-basics-2.html">Next: Basics 2</a> 

-----

Copyright &copy; 2018 Jorge C. S. Cardoso jorgecardoso@ieee.org