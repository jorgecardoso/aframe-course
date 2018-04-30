---
title: Textures
previous: 1-basics-2
previoustitle: Basics 2 - Lights, Text
next: 3-environments
nexttitle: Environments
---

# Textures
Textures are images we can apply to our objects to "dress" them. 

:::example 02-textures-01


Because images can take a long time to download and because we usually need to apply the same texture to multiple objects, we should use the `<a-assets>` element to identify the texture and then use the id `#name` when applying it to the primitive:

```html
<a-assets>
    <img id="boxTexture" src="https://i.imgur.com/mYmmbrp.jpg">
</a-assets>
      
<a-box src="#boxTexture" position="0 0 -2" height="2" rotation="0 45 0"></a-box>
```

*It's important to note that inside the `<a-assets>` the `id` does not have a hash (#) symbol. But when using that `id` in a `src` attribute, we must add the hash (#).*

## Uploading textures to Glitch

## Repeating
:::example 02-textures-02-repeat


Textures can be repeated as if they were tiles in each face of a primitive.

To do that we just add the `repeat="x y"` attribute where `x` and `y` are the number of repetitions in the horizontal and vertical (not strictly horizontal and vertical, but it may be easier to think this way).

The number of repetions can be lower than 1, in which case the texture image is not completely used and is stretched to fill the object's face.

## Video as texture
:::example 02-textures-03-video


Video can also be used as a texture. We just need to use the `<video>` element instead of `<img>` in the `<a-assets>`. And we need to use the `autoplay` attribute to make the video play automatically (may not work on all devices). We can also use the `loop=true` attribute to make the video loop:

```html
<video id="video2" autoplay loop="true" src="https://ucarecdn.com/fadab25d-0b3a-45f7-8ef5-85318e92a261/"></video>
```
  
  
## Photospheres

:::example 02-textures-04-photosphere


```html
<a-camera wasd-controls-enabled="false"></a-camera>
```

## Videospheres
:::example 02-textures-05-videosphere


```html
<a-videosphere src="#video"></a-videosphere>
<!-- <a-sky src="#video"></a-sky> -->
```

## Exercises


Go to: <a href="https://aframe-usj-exercises.glitch.me/textures.html" target="_blank">https://aframe-usj-exercises.glitch.me/textures.html</a>

## References

* Images for textures 
  * https://github.com/aframevr/sample-assets/tree/master/assets/images
* 360ª panorama images 
  * https://www.flickr.com/groups/360degrees/
