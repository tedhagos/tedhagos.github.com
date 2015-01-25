---

title: Switch JDK on OSX
author: Ted Hagos
categories: java

---


To set the `JAVA_HOME` variable on OSX, use the tool `/usr/libexec/java_home` on a terminal window. That command will echo where the current JDK is pointing to. You can copy the output  of that command from the clipboard with this command

`$ /usr/libexec/java_home | pbcopy`

then update the **~/.bash_profile** so you can export the JAVA_HOME variable. Tools like Apache Ant and Maven expects this variable to be present in order to locate the installed JDK on your system. Some IDEs like Android Studio also expects to find this variable defined somewhere in your system. 

Alternatively, you can add this line to the **/.bash_profile**

~~~
export JAVA_HOME=$(/usr/libexec/java_home)
~~~

## When you have more than one JDK installed

If you have JDK 1.5,1.6,1.7 and Java 8 installed on the Mac, `java_home` will point the most recent version of JDK you installed.  There used to be a way in OSX to switch JDKs, it was a utility called **Java Preferences**. It's gone now. It has been gone for quite some time. If you want to see all the JDKs installed in your system, run this command

~~~
$ /usr/libexec.java_home -V
~~~

You might be tempted to fool around with symlinks in order so switch between one version of the JDK to another. Don't. It's a bad idea, especially if you are not very handy with the SHELL. Use the `java_home` tool instead.

I found the script floating around on the internet while I was searching for a solution on how to safely switch from one version of the JDK to another.  

{% highlight bash %}
function setjdk() {  
  if [ $# -ne 0 ]; then  
   removeFromPath '/System/Library/Frameworks/JavaVM.framework/Home/bin'  
   if [ -n "${JAVA_HOME+x}" ]; then  
    removeFromPath $JAVA_HOME  
   fi  
   export JAVA_HOME=`/usr/libexec/java_home -v $@`  
   export PATH=$JAVA_HOME/bin:$PATH  
  fi  
  echo JAVA_HOME set to $JAVA_HOME  
  java -version  
 }  

function removeFromPath() {  
 export PATH=$(echo $PATH | sed -E -e "s;:$1;;" -e "s;$1:?;;")  
}
{% endhighlight %}

You can append this to **~/.bash_profile** so it is available everytime you open a terminal window. 

This is how to use it

~~~

$ setjdk 1.7 // to use JDK 7
$ setjdk 1.8 // to use JDK 8

~~~

## References

1. [developer.apple.com/java_home](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/java_home.1.html)
2. [raibledesigns.com/installing openjdk on osx](http://raibledesigns.com/rd/entry/installing_openjdk_7_on_os)
