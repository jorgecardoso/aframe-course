---
title: 3D Models
---

<a href="index.html">Home</a> | <a href="3-environments.html">Previous: Environments</a> | <a href="5-offline-editing.html">Next: Offline Editing</a> 

--------

# 3D Models

**Warning:** 3D models can be quite complex and "heavy" and should be used carefully to make sure your virtual world can be rendered quickly. If you download a 3D model, you may need to simplify it before using it. Check this page on using 3D models with A-Frame: https://aframe.io/docs/0.8.0/introduction/models.html#model-performance

A-Frame supports various types of models [glTF](https://aframe.io/docs/0.8.0/components/gltf-model.html), [OBJ](https://aframe.io/docs/0.8.0/components/obj-model.html), and [COLLADA](https://aframe.io/docs/0.8.0/components/collada-model.html).

## glTF Models
:::example 04-3d-models-01-gltf

The above example shows how to load and display a glTF model. Note that we use a generic `<a-asset-item>` element to load the model:

```html
<a-asset-item id="avocato" src="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF/Avocado.gltf"></a-asset-item>
```

To include the model in the scene, we use the `<a-gltf-model>` primitive.

```html
<a-gltf-model position="0 1.6 -2" scale="4 4 4" src="#avocato"></a-gltf-model>
```

Since models may come in many different sizes, we may need to scale them (in this case the model is scaled up 4 times, but it may have to be scaled down if it is too large).

## Finding 3D Models

You can find compatible 3D models easily on the Internet and use them in yours projects (don't forget to give proper credit to the authors of the 3D models you use).

Here is a short list of sites that provide glTF models:

1. https://sketchfab.com/features/gltf
1. https://github.com/KhronosGroup/glTF-Sample-Models/tree/master/2.0

Go to the first link and look for the "Mysterious Island Centurion" 3D model and download it.

## Uploading Models
Most 3D models require more than one file to render properly. If you look at the Centurian model in the example and view the source file in your browser:

```html
<a-asset-item id="centurion" src="https://raw.githubusercontent.com/jorgecardoso/aframe-usj-models/master/centurion/centurion.gltf"> </a-asset-item>
```          

You will notice that it has various references to other files such as textures:

<img src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Fcenturion-model-file-references.PNG?1524173237613" width="600">

These files are located in the same folder as the main model file `centurion.gltf`. 

Since Glitch (this site you are using) does not support uploading folders, to host our models we are going to use [GitHub](https://github.com).

Follow these steps to create an account, upload a model folder, and use it in your project:

1. Create GitHub account.
  1. Go to GitHub and create an account
  2. Login to your GitHub account

2. Create repository
 1. New Repository 
 <img border="1" src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Fgithub-add-repo-1.png?1524174656759" width="800">
 2. Create Repository 
 <img border="1" src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Fgithub-add-repo-2.png?1524174658057" width="800">
 
3. Open your repository. Although you will see the repository immediately after you create it, follow these steps that will work even you have just logged in:
  1. <img border="1" src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Fgithub-add-repo-3.png?1524174658398" width="800">


4. Upload the model's folder
  1. Click upload:
  <img border="1" src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Fgithub-add-repo-4.png?1524174657088" width="800">
  2. Drag the folder:
  <img border="1" src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Fgithub-add-repo-5.png?1524174657372" width="800">
 2. Wait for the upload:
  <img border="1" src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Fgithub-add-repo-6.png?1524174657663" width="800">
  
5. Get the URL of the model's main file:
  1. Click on the model's folder in the repository:
  <img border="1" src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Fgithub-add-repo-7.png?1524174656112" width="800">
  1. Click on the model's main file:
  <img border="1" src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Fgithub-add-repo-8.png?1524174656236" width="800">  
  1. Click view raw file:
  <img border="1" src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Fgithub-add-repo-9.png?1524174656638" width="800">     
  1. Copy the URL:
  <img border="1" src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Fgithub-add-repo-10.png?1524174656510" width="800">    

## OBJ Models
:::example 04-3d-models-02-obj

## Animated Models
:::example 04-3d-models-03-gltf-animated

https://sketchfab.com/models/f3769a474a714ebbbaca0d97f9b0a5a0#download

## References

1. https://github.com/KhronosGroup/glTF-Sample-Models/tree/master/2.0
  
--------
<a href="index.html">Home</a> | <a href="3-environments.html">Previous: Environments</a> | <a href="5-offline-editing.html">Next: Offline Editing</a> 

-----

Copyright &copy; 2018 Jorge C. S. Cardoso jorgecardoso@ieee.org