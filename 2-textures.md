[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/remix/hurricane-tub)

<a href="index.html">Home</a>

<a href="1-basics-2.html">Previous: Basics 2</a> | <a href="3-environments.html">Next: Environments</a> 

--------

# Textures
Textures are images we can apply to our objects to "dress" them. 

**Example: 02-textures-01** <a href="examples/02-textures-01.html" target="_blank">Open example in new tab</a>:
<iframe src="https://hurricane-tub.glitch.me/examples/02-textures-01.html" width="600" height="400"></iframe>

Because images can take a long time to download and because we usually need to apply the same texture to multiple objects, we should use the `<a-assets>` element to identify the texture and then use the id `#name` when applying it to the primitive:

```html
<a-assets>
    <img id="boxTexture" src="https://i.imgur.com/mYmmbrp.jpg">
</a-assets>
      
<a-box src="#boxTexture" position="0 0 -2" height="2" rotation="0 45 0"></a-box>
```

**It's important to note that inside the `<a-assets>` the `id` does not have a hash (#) symbol. But when using that `id` in a `src` attribute, we must add the hash (#).**

## Uploading textures to Glitch

## Repeating
**Example: 02-textures-02-repeat** <a href="examples/02-textures-02-repeat.html" target="_blank">Open example in new tab</a>:
<iframe src="https://hurricane-tub.glitch.me/examples/02-textures-02-repeat.html" width="600" height="400"></iframe>

Textures can be repeated as if they were tiles in each face of a primitive.

To do that we just add the `repeat="x y"` attribute where `x` and `y` are the number of repetitions in the horizontal and vertical (not strictly horizontal and vertical, but it may be easier to think this way).

The number of repetions can be lower than 1, in which case the texture image is not completely used and is stretched to fill the object's face.

## Video as texture
**Example: 02-textures-03-video** <a href="examples/02-textures-03-video.html" target="_blank">Open example in new tab</a>:
<iframe src="https://hurricane-tub.glitch.me/examples/02-textures-03-video.html" width="600" height="400"></iframe>

Video can also be used as a texture. We just need to use the `<video>` element instead of `<img>` in the `<a-assets>`. And we need to use the `autoplay` attribute to make the video play automatically (may not work on all devices). We can also use the `loop=true` attribute to make the video loop:

```html
<video id="video2" autoplay loop="true" src="https://ucarecdn.com/fadab25d-0b3a-45f7-8ef5-85318e92a261/"></video>
```
  
## Exercises

1. Adapt exercise `01-basics-01` so that the **9** boxes are textured with the "x" and "o" images (these images are available in the project's assets folder):
<iframe width="600" height="400" src="https://rhinestone-attack.glitch.me/exercises/01-textures-01.html"></iframe>
2. Using texture repetition, create a scene with **2** boxes of (3m x 3m x 1m) textured as in the following example:
<iframe width="600" height="400" src="https://rhinestone-attack.glitch.me/exercises/01-textures-02.html"></iframe>

## References

1. Images for textures: https://github.com/aframevr/sample-assets/tree/master/assets/images
2. 360ª panorama images: https://www.flickr.com/groups/360degrees/

--------

<a href="index.html">Home</a>

<a href="1-basics-2.html">Previous: Basics 2</a> | <a href="3-environments.html">Next: Environments</a> 

-----

Copyright &copy; 2018 Jorge C. S. Cardoso jorgecardoso@ieee.org