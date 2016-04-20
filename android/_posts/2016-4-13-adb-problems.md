---

title: 02.8 adb issues

---

## adb server out of date - linux

**Environment**. OS is Lubuntu 15/Linux Mint 64 bit. Emulator used is Genymotion. IDE is Android Studio 2
**Problem**. Cannot connect to adb server via the command line. Simple commands like `adb devices` produces the out of date error

{% highlight bash %}
adb server is out of date.  killing...
cannot bind 'tcp:5037'
ADB server didn't ACK
* failed to start daemon *
error:
{% endhighlight %}

### Posible Solutions

**Do not use the Genymotion SDK**. When you launch genymotion, go to "Settings" then "ADB". Choose "Use custom SDK" then provide the path to your android sdk.

**Remove any android-tools** that may have been installed on your machine. You can check if the adb tool shows up on the `which` command.

{% highlight bash %}
ls -l `which adb`
{% endhighlight %}

If it shows up in a place other than /path-to/android-sdk/platform-tools, then you might have a copy of adb that is not part of the android sdk distribution. 

You can try to remove the non-sdk copy of adb, perhaps using

{% highlight bash %}
sudo apt-get purge android-tools-adb android-tools-fastboot
{% endhighlight %}

Alternatively, you can simply navigate to the directory of your android-sdk and invoke the adb command directly from there.

{% highlight bash %}
cd /path-to/android-sdk/platform-tools/
./adb services
./adb shell
{% endhighlight %}

Remember to replace /path-to/android-sdk/ with your own path to the android sdk. If you are using the sdk that came with an Android Studio installation, chances are, the sdk is located /home/your_username/Android/Sdk. So use the following command

{% highlight bash %}
cd 
cd Android/Sdk/platform-tools/
./adb services
./adb shell
{% endhighlight %}

The above command is not a typo. The first cd command, without any argument, will take you to your home folder.






