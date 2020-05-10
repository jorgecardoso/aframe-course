---
title: Animations
previous: 6-interactions
previoustitle: Interactions
next: 8-portals
nexttitle: Portals
---

# Animations

:::example 07-animations-01


Animations are created using the external component called "A-Frame Animation Component", which requires the following `<script>`:

```html
<script src="https://unpkg.com/aframe-animation-component@^4.1.2/dist/aframe-animation-component.min.js"></script>
```

To add animation to a primitive, we simply add an `animation` attribute and configure it with the animation properties. The value of the `animation` property is a set of `name=value;` pairs:

```html
<a-box position="0 1.6 -2" animation="property: rotation; to: 0 360 180; dur: 5000; loop: 2">
```

The main properties are:

* *property*: the attribute to animate. In the example, we are animating the rotation of the box.

* *to*: the target value for the attribute. In the example, we want to animate the rotation of the box from it's default value "0 0 0" to the target value of "0 360 180".

* *dur*: the duration of the animation, or how long it will take to go from the initial value to the target value. In the example, we want to make the animation take 5 seconds (5000 milliseconds) to animate from "0 0 0" to "0 360 180".

* *loop*: how many times we want to repeat the animation. We can specify a number like in the example to make the animation run twice, or specify `true` to create a never ending animation.

## Easings


:::example 07-animations-02-easings


Easings defined how the animation progresses through time: does it have a constant speed?, or does it start slow but gains speed as it progresses?

There are many types of easing functions. Example `07-animations-02-easings` shows only a few. The main categories of easings are:

* *linear*: constant speed (the bottom box in the example).

* *easeIn*: the animation starts slow and gains speed as it progresses (top box).

* *easeOut*: the animation starts fast but loses speed as it progresses (second box from the top).

* *easeInOut*: the animation starts slow, gains speed, and then loses speed as it reaches the end (third box from the top)

The *ease*something category uses speficic functions for the variation of speed (the example illustrates only the Quad function). The animation component documentation lists other possibilities for easing: https://github.com/ngokevin/kframe/tree/master/components/animation/#easings

To set the easing function to use in an animation we specify the `easing` property:

```html
<a-box scale="0.5 0.5 0.5" position="-3 0 -4" 
  animation="property: position; dur: 5000; easing: linear; to: 3 0 -4; loop: true"  >
</a-box>
```

## Chaining animations


:::example 07-animations-03-chaining


We can give the impression of chained animations (i.e., sequential animations in different objects) by carefully setting the duration and delay of each animation. In example `07-animations-03-chaining` we have three animated boxes.:

1. The animation of box #1 starts immediately (no delay) and lasts for 2 seconds.

2. The animation of box #2 starts with a delay of 2 seconds (so it starts when the animation of box #1 ends) and lasts for 2 seconds.

3. The animation of box #3 starts with a delay of 4 seconds (so it starts when the animation of box #2 ends) and lasts for 2 seconds.

```html
<a-box position="-1 1.6 -3" scale="0.5 0.5 0.5" color="#ff0000" 
      animation="property: color; dur: 2000; to: #00ff00" >
</a-box>
       
<a-box position="0 1.6 -3" scale="0.5 0.5 0.5" color="#00ff00" 
      animation="property: color; dur: 2000; delay: 2000; to: #0000ff" >
</a-box>
        
<a-box id="thi" position="1 1.6 -3" scale="0.5 0.5 0.5" color="#0000ff" 
      animation="property: color; dur: 2000; delay: 4000; to: #ff0000" >
</a-box>
```


## Animating Multiple properties

## Interactive animations

:::example 07-animations-04-events


We can also make animations interactive by defining which events trigger an animation.

For example, if we want to start animating a box only when the cursor is over that box, we can define the `startEvents` property to `mouseenter`: 

```html
 <a-box position="-1 1.6 -3" color="#ff0000" 
  animation="property: color; dur: 2000; to: #00ff00; startEvents: mouseenter" >
</a-box>
```


We can even make the animation pause and resume depending on interaction events by defining also the `pauseEvents` and the `resumeEvents` properties:

```html
<a-box id="one" position="1 1.6 -3" color="#ff0000" 
  animation="property: color; dur: 4000; to: #00ffff; startEvents: click; pauseEvents: mouseleave; resumeEvents: mouseenter" >
</a-box>     
```

In the previous box, the animation starts when the box is clicked, paused and the cursor leaves the box, and resumed when the cursor enters the box again.

Note the difference to the previous box, where the animation would *restart* when the mouse entered the box.

## Exercises


Go to: <a href="https://aframe-usj-exercises.glitch.me/animations.html" target="_blank">https://aframe-usj-exercises.glitch.me/animations.html</a>

## References

* Animation component
  * Include: `<script src="https://unpkg.com/aframe-animation-component@^4.1.2/dist/aframe-animation-component.min.js"></script>`
  * Documentation: https://github.com/ngokevin/kframe/tree/master/components/animation/

