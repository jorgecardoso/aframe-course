---
title: Primitives and Components
previous: 0-intro-glitch
previoustitle: Intro
next: 1-basics-2
nexttitle: Basics 2 - Lights, Text
---

# Primitives and Components

## Primitives

A-Frame provides various _primitives_: simple building blocks for 3D content. A primitive is typically a simple 3D shape which can be created by inserting a specific HTML element inside the scene. In example :::ref 0100-primitives-01-position you will see various such primitives -- a box, a sphere, a cylinder, a plane, and a sky:

```html
<a-box
  id="box1"
  position="0 2 -2"
  width="1"
  height="1"
  depth="1"
  rotation="0 0 0"
  color="red"
></a-box>

<a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>

<a-cylinder
  position="1 0.75 -3"
  radius="0.5"
  height="1.5"
  color="#FFC65D"
></a-cylinder>

<a-plane
  position="0 0 -4"
  rotation="-90 0 0"
  width="4"
  height="4"
  color="#7BC8A4"
></a-plane>

<a-sky color="#ECECEC"></a-sky>
```

Each of these HTML elements has a pre-defined 3D shape associated with it. You will notice that all these HTML elements have attributes. In A-Frame, these attributes correspond to _components_ and they allow us to set different properties for the primitives.

## Position

The position component allows us to set the position of the 3D object in 3D space.

:::example 0100-primitives-01-position

Notice that the position value for the box is "0 2 -2". This means that the box's center is two meters in front of the user (z: -2) and two meters above the ground (y: 2). (In A-Frame it is customary to interpret position and lengths in meters.) 

If no position is given, the object will be placed at (0, 0, 0).

It's important to understand that, in A-Frame, the origin (0, 0, 0) is at the user's feet. Also, by default, when vieweing the VE in a mobile or desktop device without positional tracking, the user's eyes will be set at (0, 1.6, 0) &ndash; 1.6 meters above the ground.

<figure>
    <img src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Faxis.png?1523305221866"
         alt="3D axes">
    <figcaption>Figure 1 - Axes in A-Frame.</figcaption>
</figure>

A nice mnemonic to remember the which axis points in what direction is to use your right hand as shown in Figure 2. If your put your thumb, index, and middle finger as in Figure 2 (your middle finger is pointing directly at you) then the x, y, and z axis are aligned with your thumb, index, and middle fingers. The positive direction of the axis points in the direction your fingers are extended to. Notice how it is easy to see that to place something in front of you in A-Frame you need to give it negative values of z!

<figure>
    <img src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Faxis-mnemonic.png?v=1589036935916"
         alt="3D axes mnemonic">
    <figcaption>Figure 2 - 3D axes mnemonic. Point the middle finger towards you and open up the index and thumb; Your fingers now point in the positive direction of the x, y, and z axes.</figcaption>
</figure>

1. Try changing the position so that the box is higher in the screen and further away.
2. Add a second box positioned on top of the first.

## Size

Several attributes are used to set the final size of a 3D object.

:::example 0100-primitives-02-size

To define the size of a box you can use the `width`, `height`, and `depth` attributes to control the length in the x, y, and z axes.



In example :::ref 0100-primitives-02-size, notice how our box is now taller:

```html
<a-box
  position="0 2 -2"
  width="1"
  height="3"
  depth="1"
  rotation="0 0 0"
  color="red"
></a-box>
```

Different primitives may have different attributes to set the size. For example, a sphere's size is defined through it's radius:

```html
<a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
```

A cylinder uses `height` and `radius`:

```html
<a-cylinder
  position="1 0.75 -3"
  radius="0.5"
  height="1.5"
  color="#FFC65D"
></a-cylinder>
```

To learn what attributes a given primitive needs for setting its size, you must read the documentation in the A-Frame website.

1. In example :::ref 0100-primitives-02-size, add a second box that is wider than taller.

## Rotation

:::example 0100-primitives-03-rotation

The `rotation` attribute specifies three values for the rotation around each of the x, y, z axes. In the example, notice how the box is rotated 45º in the x-axis &ndash; towards you.

To know in which direction the object will rotate you can use the mnemonics in Figure 3. Use your thumb to point it in the positive direction of the axis you wish to rotate about. Then close your hand; the direction in which your hand closes is the positive rotation.

<figure>
<figure>
    <img  src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Frotation-x.gif?v=1589037826258"
         alt="X rotation mnemonic">
    <figcaption>X rotation mnemonic</figcaption>
</figure>

<figure>
    <img src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Frotation-y.gif?v=1589037826462"
         alt="Y rotation mnemonic">
    <figcaption>Y rotation mnemonic</figcaption>
</figure>
  
  <figure>
    <img  src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Frotation-z.gif?v=1589037824424"
         alt="Z rotation mnemonic">
    <figcaption>Z rotation mnemonic</figcaption>
</figure>
  <figcaption>Figure 3 - Rotation mnemonics. Point the thumb in the positive direction of the axis you wish to rotate about; the hand closes in the direction of the positive rotation.</figcaption>
</figure>

1. Experiment with different rotations in example :::ref 0100-primitives-03-rotation. Try adding another box and rotate it in the z-axis.

## Color

:::example 0100-primitives-04-color

The `color` attribute allows you to set the color of the primitive. You can use color names such as "red", or "green" for colors that have a pre-defined name. For general colors, you can use the hex format such as `#ff8533` (you can use any color picker to find out the hex values, e.g., https://www.w3schools.com/colors/colors_picker.asp )

1. In example :::ref 0100-primitives-04-color, change the color of the green box to a color chosen from https://www.w3schools.com/colors/colors_picker.asp

## Different Primitives

:::example 0100-primitives-05-primitives

In this example, you can see different types of primitives for creating different objects.

Notice how primitives such as the cylinder and sphere have a `radius` attribute:

```html
<a-sphere position="3 3 -10" radius="0.7" color="#FF4136"></a-sphere>
```

## Nesting Primitives

It is possible to place a primitive inside another one. This is helpful when we want to place a 3D object relative to another, instead of placing both in relation to the origin (0, 0, 0). Nested objects are placed relative to their parent objects.

This makes it much easier to create complex objects. As an example, imagine we need to create a circle with a sphere placed in the circumference. Knowing the radius of the circle, we can easily calculate the relative position of the sphere:

```html
<a-circle position="0 1.6 -4" radius="1.5" color="#0074D9">
        <a-sphere position="1.5 0 0" radius="0.1" color="red"> </a-sphere>
      </a-circle>
```

Notice that we can now move the circle to another position while keeping the sphere correctly placed.

:::example 0100-primitives-06-nesting

1. In the example :::ref 0100-primitives-06-nesting try changing the position of the circle and confirm that the sphere is still correctly attached to it


## Exercises

### primitives-01

Make a copy of example :::ref 0100-primitives-01-position and change it:

1. Change the color of the sky (`<a-sky>` primitive) to "lightblue".
2. Enlarge the floor (`<a-plane>` primitive), and change its color to "brown".
3. Add a second cylinder, and rotate it

:::exercise https://aframe-usj-exercises.glitch.me/exercises/primitives-01.html

### primitives-02

Make a new file and:

1. Create a scene with 9 colored boxes (each box should be 1m x 1m x 1m) as in the following example:

:::exercise https://aframe-usj-exercises.glitch.me/exercises/primitives-02.html

### primitives-03

1. Make a new file and:
1. Create a scene with 4 boxes to represent walls, and a sphere as in the following example.
1. Add a light blue sky.

:::exercise https://aframe-usj-exercises.glitch.me/exercises/primitives-03.html

### primitives-04

1. Make a scene with a torus, scaled 3x in the x-axis:

:::exercise https://aframe-usj-exercises.glitch.me/exercises/primitives-04.html

### primitives-05

1. Make a scene with a cube with 1 spheres in each corner of the frontal face. Use nesting!

:::exercise https://aframe-usj-exercises.glitch.me/exercises/primitives-05.html

## References
By default, if no size is specified, the box assumes a size of 1 meter wide, 1 meter tall, and 1 meter in depth.