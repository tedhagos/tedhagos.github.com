---

title: Activities
author: Ted Hagos
categories: android

---


An Activity is single screen that a user sees in your application. They are the primary ways for xyour application to communicate with the user. You will capture inputs with them and you will show outputs using them. If you  built Java applications for the desktop before, you might think of them as AWT Frames. 

An activity is made up of two files. An XML file which defines what the screen looks like. How many buttons, menus and textfields it has etc. The second one is a Java source file which contains all the programming logic that will support the behavior of the screen. If you want something to happen when a user does something to the screen e.g. inputs a text or clicks a button, you will write that program logic on the Java source file.

We will create another Hello project in this chapter

Create another project with the following details.

1.  **Application Name** is Hello
2.  **Minimum SDK** is API 15
3.  Use a **Blank Activity**
4.  **Activity Name** is Main

## The XML file

The XML file for an Activity will be stored in **Hello/app/src/main/res/layout** folder. There will be one XML file for each Activity. If you only have one Activity in your application, then there will only be one XML file in this folder. If you have several screens in the app, there will be several XML files here, one for each screen. 

~~~
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:paddingLeft="@dimen/activity_horizontal_margin"
    android:paddingRight="@dimen/activity_horizontal_margin"
    android:paddingTop="@dimen/activity_vertical_margin"
    android:paddingBottom="@dimen/activity_vertical_margin"
    tools:context=".Main">

    <TextView
        android:text="@string/hello_world"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content" />

</RelativeLayout>
~~~


## Java source file

This is just filler text. Delete this at once, once you find it

What is it
Why do I care
What is it made of

-   Java file. What, where is it. how di we get it.what's in it, what are they for
-   Layout file. What. Where is it. How did we gert it. What's in it
-   how are the two related. Via setcontentView nad R.layout.main &#x2013; what's that. Well the appt (Android Asset Packaging Tool) will compile all layout and values XML. It will produce the the R clas which you can use to get a programmatic reference to Views and resource bundles you have defined.

## Multiple Activities

# scratch

An Activity is a screen. It is the visible part of the Android application. 

What is it made of - a java file and an XML. It describes in XML what the screen should look like, will it have buttons, text fields etc. Will the Buttons stretch vertically or horizontally etc

What about it, what do they need to know

Create it. which is covered already but recapitulate it
Point out min sdk
package
name of Main Activity

Show the project structure again

What is Main.java
The visual content, is referencing R.layout.main 
What does setContentView does. Where did we get it
What does it mean that it extends androiv.view.Activity

Manifest

activity declaration
  intent filter, why is it important. It tells the Android runtime, that this is the activity that should be launched when the application is launched by the user. When you launch me, launch this activity first.

What about another activity.
  how to add another activity

What to put
 onCreate, why does it have super.onCreate(), then setContent again
 create another XML file, how in Android Studio. will the name of the XMLs case sensitive

How to put some things inside the screen file

Simple way to launch another Activity, use the XML for declaration

Why do we have add the second activity into the Manifest, because it will throw an ActivityNotFoundException - How did we know. Because I launched the DDMS. I need to tell them about the DDMS

What happens if you omit the setContentView of the second Activity, well, you will launch the second activity but you won't see anything

This needs a video supplement

Summary

AndroidManifest controls everything
What it takes to add a new activity, create a Java file, create an XML, define in manifest and how to launch another activity is to use Intents, Excplicit intents

