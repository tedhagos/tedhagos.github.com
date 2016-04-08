---

title: 1.2 What is it

---


Android may refer to many things, some people use it to refer to their mobile device and some others use the term to refer to the programming environment. That’s fine. For our purpose, what we mean by Android is a platform which have runtime components where mobile apps can run.

This platform is special version of Linux that is optimized for mobile devices. The Linux part takes care system services e.g. network and file operations, concurrency etc. The platform includes a bunch of other things like WebKit which is the same browser engine that powers Chrome and Safari. It also has SQLite which you can use for database programming. It has other components useful for application development, but instead of listing all of them here, I will point them out in later when we need to use them.

The one other thing to point out in the Android software stack is the framework. The framework lets us do things such as create screens, write code that runs in background, listen to some events that may happen on the mobile device (and do something about it). The platform enables us to do all these things by simply extending existing classes in the Android SDK.

Extending classes means utilizing the inheritance mechanism of Java to reuse existing functionality. The Android development team already wrote codes to display buttons and textfields for example. All we need to do, is to reuse them, mash them up or mix it up so we can use them in our own applications.

The Android SDK is a collection of tools and code libraries. SDK is short for software development kit. You will need to download, install and configure the SDK before you can start any development work.

## What it isn't

Application layer
: it has an application layer, but Android itself is more than just an application layer. It has the full stack, including the operating system. Unlike application layers such as the Series 60 UI of Nokia, it requires to be ran on top of the Symbian platform. The S60, by itself is not self-sufficient. Android comes with batteries included.

Java ME implementation
: Android apps are written using the Java language, but the runtime is not a Java Virtual Machine. It is a Dalvik VM. Those two are not the same, they maybe mostly compatible, but they are different

A mobile phone
: Android includes a reference design so that hardware manufacturers maybe able to produce "Android" phones. There is no single Android phone, unlike the iPhone.


