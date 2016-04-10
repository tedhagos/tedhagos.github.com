---

title: CLI Development Environment
lastupdated: 08 April 2016

---

Download the precompiled binary installer from [developer.android.com download page](http://developer.android.com/sdk/index.html). If you choose to download Android Studio, it will also install the SDK. You may choose to download just the SDK and not Android Studio. There is a section on the download where it specifically says "get just the command line tools".  The android sdk command line tools will need the java development kit and apache ant installed. 

The installer comes in a compressed file. Decompress it and place it somewhere in your disk where you have read, write and execute permissions. 

{% highlight bash %}
mv /path-to-downloaded-binary/android-sdk_rversionno-yourOS.tgz .
tar -xzvf android-sdk_rversionno-yourOS.tgz
mv android-sdk_rversionno-yourOS android-sdk
{% endhighlight %}

The third command was not necessary, I simply prefer the shorter folder name "android-sdk". You may leave the default folder name if you wish.  The directory structure of the SDK is as follows

    ├── add-ons
    ├── build-tools
    ├── docs
    ├── platforms
    ├── platform-tools
    ├── samples
    ├── sources
    ├── system-images
    ├── temp
    └── tools

Add "tools" and "platform-tools" to your system path. Restart your shell or terminal appropriately so that the new environment settings will take effect. The sdk comes complete with tools and utilities that you will need to develop android applications, there are quite a few of them. Here's some of them.

android
: probably the command you will use the most. This command can manager projects and virtual devices. It can also launch the graphical SDK manager tool that lets you download android packages (API levels or versions), tools and some other extras. The manager can launch the avd (android virtual device) which is another manager. The avd lets you define and start emulators which you can use for testing applications

emulator
: manages virtual devices

adb
: the android debug bridge is a client-server debugger

monitor
: graphical tool that is used for debugging and analysis. It now encapsulates other tools such as ddms, traceview, systrace, hierarchy viewer

## Create a Project

{% highlight bash %}
android create project --path hello --activity Hello --target 23 --package com.tedhagos
{% endhighlight %}

--path
: this will become the project folder. In the example above, a folder named "hello" will created in the current working directory where  `android create` was invoked

--activity
: a java class named "Hello.java" will be created

--target
: the API level or android version

--package
: the company domain of your project. This is ideally your website (as a company or individual developer) in reverse dns notation. This also dictates the file organization of your java codes. In this case, the main source file will be located in `hello/src/com/tedhagos/Hello.java`

The `create` project command will generate the following files and subfolders.

    .
    ├── AndroidManifest.xml
    ├── ant.properties
    ├── bin
    ├── build.xml
    ├── libs
    ├── local.properties
    ├── proguard-project.txt
    ├── project.properties
    ├── res
    │   ├── layout
    │   │   └── main.xml
    │   └── values
    │       └── strings.xml
    └── src
        └── com
            └── tedhagos
                └── First.java


## Virtual Devices

{% highlight bash %}
android create avd --name marshmallow --target android-23 --abi default/x86
{% endhighlight %}

The above command will create a virtual device that we can use for testing.

--name
: you can choose whatever name you want. This is programmer defined

--target
: API level of the virtual device

--abi
: system image that will be used for the device. Only put images that are already dowloaded by the android sdk manager

You can launch the emulator using the command

{% highlight bash %}
emulator -avd marshmallow
{% endhighlight %}

## Debugging 

Once the emulator has been launched, we can connect a debugger to it. We will use the android debug bridge.

{% highlight bash %}
adb devices
{% endhighlight %}

You should see the emulator device listed on the screen. Connect to it using the command

{% highlight bash %}
adb connect [ipaddress]:[portno]
{% endhighlight %}

We can now attach the debugger to running emulator.

{% highlight bash %}
adb logcat -c
adb logcat
{% endhighlight %}

The first command will clear the logcat buffer, it is a good idea to start with a clean slate during debugging. 

Edit the file `Hello.java`, we won't do anything significant with it yet, but we will add some debugging codes inside the onCreate method.  

{% highlight java %}
package com.tedhagos;

import android.app.Activity;
import android.os.Bundle;

public class Hello extends Activity {

  /** Called when the activity is first created. */
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.main);
  }
}
{% endhighlight %}

Insert  the statement `System.out.println("Hello World");` anywhere inside the onCreate method. Then use the command below to build and install an android package for hello project.

{% highlight bash %} 
ant debug install
{% endhighlight %}

If an android emulator or a physical device is connected to the computer, the android debug bridge would have kicked in as part of the build process and automatically install the apk on the device. A stream of debug messages also passed through the logcat screen. Everything that happens on an android device is captured by logcat. In order for us to see our simple hello message, we need to filter the logcat output. Kill the `adb logcat` sesssion, **ctrl+c** usually does the job. Then restart the debugger with a filter.

{% highlight bash %}
adb logcat -c
adb logcat | grep System.out
{% endhighlight %}

Edit the Hello.java source file and override the onBackPressed method

{% highlight java %}
package com.tedhagos;

import android.app.Activity;
import android.os.Bundle;

public class Hello extends Activity {

  /** Called when the activity is first created. */
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.main);

    System.out.println("Hello");
  }

  public void onBackPressed() {
    super.onBackPressed();
    System.out.println("Back button was pressed");
  }
}
{% endhighlight %}

Rebuild and reinstall the apk to the emulator.

{% highlight bash %}
ant debug install
{% endhighlight %}

You should see the hello message by now. Try clicking the back button of emulated phone.

## Using logcat in your applications

The System.out is quite handy for debugging, but the preferred way to create debug messages is to use the Log class. Rewrite the Hello.java activity file and replace the System.out statements with Log statements.

{% highlight java %}
package com.tedhagos;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;

public class Hello extends Activity {

  private static String TAG = "Hello";
  /** Called when the activity is first created. */
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.main);

    Log.d(TAG, "Hello");
  }

  public void onBackPressed() {
    super.onBackPressed();
    Log.d(TAG, );
  }
}
{% endhighlight %}

The Log class is from the package android.util, make sure to include it in your import statements. Next, we will restart the android debug bridge and apply a new filter to logcat. The first argument to the Log.d method is a String value. You can put whatever you want in this value, in our example above, I set to the same value as the name of the activity. 

{% highlight bash %}
adb logcat -c
adb logcat | grep Hello
{% endhighlight %}

Rebuild and reinstall the android package to the emulator

{% highlight bash %}
ant debug install
{% endhighlight %}

## Shell access to the Emulator or Device







## References

1. developer.android.com [download page](http://developer.android.com/sdk/index.html). Retrieved 08 April 2016
2. developer.android.com [Log class](http://developer.android.com/reference/android/util/Log.html)

