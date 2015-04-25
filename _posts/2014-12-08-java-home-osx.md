---

title: Java Home Variable
author: Ted Hagos
categories: osx

---


Mac OSX no longer includes Java. You need to install it on your own. The installation is straightforward, the Oracle site has an installer for OSX, just get that. The installer executes without issues and it automatically includes the Java executable to the system path.

The JAVA_HOME variable, however, is a different matter. The installer will not automatically create an entry for it. Some tools like ANT or Maven and some software like Tomcat does require that the JAVA\_HOME be set, lest you will have some annoying command line issues with the tools.

There is a command line tool in OSX which points to the folder where Java is installed, the command is `/usr/libexec/java_home`. If you run it from a terminal app, it will point to the installation folder of the JDK. You can cut and paste the location of the folder in your **~/.bash_profile** so the JAVA_HOME variable will always be set when you use a terminal window. Or, instead of cutting and pasting the result of `/usr/libexec/java_home`, you can execute it as part of your startup script. Add the following line to  `~/.bash_profile`. 

~~~ 
export JAVA_HOME=$(/usr/libexec/java_home)
~~~
