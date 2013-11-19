---
layout: java

title: Key concepts 

description: 

excerpt: 

author: Ted Hagos

lastupdate: November 18, 2013

tags:
- concepts

categories:
- java

---


**Java is a compiled language.** You need to write the programming statements in a source file, compile them to produce an executable format or object code and finally run the executable file. If you did not make syntactical mistakes the source code will compile without problems. If you did commit syntactical errors then the compiler will not let you through, you will not be able to produce an executable format of your source program.

A Java source file (also called a compilation unit) is a simple text file. You can use basic text editors to create and edit a source file. The choice for program editor is at best, a matter of preference. The only requirement for the text editor is it can write in ASCII format &mdash; better yet if it can handle UNICODE. So pick any that catches your fancy.

A Java source file will bear the extension .java, no matter which platform you are using. Don't worry that the extension doesn't follow the usual three letter format, the popular OS platforms can handle that kind of file.

**Java is an Object Oriented language.** This has many consequences that affects you as a programmer, but right now, it affects what we can write inside our very first source file. You can write only classes and interfaces inside a source file. For our first example, we will write a class and not an interface &mdash; interfaces are advanced constructs in Java, we will leave that for later. Inside classes, you can write variables, methods and program statements.


**The source file cannot be ran directly on your platform.** It needs to be compiled. If you have installed the JDK (Java Development Kit) properly on your platform, you can already use the java compiler. The compiler takes on a source file (or source files) as an argument and turns them into executable files. These files do not have .com or .exe extensions, they have .class extensions instead.

**You cannot run .class files directly on top of your OS.** Java executables run inside a special environment called the JRE (Java Runtime Environment). To run Java object files, you need to invoke the JRE and pass the name of the Java executable as a command line argument like this — <code class="codeblock">$ java executable_file</code>