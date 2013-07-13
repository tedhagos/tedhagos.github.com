---
layout: post

title: Android Programming
subtitle: Technical notes on Android Programming

description: 

excerpt: These are my notes for android programming. This is a not a tutorial, altough it may seem to be. They are closer to a cheat sheet rather than a detailed beginner's tutorial. These notes date back to late 2010 but they are updated from time to time. I could have missed some updates and you may still find some references to API level 6 (Eclair) &mdash; I'll get around to fixing those kinds of things when I get the time. 

categories: 
- android
- mobile
- java
- programming


---


<table>
  <th colspan="3">DOCUMENT HISTORY</th>
  <tr>
    <td>18 Dec 2010</td>
    <td>0.1</td>
    <td>CREATED</td>
  </tr>
  <tr>
    <td>10 Jun 2013</td>
    <td>0.2</td>
    <td>REVISED. Reconstituted all scattered notes. Updated notes for API level 17 </td>
  </tr>
</table>

<h1 class="chapter">INTRODUCTION</h1>

These are my notes for android programming. This is a not a tutorial, altough it may seem to be. They are closer to a cheat sheet rather than a detailed beginner's tutorial. These notes date back to late 2010 but they are updated from time to time. I could have missed some updates and you may still find some references to API level 6 (Eclair) &mdash; I'll get around to fixing those kinds of things when I get the time. 

While Eclipse and Netbeans are excellent IDEs, there will be no reference to either on these notes. Firstly because I don't much use them, I can if I am really forced to, but I'd rather not. These exercises were built using just the android SDK, Apache ANT, JDK and a simple programmer's editor.

I wrote this for an internal skill building exercise, which never materialised. It doesn't mean I should not compile it as part of my notes. 

<hr class="chapterbreak"/>

<h1 class="chapter">BASICS</h1>

You can create the project structure by hand but I don't know of anybody (personally) who actually does that. Unless you are trying to prove something to yourself, use the SDK tools. There could be other ways to create the android project structure, *maven* perhaps, but I did not invest time using that maven route, so *android sdk* it is.

The android SDK includes everything you will need to create, compile, debug and install your projects. To create a project, follow the command below

<pre>
android create project 
				--target 15
				--activity First
				--package com.thelogbox
				--path first
</pre>

1. *target* requires an integer value which corresponds to API level. In our example the integer value 15 corresponds to Ice cream Sandwich. You can find [API levels and platform information  on the developer.android.site](http://tedhagos.com/java-programming/)
2. *activity* flag lets you name a default *Activity* class that will be created as part of the project.
3. *package* flag is folder organisation for the source of your project. This is exactly like the *package* directive in Core Java Programming. I suggest that you do not skip this and use the conventional reverse DNS notation.
4. *path* flag becomes the root folder of your project. All the other boiler plate files of android will be relative to this folder.

The SDK tool will do some basic scaffolding for you and produce  the following files and folders.

<img src="/img/android-project-structure.png">
<div id="cap">Fig 1: Android Project Structure</div>

You will spend a lot of time on the Activity source file *First.java* and *main.xml*. These are the two files that affects the user interface and the entry point of your app.

The files created by the android tool actually does include a *Hello World* example. The only thing left to do at this point is to compile your app.

***

## COMPILING AND BUILDING

Android apps are not like desktop apps. While you work with the source files and other project assets on your PC, testing and running them will not be on your PC &mdash; even the AVD is technically not your PC, it is an emulator after all.

Get your android device and make sure it is properly configured for application development. You need to do the configuration on your device. Make sure that *USB debugging* is enabled. When that is done, hook it up to your development machine. Run <code class="codeblock">ant debug install</code>.

You need to use the *debug* target because you haven't generated any developer certificate yet. If you simply ran <code class="codeblock">ant install</code>, the build tool will look for a proper certificate so it can sign the .*apk* *(Android Package) &mdash; you don't have that yet, so use the debug target.  

You haven't messed around with the codes yet. All the project assets are still in pristine condition and fresh as a daisy, so there is no reason for the compilation and installation to fail. Wait for a while until ANT finishes its task then inspect the physical android machine. You should see the *Hello World* app.


***
## APPLICATION LIFECYCLE


<img src="/img/android-lifecycle.png">






