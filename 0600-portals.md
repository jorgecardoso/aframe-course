---
title: Portals
---

# Portals

:::note
The current A-Frame version has a bug in handling portals causing them to trigger even when you click outside. The examples in this chapter use version `0.8.2`
:::

Portals are special objects that, when activated, take the user to another virtual environment, defined in a different file. They behave very similarly to links in a web page. To create a portal, we use the `<a-link>` primitive and the attributes `href` to tell what is the destination world, and `title` to provide a text description of the destination (like any other primitive, `<a-link>`s can be positioned anywhere we like:

```html
<a-link position="0 1.6 -2" href="/examples/0600-portals-02.html" 
        title="Go to second environment"></a-link>
```

By default, portals are represented as circles with the title text over them.

:::example 0600-portals-01

## Cursor for aiming
When using portals, it is important to provide users with a _cursor_ so that they can aim and point at the portal. Remember that your scene may be experienced through a mobile device on a VR headset.

To provide a cursor, we need to add the following to our scene:
```html

<a-camera>
   <a-cursor></a-cursor>
</a-camera>
```

## Providing a visual cue

Portals lead the user to another 3D scene so it may be useful to provide users with a visual cue about the scene they are about to enter. To do this, we need to put an image of the target scene in the `<a-assets>`:

```html
<a-assets>
        <img
          id="portals04preview"
          src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Fscreenshot-portals%20-%2004%20-%20preview-1589268108431.png?v=1589268161303"
        />
</a-assets>
```

And then refer to that image in the `image` attribute of the `<a-link>`:

```html
<a-link
        position="-2 2 -2"
        image="#portals04preview"
        href="/examples/0600-portals-04-preview.html"
        title="Go to second environment"
  ></a-link>
```

:::example 0600-portals-03-preview


### Taking equirectangular shots of a scene

Notice in the previous example, how the preview images of the portals changed perspective as you moved around the portal. That is because the images are actually photospheres (equirectangular images) taken from the respective scenes.

To take an equirectangular screenshot of a scene you created in A-Frame, enter that scene in your browser and press `<ctrl> + <shift> + <alt> + s`. This will download a photosphere of your scene that you can then upload to your assets.

## Changing the link appearance

If you don't like the appearance of the portal, you can change it to any other object you like by putting an object *inside* the `<a-link>` primitive and by specifying the `link="visualAspectEnabled:false"` attribute:

```html
      <a-link
        position="-3 2 -2"
        link="visualAspectEnabled:false"
        href="/examples/0600-portals-04-preview.html"
        title="Go to second environment"
      >
        <a-sphere src="#portals04preview"></a-sphere>
      </a-link>
```


:::example 0600-portals-06-appearance

## Exercises


### Portals 01

1. Create a scene with a portal to exercise `environments-01`
  1. Make sure the portal has a visual cue in the form of a photosphere (use the `image` parameter in the `<a-link>`).
  
### Portals 02
1. Create a scene with a forest environment and portal that looks like a black hole on the ground. The portal should link to exercise `environments-01`

:::note hint
Use `link="visualAspectEnabled:false"` and a `<a-circle>`
:::

:::exercise https://aframe-usj-exercises.glitch.me/exercises/portals-02.html
