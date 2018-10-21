---
title: Android Activities and layouts
layout: post
categories: android
permalink: /posts/android-activities-layouts/
comments: false
image: /images/android-lifecycle.png
date:   2012-10-20
---



Most programs need an entry point or a beginning routine where all execution begins. Even the lowly "Hello World" in Java requires a `static void main` as an entry point. Android programs are the same, it also needs it’s own version of the “function main”.  But the entry point of an Android program isn’t just a function called “main”, —  it’s a bit more involved than that.  

# Android's Trinity of Main

A simple app in Android that will show a single screen to the user requires three things, (1) an Activity class which acts as the main program file (2) a layout file which contains all UI definitions, and (3) a Manifest file,  which ties all the project's components and resources together — all Android programs require this manifest file. If you still remember working with JavaBean's manifest file, this is sort of like that. It describes the contents of the project.

When an application is launched by a user, the Android runtime creates an Intent object and inspects the contents of the manifest file. It's looking for a specific value of the `intent-filter` node, the runtime is trying to determine if this application has defined a "main function" in it. Listing 1 shows an excerpt from an a manifest file, this one has a "main function" defined in it.  

**Listing 1. Excerpt from AndroidManifest.xml**

```xml
<activity android:name=".MainActivity">
  <intent-filter>
    <action android:name="android.intent.action.MAIN" />

    <category android:name="android.intent.category.LAUNCHER" />
  </intent-filter>
</activity>
```

An `intent-filter` that has a value of `android.intent.action.MAIN` means that this Activity has indeed, an entry point. There's one more thing we can reckon from Listing 1, not only do we know that the app has an entry point, we also the name of the entry point, the value of the `activity` attribute denotes the name of the class which will run first when the app is launched. In our example manifest shown in Listing 1, the class name is "MainActivity"

## Main Program file

The main program of a project is an Activity class. When you use a tool like Android Studio to create your project, whatever name you use for your Activity class is automatically added to the manifest file, so you won't have to worry about adding it to the manifest anymore.  

An Activity is single screen that a user sees in your application. They are the primary ways for your application to communicate to the user. You will capture inputs with them and you will show outputs using them. If you  built Java applications for the desktop before, you might think of them as AWT Frames. 



This class has to inherit from the `android.app.Activity` class or any one of its children.  



## Layout file





#  Life Cycle of an Activity





The manifest, main program and main layout file are the bare minimum files we need to make a simple application. We need all three to create an entry point to our app, we will compose our “function main” using these three.



An Activity is;

- One of the four components of Android
- Contains pre-built codes that we can use to show UI elements to the user
- A focused thing that a user can do e.g. read a single email, type an SMS message etc.



---

Photo credit: developer.android.com

 