---
title: Environments
previous: 2-textures
previoustitle: Textures
next: 4-3d-models
nexttitle: 3D Models
---

# Environments and Other Systems
## Environments

:::example 03-environments-01


Environments are an external component for A-Frame and must be explicitely loaded by inserting the following `<script>` element inside the `<head>`:

```html
<script src="https://unpkg.com/aframe-environment-component/dist/aframe-environment-component.min.js"></script>
```

After the component is loaded, we can use an `<a-entity>` element to automatically create large environments:

```html
<a-entity environment="preset: <name of the preset>"></a-entity>
```

The name of the preset can be one of: 'none', 'default', 'contact', 'egypt', 'checkerboard', 'forest', 'goaland', 'yavapai', 'goldmine', 'arches', 'threetowers', 'poison', 'tron', 'japan', 'dream', 'volcano', 'starry', 'osiris'.

*Note that this element is used in a slightly different way from previous ones: we use a generic `<a-entity>` and them inside the `environment` attribute we define the various details of the environment (preset is just one). Also note that the syntax is parameter:value instead of parameter=value*

1. Explore the different presets by running the example and changing the preset name.

This component is documented at https://github.com/feiss/aframe-environment-component/

### Customizing environments


#### Dressing
:::example 03-environments-02-dressing


Dressings are additional objects scattered throughout the environment. 

The `dressing` parameter allows us to define the type of object (none, cubes, pyramids, cylinders, towers, mushrooms, trees, apparatus, torii):

The `dressingAmount` parameter controls the number of objects.

The `dressingColor` parameter controls de color of the objects.

The `dressingScale` parameter controls the height of the objects in meters.

```html
<a-entity environment="preset: goldmine; dressing: mushrooms; dressingAmount: 20; dressingColor: orange; dressingScale: 1"></a-entity> 
```

#### Play area
:::example 03-environments-03-playarea


The `playArea` parameter defines a radius where the ground is flat and no objects are automatically placed. This allows us to create an environment and then populate it with our own objects.

```html
<a-entity environment="preset: tron; playArea: 10"></a-entity> 
```



## Particle systems
:::example 03-environments-04-particles


Particle systems are also an external component that requires the following `<script>`:

```html
<script src="https://unpkg.com/aframe-particle-system-component@1.0.x/dist/aframe-particle-system-component.min.js"></script>
```

Once we include the script, we can use a generic `<a-entity>` and configure the particles in the `particle-system` attribute, in a similar way as we did with the environment.

The most simple way is to use a particle system preset. There are presets for `rain`, `stars`, `dust`, `snow`, and `colors`.

```html
<a-entity position="0 2.25 -15" particle-system="preset: rain"></a-entity>
```

In the example above, try changing the preset (we may need to adjust the sky's color to see the particles).



This componente is documented at https://github.com/IdeaSpaceVR/aframe-particle-system-component

### Customizing the Particle System

#### Color and Size
:::example 03-environments-05-particles-color


To change the particle's color just add the `color` parameter to its configuration (note that just like the environment, different parameters must be separated by a semi-colon `;`).

To change the size, we use the `size` parameter:
```html
<a-entity position="0 2.25 -15" particle-system="preset: rain; color: red; size: 5"></a-entity>
```

<!--
#### Acceleration
**Example: 03-environments-06-particles-accel** <a href="examples/03-environments-06-particles-accel.html" target="_blank">Open example in new tab</a>:
<iframe src="https://hurricane-tub.glitch.me/examples/03-environments-06-particles-accel.html" width="600" height="400"></iframe>
-->

#### Making a fountain
:::example 03-environments-07-particles-fountain


## Oceans
:::example 03-environments-08-oceans


Oceans are also an external component, so we need to add another `<script>` tag to our code (inside the `<head>` element):

```html
<script src="//cdn.rawgit.com/donmccurdy/aframe-extras/v4.0.2/dist/aframe-extras.min.js"></script>
```

Once we add the script, we have access to another primitive: `<a-ocean>`:
```html
<a-ocean position="0 0 0" width="10" depth="10" opacity="1"></a-ocean>
```
This primitive creates a rectangular surface that is animated, and mimics the ocean waves. We can control the position, and size of this surface with the `position`, `width`, and `depth` attributes.

We can also control the speed and amplitude of the waves with the `speed` and `amplitude` attributes.

## Combining Everything
:::example 03-environments-09-environ-ocean-fountain


## Exercises


Go to: <a href="https://aframe-usj-exercises.glitch.me/environments.html" target="_blank">https://aframe-usj-exercises.glitch.me/environments.html</a>


## References

1. Environments
  1. Include: `<script src="https://unpkg.com/aframe-environment-component/dist/aframe-environment-component.min.js"></script>`
  2. Doc: https://github.com/feiss/aframe-environment-component/
2. Particle Systems
  1. Include: `<script src="https://unpkg.com/aframe-particle-system-component@1.0.x/dist/aframe-particle-system-component.min.js"></script>`
  2. Doc: https://github.com/IdeaSpaceVR/aframe-particle-system-component
3. Oceans
  1. Include: `<script src="//cdn.rawgit.com/donmccurdy/aframe-extras/v4.0.2/dist/aframe-extras.min.js"></script>`
  2. Doc: https://github.com/donmccurdy/aframe-extras/tree/master/src/primitives
  