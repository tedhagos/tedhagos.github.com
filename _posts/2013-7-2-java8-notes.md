---
layout: post

excerpt: You can get Java 8 by way of <a href= "http://www.oracle.com/technetwork/java/javase/downloads/ea-jsp-142245.html">Oracle Early Access</a>. This is a mainstream, run of the mill installer though. That means you install this on a machine, it takes over the Java environment for that machine. Don't do that! Not to your workhorse and go-to machine. Do it a VM, it is safer and prudent that way.

title: Getting into grips with Java 8 
description: Learn how to install Java 8 Eary Access without messing around your stable dev environment

categories:
- java8
- jdk8
- early_access

---


You can get Java 8 by way of [Oracle Early Access](http://www.oracle.com/technetwork/java/javase/downloads/ea-jsp-142245.html). This is a mainstream, run of the mill installer though. That means you install this on a machine, it takes over the Java environment for that machine. Don't do that! Not to your workhorse and go-to machine. Do it a VM, it is safer and prudent that way.

On a Debian VM or Debian-ish machines, it can be pulled from the repos

{% highlight bash %}

sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java8-installer

{% endhighlight%}

The Windows installation should be easy to figure out, there is no need to write it here.  

**If you cannot go the VM route** you can still try out Java 8. There is a downloadable version of Java 8 Development Kit at [java8.jdk.net/download](http://java8.jdk.net/download.html)that does not require installation. You may need to figure out how to use side-by-side with your other installation of the JDK though. For my Mac setup, this is what I did

1. Download the installer from [java8.jdk.net/download](http://java8.jdk.net/download.html) or [java8.jdk.net/lambda](http://java8.jdk.net/download.html), the second one is larger and has lambda support
2. Extract the contents and tuck it away somewhere
3. Create softlinks to the java8 executables, might be a good idea not to override your usual **java** and **javac**. I named mine **java8** and **javac8**

{% highlight bash %}

sudo ln -s /somewhere/jdk8/bin/java /usr/bin/java8
sudo ln -s /somewhere/jdk8/bin/javac /usr/bin/javac8

{% endhighlight%}

I hope some people in the community will already invest sometime on something like rvm for Java, so I won't have to do this with Java 9 


