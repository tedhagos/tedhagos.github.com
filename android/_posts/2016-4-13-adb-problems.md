---

title: 2.8 adb issues

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

**Possible solutions**





