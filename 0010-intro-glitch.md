---
title: Intro Tutorial to Glitch

next: 1-basics-1
nexttitle: Basics 1 - Primitives
---


# Intro Tutorial to Glitch

This course is structured using the Glitch platform. Glitch is a web platform that provides you with a free JavaScript based server for your projects.

This course is a Glitch project that you can copy and modify.

## Create a copy of the course project


1. Start by signing in on https://glitch.com/ so that you can save your work.
  1. Go to https://glitch.com/ and click "Sign in" 
  <img src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Fglitch-signin.png?1524521776083" width="600" height="400">

1. Remix the A-Frame Course project

  1. Go back to http://aframe-course.glitch.me/index.html and click on the "Remix on Glitch" button to create a copy of this project.
  <img src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Fglitch-remix.png?1524522201070" width="600" height="400">
  
  1. This will create a copy and take you to the editor of Glitch
  <img src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Fglitch-remixed.png?1524522382100" width="600" height="400">

## Learn to get back to your project after you sign out

After you have "Remixed" the course project, let's see how you can go back to it after you log out.

1. Log out
<img src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Fglitch-signout.png?1524557769921" width="600" height="400">
You will be taken to Glitch's main page.

2. Log in again
  <img src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Fglitch-signin.png?1524521776083" width="600" height="400">

3. Locate your project
 <img src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Fglitch-listprojects.png?1524557946304" width="600" height="400">
 
4. Click edit
 <img src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Fglitch-editproject.png?1524557999590" width="600" height="400">

You are now back at the editor.

## Glitch editor
The Glitch editor is a simple file editor. 

1. You can see a list of files on the left 
2. Clicking a file will open it in the file editor to the right
3. There is also an "Assets" folder for putting media files

<img src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Fglitch-editor.png?1524557258795" width="600" height="400">


## Learn the structure of the course files

The project you have Remixed contains all the examples and lessons.

<img src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Fglitch-course-files.gif?1524557493941" width="600" height="400">

If you scroll the file list to the left you will see:

1. Assets. This is a special folder in Glitch. If you click it, you will see various images inside it. Do not delete these images because they are being used by the Examples and Lessons.

1. Examples. Inside the "folder" `examples/`. These are the most important files for the course and the ones you will edit or copy to create your own.

2. Course lessons. These are files that end in `.md`. You should not edit these, although there is no big problem in doing so because the course lessons can always be read in the original course site at https://aframe-usj.glitch.me/index.html

3. Additional files. Files ending in `.js`, `.json`, or `.css` these are helper files that you should not change or delete. 
  1. **In particular, the file `server.js` is important so do not delete it or change it.**


## Making changes and seeing the result
Let's now see how to make changes and how to see the result.

### Add an asset
Let's start by adding an asset. Look for an image in your computer and upload to the `Assets` in Glitch by following these steps:

1. Go to the Assets folder 
<img src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Fglitch-uploadasset.png?1524560748426" width="600" height="400">

2. After you have uploaded the image click on it
<img src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Fglitch-clickasset.png?1524560994646" width="600" height="400">

3. Copy the URL of the image
<img src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Fglitch-copyurl.png?1524561014025" width="600" height="400">

We will now use this URL to change a simple example and see the result with your image on it.

### Edit a file
Let's edit the file that creates the following example so that is displays the cube with the image you have just uploaded:
:::example 00-intro-01

1. Follow the steps in the picture:
<img src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Fglitch-editfile.png?1524562054147" width="600" height="400">


### View the results

To view a specific file on your browser you just need to append the file's name to the address of your Glitch project:

1. Click on the "Show Live" button at the top of the Glitch Editor
<img src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Fglitch-view.png?1524562315095" width="600" height="400">
2. On the browser tab that will open, replace `index.html` by the file name
<img src="https://cdn.glitch.com/80978ab7-9db6-45ae-bc43-4fab16bdbb6e%2Fglitch-view-1.png?1524562452477" width="600" height="400">

