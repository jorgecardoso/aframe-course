---
title: Textures
previous: 1-basics-2
previoustitle: Basics 2 - Lights, Text
next: 3-environments
nexttitle: Environments
---

# Textures
Textures are images we can apply to our objects to "dress" them. 

:::example 0400-textures-01


Because images can take a long time to download and because we usually need to apply the same texture to multiple objects, we should use the `<a-assets>` element to identify the texture, giving it an `id` attribute. The value we assign to the `id` is up to us, but we should keep it simple and easy to understand what it refers to. 

For example:
```html
<a-assets>
    <img id="boxTexture" src="https://i.imgur.com/mYmmbrp.jpg">
</a-assets>
```

After we assign an `id` to the image to be used as texture, we can then refer to that in the primitive to apply the texture:

```html
<a-box src="#boxTexture" position="0 0 -2" height="2" rotation="0 45 0"></a-box>
```


:::note warning
It's important to note that inside the `<a-assets>` the `id` does not have a hash (#) symbol. But when using that `id` in a `src` attribute, we must add the hash (#).
:::

## Repeating

Textures can be repeated as if they were tiles in each face of a primitive.

To do that we just add the `repeat="x y"` attribute where `x` and `y` are the number of repetitions in the horizontal and vertical (not strictly horizontal and vertical, but it may be easier to think this way).

For example, the following code would repeat the texture image twice in the horizontal and twice in the vertical axes in each face of the box:

```html
<a-box src="#bricks" repeat="2 2" position="2 1 -2"></a-box>
```

The number of repetions can be lower than 1, in which case the texture image is not completely used and is stretched to fill the object's face.

Notice the image in Figure 1, which has been applied in example :::ref 0400-textures-02-repeat
<figure>
    <img src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Fbrick_diffuse.jpg?1523874307941"
         alt="Brick texture">
    <figcaption>Figure 1 - Brick texture applied in example :::ref 0400-textures-02-repeat.</figcaption>
</figure>

Notice how, in the left box only the top/left corner of the texture is used in the box (`repeat 0.5 0.5`), in the middle box the complete texture image is used (`repeat 1 1`), and in the right box the texture image is applied four times (`repeat 2 2`):

:::example 0400-textures-02-repeat

## Video as texture

Video can also be used as a texture. We just need to use the `<video>` element instead of `<img>` in the `<a-assets>`. And we need to use the `autoplay` attribute to make the video play automatically (may not work on all devices). We can also use the `loop=true` attribute to make the video loop:

```html
<video id="video" autoplay loop="true" src="https://ucarecdn.com/fadab25d-0b3a-45f7-8ef5-85318e92a261/"></video>
```
 
Videos can be used as textures applied to primitives like `a-box` but we can also use the specific `a-video` for displaying a video in a rectangular screen inside the 3D scene:

```html
<a-video src="#video" position="0 2.7 -2" width="2" height="1"></a-video>
```

:::example 0400-textures-03-video
  
## Photospheres
360º photos can also be used as textures to create a 360º panoramic view.

360º photos are tecnically *equirectangular* images and basically correspond to the a planisphere (a projection of a sphere into a plane). Figure 2 shows a 360º photo, taken with a 360º camera.

<figure>
    <img src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2FR0010059.JPG?1525432731662"
         alt="Equirectangular photo of a classroom">
    <figcaption>Figure 2 - Equirectangular photo of a classroom. Used in example :::ref 0400-textures-04-photosphere.</figcaption>
</figure>

We can apply these images to spherical primitives in A-Frame. A typical way of creating a photosphere is to use `a-sky`, which creates a very large sphere textured from the inside. With some careful placing, we can even combine a photosphere with other primitives as in example :::ref 0400-textures-04-photosphere where a box is placed on top of a table in the 360º photo - this is only an illusion though because the table is not actually 3D:

:::example 0400-textures-04-photosphere

A limitation of these environments is that the 360º photo is taken from a single perspective and should be viewed from that single perspective. If the user moves inside the environment, the perspective will not be correct. To prevent users from moving inside our scene we can use:

```html
<a-camera wasd-controls-enabled="false"></a-camera>
```

## Videospheres
We can also use 360º videos to texture `a-sky`;


```html
<a-videosphere src="#video"></a-videosphere>
<!-- <a-sky src="#video"></a-sky> -->
```

:::example 0400-textures-05-videosphere


## Exercises


### Textures-01
1. Adapt exercise `Basics-1-02` so that **9** boxes are textured with the "x" and "o" images (these images are available in the project's assets folder):

:::exercise https://aframe-usj-exercises.glitch.me/exercises/textures-01.html


### Textures-02
2. Using texture repetition, create a scene with **2** boxes of (3m x 3m x 1m) textured as in the following example:


:::exercise https://aframe-usj-exercises.glitch.me/exercises/textures-02.html

### Textures-03
Using either your phone or a 360º camera, take a 360º photo and use it to create a photosphere with a artificial element (a primitive placed in a strategic location like the box in example :::ref 0400-textures-04-photosphere


## References

* Images for textures 
  * <a href="https://github.com/aframevr/sample-assets/tree/master/assets/images" target="_blank">https://github.com/aframevr/sample-assets/tree/master/assets/images</a>
* 360ª panorama images 
  * <a href="https://www.flickr.com/groups/360degrees/" target="_blank">https://www.flickr.com/groups/360degrees/</a>
