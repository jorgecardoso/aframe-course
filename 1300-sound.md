---
title: Audio
previous: 8-portals
previoustitle: Portals
---

# Sound


:::example 09-sound-01


To play sounds in A-Frame, we use the `<a-sound>` primitive. It is similar to playing a video, we can set the `autoplay` and `loop` attributes, and we must specify the source of the sound from the list of assets. Because we usually want to associate a sound with a specific virtual object, we can put the `<a-sound>` inside the primitive that represents the 3D object:

```html
<a-assets>
  <audio id="musicbox" src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Fbaby-music-box_daniel-simion.mp3?1524832969017" ></audio>
</a-assets>

<a-box position="-1 1.6 -3" color="#ff0000" >
  <a-sound autoplay="true" loop="true" src="#musicbox"></a-sound>
</a-box>
```

Sounds are automatically spacialized. Try running the above example and moving through the virtual environment: notice that the sound will seem to come from different directions as you move relative to the red box.

## Moving sounds

:::example 09-sound-02-moving


By taking advantage of what we saw about animations, we can make sound move through the virtual environment. In this example, we are using a generic `<a-entity>` for the animation. This allows us to make the box, and associated sound, move in a circle:

```html
<a-entity position="0 1.6 0" animation="property: rotation; to: 0 360 0; dur: 15000; easing:linear">
    <a-box position="0 0 -5" color="#ff0000" >
      <a-sound autoplay="true" src="#musicbox"></a-sound>
     </a-box>
</a-entity>
```

## Distance to sound source

:::example 09-sound-03-closer


The distance to the sound source influences the volume of the sound. We can additionally control the maximum volume by specifying the volume attribute:

```html
<a-box position="0 1.6 -1" color="#ff0000" >
  <a-sound autoplay="true" loop="true" volume="0.5" src="#sonar"></a-sound>
</a-box>
```

Notice how the sound becomes louder as you approach the box.

## Triggering sounds

:::example 09-sound-04-events


We can also make sounds trigger in response to events over an object, by using the `on` attribute.
But for this we must invert how we position sounds: instead of putting a sound inside an object, we must put the object inside the sound. This will provide "content" to the sound, so that is can be "clicked", for example:

```html
<a-sound position="0 1.6 -1" on="click" volume="0.5" src="#sonar">
  <a-box color="#ff0000" >  </a-box>
</a-sound>
```

## Exercises


Go to: <a href="https://aframe-usj-exercises.glitch.me/sound.html" target="_blank">https://aframe-usj-exercises.glitch.me/sound.html</a>


## References
* Media (Image, Sound, Text, Video)
  * `<a-sound>`: https://aframe.io/docs/0.8.0/primitives/a-sound.html#sidebar