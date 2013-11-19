---
layout: java

title: Beginning to program

description: Diving into the first program of Java

excerpt: 

author: Ted Hagos

lastupdate: November 18, 2013


tags:
- program
- basic

categories:
- java

---

There are many kinds of Java programs. Some run on webservers (servlet & JSP), some inside browsers (applet) and some on mobile platforms (android). Some Java apps run on the desktop and there are two kinds of those, one with GUI and the other without &mdash; these are called CLI or Command Line Interface applications. We will create a CLI app for this chapter.

<img src="/img/coding-process.png"/>


Before we begin writing programs, I suggest that you create a folder for purposes of trying out the samples in this material. It is best to name the folder without special characters or whitespace.

Create a file named Hello.java. For now, just copy the contents from the sample code below

{% highlight java %}

/**
*
* Our first program
*
* This is a block comment
*
* */
   
class Hello {
  public static void main (String [] args) {
    System.out.println("Hello World\n");
  }
}

{% endhighlight %}



Compile the source file using <code class="codeblock">javac Hello.java</code>. You will have a file named *Hello.class* as a result of the compilation. Use the command <code class="codeblock">java Hello</code>. Do not include the extension *.class* when running Java programs, only the file name portion of the resulting *.class* file is required.

If you typed your program exactly as it appeared in Fig 1.1 the program should compile without problems. If you encountered any compilation error, to back to the program editor and check the  spelling of each and every word. Make sure you did not miss a curly brace or perhaps spelt <code class="codeblock">main()</code> as <code class="codeblock">Main()</code>. Java is case sensitive &mdash; *main* is different from *Main*. When you are sure that the program is free from syntactical errors, compile it again, then run.  

The output of the sample code is, of course, "Hello World". True to tradition of every beginning programmer since Kernighan and Ritchie first started it on the first edition of the C Programming Language in 1969. 

Unexciting as the output maybe, it is simple yet rich enough to get our feet wet in Java programming. You need to get used to the structure of the Hello program because a lot of the codes you will write starts out this way. 


***

The first seven lines of the Hello program are *comments*. These are non-executable statements and you can put them anywhere &mdash; inside or outside a class. You can write comments in three ways. 

1. **//** &mdash; This is an in-line comment, effective only on the current line. Anything to the right of this comment is ignored. This is suitable for commenting individual lines of code
2. <code class="codeblock">/\*   \*/</code> &mdash; This is a block comment, anything in between the inner asterisks will be ignored by the compiler. These can span multiple lines
3. <code class="codeblock">/\*\*   \*/</code> &mdash; Another block comment that is used by JavaDoc, don't worry about this right now. Just experiment with these three for the time being

After the comments is a class block. Everything inside the outermost pair of curly braces is the class block. Java is an OO language, and a strict one at that. You cannot write anything meaningul outside a class or interface. Even a simple output to the screen has to be within the context of a class. This is the reason why you need to be very comfortable with the structure of the Hello program as early as now or you will not go very far otherwise. 

A Java class is constructed using the keyword <code class="codeblock">class</code> followed a *class name*. The class name is something that you will define, in our example, the name of the class is *Hello*. The class name is followed by a pair of curly braces. Anything inside the curly braces constitutes the body of the class. 

<pre>
  
  // cannot write methods and variables here
  // only import, package statements and 
  // comments are allowed outside
  // the class 
  
  class Hello {
    // methods and variables goes here
  }
</pre>

You might have noticed that our example class name is *Hello* and that is stored in a file named *Hello.java*. That is incidental and not a requirement at all. It would have been a requirement if we made the class *public*. &mdash; the *public* keyword is an access modifier, but don't bother with that for the moment, you will have a chance to study its effects on coding later on.

If we changed our construction to declare a public class, like in this

<pre class="codeblock">
  public class Hello {
  	public static void main(String args[]) {

  	}
  }
</pre>


then it becomes mandatory that the name of class be consistent with the name of the source file. There is a rule in Java programming that a source file can only contain, at most, one public class and if a class is defined as public in a source file, then name of the source file must be consistent with the name of the public class &mdash; this is one of the many rules you need to be acquainted with Java.

The name of the generated object file was *Hello.class* not because the name of source file is *Hello.java* but because the name of the class is *Hello*. The name of class affects the name of the object file. 
 
Like most programming languages, a Java program needs an entry point. In this case, that is the <code class="codeblock">main()</code> method &mdash; a method and a function are technically the same. The semantic difference has got something to do with OOP philosophies. We won't bother with that right now, but you need to get used to the term method, rather than function.

Having a *main* method is not a requisite for compilation. It is a runtime requirement. Any class that you will pass on the JRE requires a main function. Not all classes will require this function, only those classes that you will use as a starting point of your program. In our example, class Hello is a program starting point. 

Java has a very specific format for a main function. The function needs to be *public*, *static* and *void* &mdash; these are reserved words in Java. Each have a specific action but we will defer their discussion for later. 

Inside the main function is *System.out.println()* statement. This is a very common command in Java. You can practically put anything inside the parentheses and it will be printed to the screen. The string literal "Hello World" was placed inside the function *println()*. String literals are defined be enclosing words using a pair of double quotation marks. You cannot define a string literal using single quotes &mdash; that results into a different action.

Lastly, all statements in a Java program are terminated by a semicolon. The white space in Java has no meaning. Indentations in Java also have no meaning, hence, you need to use the semicolon to intstruct the compiler that you are done with what you want to say. Best to keep this rule in mind, a lot of the first few rookie mistake you will make is because of the semicolon &mdash; more precisely, the lack of it.


