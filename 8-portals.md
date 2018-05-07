---
title: Portals
---

# Portals

:::example 08-portals-01


Portals are special objects that, when clicked, take the user to another virtual world, defined in a different file. They behave very similarly to links in a web page. To create a portal, we use the `<a-link>` primitive and the attributes `href` to tell what is the destination world, and `title` to provide a text description of the destination (like any other primitive, `<a-link>`s can be positioned anywhere we like:

```html
<a-link position="0 1.6 -2" href="/examples/07-animations-01.html" title="Go to animation Example"></a-link>
```

By default, portals are represented as circles with the title text over them.

## Providing a visual cue

:::example 08-portals-02-preview


Portals lead the user to another 3D scene so it may be useful to provide users with a visual cue about the scene they are about to enter. To do this, we need to put an image of the target scene in the `<a-assets>`:

```html
<a-assets>
  <img id="fountain" src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Fscreenshot-environments%20example-1525030183055.png?1525030229155">
</a-assets>
```

And then refer to that image in the `image` attribute of the `<a-link>`:

```html
<a-link position="-2 2 -2"  image="#fountain" href="/examples/07-animations-04-events.html" title="Go to fountain example"></a-link>
```

### Taking equirectangular shots of a scene

Notice in the previous example, how the preview images of the portals changed perspective as you moved around the portal. That is because the images are actually photospheres (equirectangular images) taken from the respective scenes.

To take an equirectangular screenshot of a scene, you can just enter that scene and press `<ctrl> + <shift> + <alt> + s`.

## Changing the link appearance

:::example 08-portals-04-appearance-object


If you don't like the appearance of the portal, you can change it to any other object you like by putting an object *inside* the `<a-link>` primitive and by specifying the `link="visualAspectEnabled:false"` attribute:

```html
<a-link position="-2 2 -2" link="visualAspectEnabled:false"  href="/examples/07-animations-04-events.html" title="Go to fountain example">
  <a-box src="#fountain"></a-box>
</a-link>
```
## Exercises


Go to: <a href="https://aframe-usj-exercises.glitch.me/portals.html" target="_blank">https://aframe-usj-exercises.glitch.me/portals.html</a>