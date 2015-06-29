---

title: Cannot Find Build.xml
author: Ted Hagos
categories: android

---

After running `ant debug install`, an error happens. 

    BUILD FAILED
    /Users/ted/workarea/android-training/practice
    /helloworld/    build.xml:83: Cannot find /Users/ted/
    progtools/android-sdk-macos/tools/ant/build.xml 
    imported from /Users/ted/workarea/android-training/
    practice/helloworld/build.xml
    
    Total time: 0 seconds

This is a build script problem. What the error tells us is that, it cannot find **build.xml**. How can that be? The android SDK tools actually setup up everything for us, the ant build script is one of the artefacts created when you start a new android project. There could be lots of reasons, but this particular error happened to me because I was using two machines for program development. And that I forgot to include the **local.properties** in the .gitignore file. So the settings and properties on one machine spilled over to the other development machine. 

If you inspect the build.xml in your android project folder, you will find out that it is actually importing another **build.xml**, a generic one. This generic build.xml is located at `SDK.DIR/tools/build.xml`. SDK.DIR is the folder where you installed the Android SDK when you downloaded it. 

The following example downloads and installs the android SDK

{% highlight bash %}
$ mkdir ~/progtools
$ cd progtools
$ wget http://dl.google.com/android/android-sdk-linux.tgz
$ tar -xzvf android-sdk-linux.tgz
{% endhighlight %}

This will create a folder named `~/progtools/android-sdk-linux/`. This is the SDK.DIR

To fix this error, you need to make sure that the value of **SDK.DIR** inside the local.properties file is pointing to the correct location. The local.properties file is located on the top level folder of your android project. 


