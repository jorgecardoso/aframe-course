---
title: Interactions
previous: 5-magica-voxel
previoustitle: Magica Voxel
next: 7-animations
nexttitle: Animations
---

# Interactions

## Gaze-based Interactions
Interaction in VR, particularly mobile VR can be done without the use of controllers: the point the user is looking at can be used as a cursor for interacting with objects. For example, if the user looks at a door for a certain amount of time, we can make that door open...

### Showing the cursor
:::example 06-interactions-01-cursor


The first thing we need to do is to display a cursor in the centre of the user's view. The cursor acts like a mouse cursor, and the default look is simply a black circle.

To display the cursor, we need to explicitly add a camera primitive and a cursor primitive inside the camera:

```html
<a-camera>
  <a-cursor></a-cursor>
</a-camera>
```
The `<a-camera>` primitive is what allows us to move around the scene - it represents the viewpoint inside the scene. We have not used a camera primitive before, but A-Frame inserts one automatically if do not. By default, the camera 's position is controlled with the 'w', 'a', 's', 'd' keys and its perspective is controlled click-dragging with the mouse.

By inserting a `<a-cursor>` inside the `<a-camera>`, the camera will always display a circle centred on the screen.

### Cursor events

Once we add the `<a-cursor>` to the camera, it will trigger interaction events that mimick the ones we have on web pages. Note that these are not the same as the real web page events: A-Frame *simulates* the events to make it easier to work with:

* *mouseenter* event is fired when the cursor "enters" the primitive, i.e., the cursor transitions from not over to over the entity.
* *mouseleave* event is fired when the cursor "leaves" the primitive.
* *mousedown* event is fired when the cursor is over an entity, and the user presses down the mouse button.
* *mouseup* event is fired when the cursor is over an entity, and the user releases the mouse button.

* *click* event is fired when the cursor is over an entity for a pre-defined amount of time, or when the cursor is over an entity and the user presses the mouse button.
* *fusing* event is fired when cursor is over entity and the count-down starts.

### Using the events
:::example 06-interactions-02-events


Once an event is fired, we typically want to change something in our environment. For example, we may want to change the color of an object once the user looks at that object. 

To do this, we need to listen to the event and trigger a property change.
For that we need to use an external component called Event-Set:
```html
<script src="https://unpkg.com/aframe-event-set-component@^4.0.0/dist/aframe-event-set-component.min.js"></script>
```

Event-Set allows us to associate property changes to specific events over an entity.

In example `06-interactions-02-events`, we change the color of the left box when the cursor enters or leaves the primitive. We do that by adding an `event-set__?` attribute, where the `?` is the name of the event. The value of the attribute is the name of the property we wish to change and its new value:
```html
<a-box position="-2 1.6 -2" color="red" 
              event-set__mouseenter="color: blue"
              event-set__mouseleave="color: red" ></a-box>
```

### Fuse events
:::example 06-interactions-03-events-fusing


A-Frame allows us to create environments that work both on a desktop computer and on a mobile device.

On a desktop computer, the "click" event is triggered by clicking the mouse button when the cursor is over an object. On a mobile device, A-Frame uses what they call a fuse-based cursor where the "click" event is triggered when the cursor is over an object for more than a pre-defined period of time (1.5 seconds by default).

The "fusing" event is triggered on mobile devices when the time counter starts. When the timer expires, the "click" event will be triggered.

Example `06-interactions-03-events-fusing` (try it on a mobile device) shows the use of the "fusing" and "click" events. The box color is *red* by default; when the cursor gets over the box it will immediately turn *lighblue*; 1.5 seconds later, if the cursor is still over the box it will turn *blue*; when the cursor leaves the box it turns *red* again:

```html
<a-box position="-2 1.6 -2" color="red" 
              event-set__fusing="color: lighblue"
              event-set__click="color: blue"
              event-set__mouseleave="color: red"></a-box>
```

### Targetting other primitives

:::example 06-interactions-04-events-targets

When interacting with an object we can cause changes to other objects as well. We do that by defining the `_target` property on the `event_set__?` attribute. To target primitive we must first assign it an `id`. In the example, we give the first box an id of "redbox" (`id="redbox"`) and the second box an id of "greenbox". In the mouseenter event for the redbox, notice how we target the greenbox and change its width to 2:

```html
<a-box id="redbox" position="0 1.6 -2" color="red"           
              event-set__mouseenter="_target:#greenbox; width: 2"
              event-set__mouseleave="_target:#greenbox; width: 1" ></a-box>
              
<a-box id="greenbox" position="0 2.6 -2" color="green" 
             event-set__mouseenter="_target:#bluebox; width: 2"
              event-set__mouseleave="_target:#bluebox; width: 1" ></a-box>
```

### A few typical behaviours

:::example 06-interactions-05-events-showhide

:::example 06-interactions-06-events-changetexture

:::example 06-interactions-07-events-changeshape

:::example 06-interactions-08-events-rotate


### Controllers

:::example 06-interactions-10-laser-controller https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2F2018-04-26-PM_05_16_27-R.png?1524759463879



:::example 06-interactions-11-controller-models


## Exercises

Go to: <a href="https://aframe-usj-exercises.glitch.me/interactions.html" target="_blank">https://aframe-usj-exercises.glitch.me/interactions.html</a>


## References
  