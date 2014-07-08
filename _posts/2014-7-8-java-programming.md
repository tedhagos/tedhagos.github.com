---
layout: post

title: Core Java Programming, Part 1
subtitle: Java programming for the uniniated.

excerpt: What follows will take you through a very quick tour of the Java programming language. This material was not designed to cover all the aspects of the language, as it will be impractical to do so. The breadth and depth of Java, with all the associated technologies have increased drastically since it was first introduced in 1995.

description: what follows will take you through a very quick tour of the Java programming language. This material was not designed to cover all the aspects of the language, as it will be impractical to do so. The breadth and depth of Java, with all the associated technologies have increased drastically since it was first introduced in 1995.

author: Ted Hagos

lastupdate: November 18, 2013

tags:
- introduction

categories:
- java

---


These are my notes on the Java Programming Language. These notes dates back to the late part of the 1990s. I update them from time to time but not as often as I would like. These were written primarily as a secondary reference for my students in Asia Pacific College and IBM ACE. It was not meant to be an introduction to computing concepts. It assumes that the reader has some degree of familiarization in basic programming concepts which may have been acquired from experience of another programming language.

Having said that, what follows will take you through a very quick tour of the Java programming language. This material was not designed to cover all the aspects of the language, as it will be impractical to do so. The breadth and depth of Java, with all the associated technologies have increased drastically since it was first introduced in 1995.

The code samples and exercises in this material were built using plain editors and the Java Development Kit. The use of simple tools is ideal for learning because there are no magic tricks and convenience facilities (like the case if you use an IDE). As a result, your brain will work harder because you are forced to use primitive tools. In a production environment or consulting environment, this reasoning might not be suitable and hence, the decision for tool selection will be influenced by other factors such as programmer productivity, time schedules and other constraints. 

For the purpose of learning programming in Java, which is the goal of this material, we need our brains and faculties to work harder than usual to maximize learning and understanding.

## 1. Beginning to program

Before we ran, we learned to walk first. Before we walked, we needed to learn how to get up on our feet &mdash; and way before that, we crawled.

Before we build highly scalable web-endpoints or a flashy Android application, we need to do the crawling analog in Java. We need to learn how to write a basic program using the Java language. We need to discover the mechanics of compilation and runtime, what legal statements can we declare and their effects. We need to know how Java statements are organized, what kinds of control structures are available, what kinds of things we can create and manipulate.

The goal for now is take a first step towards a very long road of programming. We need to learn how programs are constructed, what tools and with what materials should we construct them and finally, how should we run them.


## 2. Some concepts

**Java is a compiled language.** You need to write the programming statements in a source file, compile them to produce an executable format or object code and finally run the executable file. If you did not make syntactical mistakes the source code will compile without problems. If you did commit syntactical errors then the compiler will not let you through, you will not be able to produce an executable format of your source program.

A Java source file (also called a compilation unit) is a simple text file. You can use basic text editors to create and edit a source file. The choice for program editor is at best, a matter of preference. The only requirement for the text editor is it can write in ASCII format &mdash; better yet if it can handle UNICODE. So pick any that catches your fancy.

A Java source file will bear the extension .java, no matter which platform you are using. Don't worry that the extension doesn't follow the usual three letter format, the popular OS platforms can handle that kind of file.

**Java is an Object Oriented language.** This has many consequences that affects you as a programmer, but right now, it affects what we can write inside our very first source file. You can write only classes and interfaces inside a source file. For our first example, we will write a class and not an interface &mdash; interfaces are advanced constructs in Java, we will leave that for later. Inside classes, you can write variables, methods and program statements.


**The source file cannot be ran directly on your platform.** It needs to be compiled. If you have installed the JDK (Java Development Kit) properly on your platform, you can already use the java compiler. The compiler takes on a source file (or source files) as an argument and turns them into executable files. These files do not have .com or .exe extensions, they have .class extensions instead.

**You cannot run .class files directly on top of your OS.** Java executables run inside a special environment called the JRE (Java Runtime Environment). To run Java object files, you need to invoke the JRE and pass the name of the Java executable as a command line argument like this — <code class="codeblock">$ java executable_file</code>

There are many kinds of Java programs. Some run on webservers (servlet & JSP), some inside browsers (applet) and some on mobile platforms (android). Some Java apps run on the desktop and there are two kinds of those, one with GUI and the other without &mdash; these are called CLI or Command Line Interface applications. We will create a CLI app for this chapter.

<img src="/img/coding-process.png"/>

Before writing any code, I suggest that you create a folder for purposes of trying out the samples in this material. It is best to name the folder without special characters or whitespace.

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
<div id="cap">Fig 1: Hello.java</div>

Compile the source file using <code class="codeblock">javac Hello.java</code>. You will have a file named *Hello.class* as a result of the compilation. Use the command <code class="codeblock">java Hello</code>. Do not include the extension *.class* when running Java programs, only the file name portion of the resulting *.class* file is required.

If you typed your program exactly as it appeared in Fig 1.1 the program should compile without problems. If you encountered any compilation error, to back to the program editor and check the  spelling of each and every word. Make sure you did not miss a curly brace or perhaps spelt <code class="codeblock">main()</code> as <code class="codeblock">Main()</code>. Java is case sensitive &mdash; *main* is different from *Main*. When you are sure that the program is free from syntactical errors, compile it again, then run.  

The output of Fig 1 is a very uninteresting "Hello World". True to tradition of every beginning programmer since Kernighan and Ritchie first started it on the first edition of the C Programming Language in 1969. 

Unexciting as the output maybe, it is simple yet rich enough to get our feet wet in Java programming. You need to get used to the structure of the Hello program because a lot of the codes you will write starts out this way. 


### 2.1 What just happened

The first seven lines of the Hello program are *comments*. These are non-executable statements and you can put them anywhere &mdash; inside or outside a class. You can write comments in three ways. 

1. **//**  This is an in-line comment, effective only on the current line. Anything to the right of this comment is ignored. This is suitable for commenting individual lines of code

2. **/\*   \*/**  This is a block comment, anything in between the inner asterisks will be ignored by the compiler. These can span multiple lines

3. **/\*\*   \*/** Another block comment that is used by JavaDoc, don't worry about this right now. Just experiment with these three for the time being

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
<div id="cap">Fig 2: Basic Java class structure</div>

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

### 2.2 Exercise

1. Create a Java program that prints out your name and email address on two separate lines.
2. Create a Java program that prints outo your name and email address on two separate lines, but you can only use a single *println()* statement.
3. Play around with the source code of the Hello program. Try to compile and run. Record the results of the compilation and execution each time you make a change.
4. Change the spelling of function main to Main
5. Remove the opening curly brace immediately right after *main(String []args)*
6. Change "Hello World" to *Hello\n.World*. What's changed? Try to find out what the *\n* means  

## 3. Reserved words

You will be defining a lot of things in Java. You will name your classes, variables and methods. There are only a few rules you need to observe when creating these names, one of these rules is to steer clear from reserved words or keywords.

There are 50+ keywords in the Java language but not all of them are in use. The *const* and *goto* keywords are not in use. The keywords for Java has undergone some subtle changes over the years. There could also be some confusions regarding which keywords are treated as reserved words and which ones are simply literals for the language. 

In the past, the words *true, false* and *null* appeared as keywords . Sometime in the past, *null, true* and *false* have stopped being keywords and became known as literal values (From the Java Lang Spec). These are semantics and are probably of interest only to the language lawyers of Java. If your pursuits are more of the practical nature, I suggest not to bother with the semantic difference. The point is you cannot use keywords and literals as variable names or identifiers in your own code lest you will have a problem during compilation. This is the most important reason why you need to be familiar with them.

It is always best to consult the most recent version of the Java Language Specification when it comes to these things because they are a matter of specification. The keywords are printed here only for ease of reference.

<pre class="codeblock">
  abstract	continue	for			    new			  switch
  assert		default		goto		    package		synchronized
  boolean		do			  if			    private		this
  break		  double		implements	protected	throw
  byte		  else		  import		  public		throws
  case		  enum		  instanceof	return		transient
  catch		  extends		int	short	  try
  char		  final		  interface	  static		void
  class		  finally		long		    strictfp	volatile
  const		  float		  native		  super		  while
</pre>
<div id="cap">Fig 3: Java KeyWords</div>

You do not need to memorize all the keywords now, but I think in time you will know them by heart as your practice grows.

***

### 3.1 Identifiers

Any programming construct that is programmer-defined is referred to as an *identifier*. These are the things that you will need to name yourself.

* class name
* interface name
* method name
* name of a variable, name of parameters you pass to methods
* package name

To create an identifier, there are certain rules that you must remember. 

1. It must consist of alphanumeric characters
2. It must not start with a number, but it can start with an underscore or a dollar sign
3. It must not have any special characters inside it
4. It must not be same as java keyword or literal


### 3.2 Exercise

1. small number
2. bignumber
3. this-is-a-very-long-identifier_is-it-legal
4. IsThisLegal?
5. _IsThisLegal
6. class_name
7. import-no1
8. transient
9. volatile
10. careful-this-is-volatile


## 4. Types

Programmers create things (data). We manipulate them by adding, substracting, dividing or multiplying. Sometimes we mash them up together (concatenation), then we create more things. Sometimes, we store these things for later use, and other times we don't, we simply discard them. Sometimes we dig up things that we have stored in the past (retrieval) and other times we show the things we've tucked away to other people (reports). This is an oversimplification of what programmers do, but I would guess that it is not very far from it. 

In order to create things, we need to know what kinds of things you can create. Will you be counting these things (whole numbers) or will you measure them (real numbers)? If we need to compare one thing to another thing, how will we  remember the result of that comparisson? Can we store the result of that comparisson inside another kind of thing, one that is aware of truth and falsity? 

If we were using a language that is pretty close to the metal, like assembly or C, you may need to know quite a bit about how things are stored and organized in a very low-level fashion before you can get very far.  We are, however, using Java and it will not require us to work close to the metal. 

You will work with *types* rather than bits (zeroes and ones). Java has defined some useful abstractions for us already. These abstractions allow us to work with ease because we can represent familiar concepts with ready-made *types*. For example, if you need to work with real numbers, Java has defined the *float* and *double*  data types. If you need to work with words and letters, Java has defined for us the *java.lang.String* type.  These abstractions are high enough that we don't get bogged down by the details of how they are stored and structured on the disk, we can worry about other things like the logic of our application. 


1. **byte**   signed 8-bit integer (-128 to 127)          
2. **short**  signed 32-bit integer (-2,147,483,648 to 2,147,483,647)
4. **long**   signed 64-bit integer (-9,223,372,036,854,775,808 to 9,223,372,036,854,807)
5. **float**  signed 32-bit floating point (32 bit IEEE 754 floating point)
6. **double**  signed 64-bit floating point (64 bit IEEE 754 floating point)
7. **char**   16-bit Unicode character (0 to 65535 or \\u0000 to \\uFFFF)
8. **boolean**  either *true* or *false*


### 4.1 Variables

Variables are created by declaring them, then defining them. For example, 

<pre class="codeblock">
  int i;
</pre>

is a statement that DECLARES the variable named *i*  that is of type *int*, it does not define it however. To declare and define a variable, it done like this

<pre class="codeblock">
  int i;
  i = 0;
</pre>

In the preceding code, the variable *i* was DECLARED on one line and then DEFINED on the following line. You can create your variables like this, or like this;

<pre class="codeblock">
  int i = 0;
</pre>
 
Where the variable *i* has been both declared and defined on the same line.

Why are we specifying that *i* is an int? That is because Java is a statically typed language. The compiler will not guess what kind of data you are creating, you have to tell it explicitly before it gets compiled. 


### 4.2 Rules on types

The numerical types of Java follows a certain hierarchy &mdash; *double* is bigger than a *float* which is bigger than a *long* which is bigger than an *int* which is bigger than a *short* which is bigger than a *byte*. You must be aware of this hierarchy because you will not always work with just one data type, exclusively &mdash; you will work with a combination of them. 

For the most part, you can add variables of different types e.g. add an int to a double, a byte to an int etc, but you can only assign the value to a variable if the type of the value is;

1. the same as the type of the variable
2. bigger than the type of the variable

For example

<pre class="codeblock">
  int a = 10;
  int b = a;
  long c = b;
  double d = c;
</pre>

You can assign *b to a* because they are both int; assign *b to c* because a long is bigger than an int; *c to d* because a double is bigger than a long. Makes sense right? When you assign a smaller type to a larger type, that is what programmer's call a *upcast*. Upcasting is automatically performed for you when you do operations like the above (assigning a smaller type to a larger type).

Let's look at another example.

<pre class="codeblock">
  byte a = 1;
  byte b = 2;
  byte c = a + b;
</pre>

It looks innocent and deceitfully accurate, but it will result to an error. While you may reason that  because we added 2 byte values (a + b), it stands that we should be able assign the arithmetic result to *c* which is declared as a byte &mdash; You would have been correct if the resulting type of adding two *byte* values is also a byte, but that is not the case. One apple added to another another apple doesn't make two apples in this case. It looks counter-intrutive and scaringly frustrating to a beginner. I know. Don't panic. We just to understand the arithmetic rules of Java for this to make sense. 

Remember the hierarchy of types from a discussion a while ago &mdash; *double* is bigger than a *float* which is bigger than a *long* which is bigger than an *int* which is bigger than a *short* which is bigger than a *byte* &mdash; that one? It has a related rule. 

When a *double* is added to something else, the resulting type is a double. When a *float* is added to something else, the result is float. A *long* added to something else, the result is a long. For everything else the result is an *int*. Oh and by the way, I just used arithmetic *add* operation for the explanation because it's a lot easier to say, but the truth is, that rule holds up for all arithmetic operation (+ - * / and %) &mdash; that means no arithmetic operation will ever result into *short* or a *byte*. There is a very interesting reason for that rule, it sounds really clever too but that is out of the scope of this material. If you want to pursue that reason, dig up on "how Java does arithmetic internally". 

Let's continue to work on our small byte addition example earlier, let's fix that.

<pre>
  class ByteAdd {
    public static void main(String args[]) {
      byte a = 1;
      byte b = 2;
      int c = a + b;
    }
  }
</pre>
<div id="cap">Fig 4: Adding two bytes</div>

And now, all is well. 

## 5. Casting

You already know what *upcasting* is, we discussed that not too long ago. Upcasting happens when you assign a narrow type to a wider type e.g. an *int* value assigned to a *long*. Java does for you automatically, no intervention needed. The opposite of *upcasting* is of course, well, *downcasting* &mdash; not very creative, I know, but it makes the two terms easier to remember. 

Downcasting happens when you force a wider type into a narrow type e.g. try to assign an *int* to a *byte*, the compiler won't let you. Unlike upcasting, downcasting is an explicit activity. It needs action from the programmer. 

Let's go back to the byte arithmetic example of Fig 4. We solved that by making variable *c* a int. We also could have solved that problem using downcasting.

<pre class="codeblock">
  class ByteAdd {
    public static void main(String args[]) {
      byte a = 1;
      byte b = 2;
      byte c = (byte)(a + b);
    }
  }
</pre>

The cast operator is the pair of parentheses. We are forcing the value to the right of the cast operator, in this case <code class="codeblock">(a + b)</code> which is a *int* to become a *byte*. You have to group expression *a + b* because if you did not, only the value *a* would have been casted to a byte, then the addition operation would be performed (which results to an int) then it will be assigned to *c* &mdash; the cast operator has a higher precedence than the addition operation, that is why you need to group.

## 6. Reference Type

By far and thus far, the data types you have seen are called *primitive types*. The Java Type System has another kind of type. It is called *reference types*. Let's defer the discussion for reference types at least until after we've gone through the OOP topic. 

For now, what we need to remember is that, if it's not primitive &mdash; not a double, float, long, int, short, byte, char or boolean, then it must be a reference type. It' not all scary, some reference types are actually pretty to use e.g. the *String* type, let's see some examples

<pre class="codeblock">
  String a = "Hello";
  String b = "World";
  String c = a + b;
  int d = 10;
  String e = a + d; // attention here
</pre>

I called your attention to the last line because I thought this might be a good opportunity to explain why the addition operator works for a String type, what happened to our rule before &mdash; when a *double* is added to something else it becomes a double.

First, let's put an addendum to our rule. **When something is added to a String** the whole expression becomes a String**. The String type rules them all. 

By the way, it's only the addition operator that is valid to a String type. You cannot substract a string from another string (not like numbers at least) nor can you divide or multiply Strings. The action of the *+* operator on Strings is simply for concatenation.

[Core Java Programming, Part 2]({% post_url 2014-7-8-java-programming-part-2 %})




























