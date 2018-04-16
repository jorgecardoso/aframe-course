[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/remix/hurricane-tub)

<a href="index.html">Home</a>

<a href="2-textures.html">Previous: Textures</a> | <a href="4-3d-models.html">Next: 3D Models</a> 

--------

# Environments
**Example: 03-environments-01** <a href="examples/03-environments-01.html" target="_blank">Open example in new tab</a>:
<iframe src="https://hurricane-tub.glitch.me/examples/03-environments-01.html" width="600" height="400"></iframe>

Environments are an external component for A-Frame and must be explicitely loaded by inserting the following `<script>` element inside the `<head>`:

```html
 <script src="https://unpkg.com/aframe-environment-component/dist/aframe-environment-component.min.js"></script>
```

After the component is loaded, we can use an `<a-entity>` element to automatically create large environments:

```html
<a-entity environment="preset: <name of the preset>"></a-entity>
```

The name of the preset can be one of: 'none', 'default', 'contact', 'egypt', 'checkerboard', 'forest', 'goaland', 'yavapai', 'goldmine', 'arches', 'threetowers', 'poison', 'tron', 'japan', 'dream', 'volcano', 'starry', 'osiris'.

**Note that this element is used in a slightly different way from previous ones: we use a generic `<a-entity>` and them inside the `environment` attribute we define the various details of the environment (preset is just one). Also note that the syntax is parameter:value instead of parameter=value**

1. Explore the different presets by running the example and changing the preset name.

This component is documented at https://github.com/feiss/aframe-environment-component/

## Customizing Environments


### Dressing
**Example: 03-environments-02-dressing** <a href="examples/03-environments-02-dressing.html" target="_blank">Open example in new tab</a>:
<iframe src="https://hurricane-tub.glitch.me/examples/03-environments-02-dressing.html" width="600" height="400"></iframe>
Dressings are additional objects scattered throughout the environment. 

The `dressing` parameter allows us to define the type of object (none, cubes, pyramids, cylinders, towers, mushrooms, trees, apparatus, torii):

The `dressingAmount` parameter controls the number of objects.

The `dressingColor` parameter controls de color of the objects.

The `dressingScale` parameter controls the height of the objects in meters.

```html
<a-entity environment="preset: goldmine; dressing: mushrooms; dressingAmount: 20; dressingColor: orange; dressingScale: 1"></a-entity> 
```

### Play Area
**Example: 03-environments-03-playarea** <a href="examples/03-environments-03-playarea.html" target="_blank">Open example in new tab</a>:
<iframe src="https://hurricane-tub.glitch.me/examples/03-environments-03-playarea.html" width="600" height="400"></iframe>

The `playArea` parameter defines a radius where the ground is flat and no objects are automatically placed. This allows us to create an environment and then populate it with our own objects.

```html
<a-entity environment="preset: tron; playArea: 10"></a-entity> 
```

# Oceans
 **Example: 03-environments-04-oceans** <a href="examples/03-environments-04-oceans.html" target="_blank">Open example in new tab</a>:
<iframe src="https://hurricane-tub.glitch.me/examples/03-environments-04-oceans.html" width="600" height="400"></iframe>

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

## Combining Environments and Oceans
 **Example: 03-environments-03-environ-ocean** <a href="examples/03-environments-03-environ-ocean.html" target="_blank">Open example in new tab</a>:
<iframe src="https://hurricane-tub.glitch.me/examples/03-environments-03-environ-ocean.html" width="600" height="400"></iframe>

# Mountains

--------

<a href="index.html">Home</a>

<a href="2-textures.html">Previous: Textures</a> | <a href="4-3d-models.html">Next: 3D Models</a> 

-----

Copyright &copy; 2018 Jorge C. S. Cardoso jorgecardoso@ieee.org