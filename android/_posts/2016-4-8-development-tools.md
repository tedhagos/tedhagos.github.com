---

title: 02.4 Development Tools

---

In the early days of Android, there were no integrated development environments. You only have the SDK which is just a collection of command line tools and build scripts. As Android grew in popularity, people wrote plugin software so that they can use the SDK from within their preferred IDEs such as Eclipse, Netbeans and IntelliJ, just to name a few.  Some people preferred to keep it simple and use nothing more than a plain programmer's editor and the command line tools. 

You may still develop android apps without the aid of an IDE if you so choose. To use only the most minimum of tools is quite instructive, just keep in mind that the IDE is a time-saving device.  

Eclipse users can integrate the Android SDK using the ADT plugin and Netbeans users can integrate the SDK using the NBAndroid plugin. IntelliJ used to have a plugin for the SDK, but since Android Studio came about, the SDK plugin for IntelliJ was no longer necessary. Android Studio is based on IntelliJ and it is the official IDE for Android development.

## Android SDK Tools

emulator
: an implementation of the android vm. This is what you can use for testing your applications

android device monitor
: this is a debugger. You can see threads, processes, the stack and heap etc

android debug bridge
: 
 
## Emulator

## Android Device Monitor

## Android Debug Bridge

ADB is a client-server application that lets you connect with an Android device or emulator. It is made up of three things, a daemon process on the emulator,  a service that runs on your PC and client applications that talk to the daemon via the service. The adb is responsible for things like installing applications on the device, logging, creation of databases, pushing and pulling of files to/from the the device etc. 

You will rarely have to bother with the adb when using an IDE because the actions of adb are automated and well hidden under menus and wizards.

{% highlight bash %}
adb start-server
{% endhighlight %}

You should get a reponse, something like the one below

~~~~
 ⟶  adb start-server
* daemon not running. starting it now on port 5037 *
* daemon started successfully *
~~~~

Check to see if it's really opened a port on 5037.

{% highlight bash %}
lsof -i tcp: 5037
{% endhighlight %}

Next, query if there are any devices attached, virtual or otherwise

{% highlight bash %}
adb devices
{% endhighlight %}

If you haven't connected any physical device nor started any virtual device, the command above should return nothing. Next, start a virtual device either using the AVD or Genymotion, then use the `adb devices` command again. You might see something like

~~~~
 ⟶  adb devices
List of devices attached
192.168.56.101:5555	device
~~~~

{% highlight bash %}
adb connect 192.168.56.101
{% endhighlight %}

## References

1.  Android Developer Site [Eclipse ADT](http://developer.android.com/tools/sdk/eclipse-adt.html)
2. Android Developer Site [ADT support has ended](http://developer.android.com/tools/help/adt.html)