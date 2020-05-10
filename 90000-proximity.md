---
title: Proximity detection
---

# Proximity Detection


:::example 10-proximity-01


The proximity trigger component, allows objects to be informed when another object is in proximity. By default, it tracks the proximity of the camera, i.e., the user, to an object. The `<script>` to include is:

```html
<script src="https://aframe-usj.glitch.me/proximity-trigger.js"></script>
```

The proximity trigger will send two events:

* `playerenter`: when the user has entered the proximity radius.

* `playerleave`: when the user has left the proximity radius.

In the following example, the proximity trigger is defined with a radius of 2 (`distance: 2`). When the user enters that radius, the `playerenter` event is triggered and it will in turn start the animation:

```html
<a-box proximity-trigger="distance: 2" position="-1 1.6 -3" color="#ff0000" 
      animation="property: position; dur: 2000; from: -1 1.6 -3; to: -1 1.6 -10;  startEvents: playerenter;" >
</a-box>  
```



## Doors

:::example 10-proximity-03

## References
