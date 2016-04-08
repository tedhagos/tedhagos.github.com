---

title: 4.1 Activities
lastupdated: 07 April 2016

---


An Activity is single screen that a user sees in your application. They are the primary ways for your application to communicate with the user. Data is captured and shown to the user by means activities.  For old Java programmers you might remember these as analogous AWT/Swing Frames, for .NET devs these are Windows.Forms and for the web developers, these are HTML+CSS+Javascript. It is the stuff of user interfaces.



## Internals of Activities

An activity is generally made up of two files. An XML file which defines what the screen looks like. How many buttons, does it have menus and can it accept input via textfields etc. The other file is java source file. It contains instruction on what to do when a button is clicked or what to get from a database etc. It is possible to define the activity just in the java file, but that is not the usual way of building activities. If I 
may say so, that is not a very practical nor ideal way of building activities.  

{% highlight xml %}
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
                xmlns:tools="http://schemas.android.com/tools"
                android:layout_width="match_parent"
                android:layout_height="match_parent"
                android:paddingLeft="@dimen/activity_horizontal_margin"
                android:paddingRight="@dimen/activity_horizontal_margin"
                android:paddingTop="@dimen/activity_vertical_margin"
                android:paddingBottom="@dimen/activity_vertical_margin"
                tools:context=".MainActivity">

  <Button
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="New Button"
    android:id="@+id/button"
    android:layout_alignParentTop="true"
    android:layout_centerHorizontal="true"
    android:layout_marginTop="90dp"/>
</RelativeLayout>
{% endhighlight %}




The MainActivity.java file is shown below

{% highlight java %}
// filename: MainActivity.java
package com.thelogbox.myapplication;

import android.app.Activity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;


public class MainActivity extends Activity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
  }
  // other parts of the activity
}
{% endhighlight %}




## Activity Life Cycle

As an activity goes through its life cycle, the runtime will communicate with your activity object by raising certain events. When the runtime raises an event, it will invoke specific methods on the activity object. If you want respond to these events, you simply need to implement specific **hook methods**.  

![Android Activity Life Cycle](images/activity_lifecycle.png)

onCreate
: This method will be called when the activity is created, obviously.  If you want to setup data sources, this would be a good place to put it. You cannot display anything during this period though. Nothing is visible at this point just yet

onStart
: When this is called, you can start drawing on the screen 

onResume
: This method will be called the first time the Activity is about to run. It can get called many times over during the life of the activity. For example, when the user is playing around with your app, the app has the focus, if the user responds to a phone call then plays with your app again after the phone call, the runtime will call **onResume** everytime your app gets the focus

on Pause
: If another application grabs the focus away from your application, but the application is still visible, it will be paused

onDestroy
: When the application exits, or forcibly shutdown by the runtime for some reason







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

