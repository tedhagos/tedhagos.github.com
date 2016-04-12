---

title: 2.7 cannot  find build.xml

---


{% highlight bash %}
 BUILD FAILED
 /Users/ted/workarea/android-training/practice 
 /helloworld/    build.xml:83: **Cannot find /Users/ted/
 progtools/android-sdk-macos/tools/ant/build.xml**
 imported from /Users/ted/workarea/android-training/
 practice/helloworld/build.xml
 
Total time: 0 seconds
{% endhighlight %}

If the error above happens to you, you have an ant build script problem.  It says it cannot find the build.xml file.  The build file ant is looking for is located at `/path-to-android-home/tools/build.xml`, **path-to-android-home** is the directory where you installed the android sdk.  

One thing you can try to fix this error is to open the **local.properties** file. It is located on the top level folder of your android project.

{% highlight bash %}
sdk.dir=/path-to-android-home
{% endhighlight %}

Make sure that the value of sdk.dir is pointing to folder where your android sdk is installed.

To fix this error, you need to make sure that the value of **SDK.DIR** inside the local.properties file is pointing to the correct location. The local.properties file is located on the top level folder of your android project.

