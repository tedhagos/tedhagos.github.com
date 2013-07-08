---
layout: post
title: Java Programming
description: 
categories:
- java
- core_programming
---

# DOCUMENT HISTORY

- Feb 18 2004 &mdash; created
- Oct 21 2007 &mdash; Added section on Generics
- Jun 12 2013 &mdash; re-written some examples to reflect Java 7 changes

<hr class="chapterbreak"/>

<h1 class="chapter">INTRODUCTION</h1>

These are my notes for the Java Programming Language. These notes dates back to the late part of the 1990s. I update them from time to time. These were written primarily as a secondary reference for my students in Asia Pacific College and IBM ACE. It was not meant to be an introduction to computing concepts. It assumes that the reader has some degree of familiarization in basic programming concepts which may have been acquired from experience of another programming language.

Having said that, what follows will take you through a very quick tour of the Java programming language. This material was not designed to cover all the aspects of the language, as it will be impractical to do so. The breadth and depth of Java, with all the associated technologies have increased drastically since it was first introduced in 1995.

The code samples and exercises in this material were built using plain editors and the Java Development Kit. The use of simple tools is ideal for learning because there are no magic tricks and convenience facilities (like the case if you use an IDE). As a result, your brain will work harder because you are forced to use primitive tools. In a production environment or consulting environment, this reasoning might not be suitable and hence, the decision for tool selection will be influenced by other factors such as programmer productivity, time schedules and other constraints. 

For the purpose of learning programming in Java &mdash; which is the goal of this material &mdash; we need our brains and faculties to work harder than usual to maximize learning and understanding.

Here we go.

<hr class="chapterbreak"/>

<h1 class="chapter">BEGINING TO PROGRAM</h1>

Before we ran, we learned to walk first. Before we walked, we needed to learn how to get up on our feet &mdash; and way before that, we crawled.

Before we build highly scalable web-endpoints or a flashy Android application, we need to do the crawling analog in Java. We need to learn how to write a basic program using the Java language. We need to discover the mechanics of compilation and runtime, what legal statements can we declare and their effects. We need to know how Java statements are organized, what kinds of control structures are available, what kinds of things we can create and manipulate.

The goal for now is take a first step towards a very long road of programming. We need to learn how programs are constructed, what tools and with what materials should we construct them and finally, how should we run them.

***

## KEY CONCEPTS

**Java is a compiled language.** You need to write the programming statements in a source file, compile them to produce an executable format or object code and finally run the executable file. If you did not make syntactical mistakes the source code will compile without problems. If you did commit syntactical errors then the compiler will not let you through, you will not be able to produce an executable format of your source program.

A Java source file (also called a compilation unit) is a simple text file. You can use basic text editors to create and edit a source file. The choice for program editor is at best, a matter of preference. The only requirement for the text editor is it can write in ASCII format &mdash; better yet if it can handle UNICODE. So pick any that catches your fancy.

A Java source file will bear the extension .java, no matter which platform you are using. Don't worry that the extension doesn't follow the usual three letter format, the popular OS platforms can handle that kind of file.

**Java is an Object Oriented language.** This has many consequences that affects you as a programmer, but right now, it affects what we can write inside our very first source file. You can write only classes and interfaces inside a source file. For our first example, we will write a class and not an interface &mdash; interfaces are advanced constructs in Java, we will leave that for later. Inside classes, you can write variables, methods and program statements.


**The source file cannot be ran directly on your platform.** It needs to be compiled. If you have installed the JDK (Java Development Kit) properly on your platform, you can already use the java compiler. The compiler takes on a source file (or source files) as an argument and turns them into executable files. These files do not have .com or .exe extensions, they have .class extensions instead.

**You cannot run .class files directly on top of your OS.** Java executables run inside a special environment called the JRE (Java Runtime Environment). To run Java object files, you need to invoke the JRE and pass the name of the Java executable as a command line argument like this — <code class="codeblock">$ java executable_file</code>

There are many kinds of Java programs. Some run on webservers (servlet & JSP), some inside browsers (applet) and some on mobile platforms (android). Some Java apps run on the desktop and there are two kinds of those, one with GUI and the other without &mdash; these are called CLI or Command Line Interface applications. We will create a CLI app for this chapter.

Before we begin writing programs, I suggest that you create a folder for purposes of trying out the samples in this book. It is best to name the folder without special characters or whitespace.

Create a file named Hello.java. For now, just copy the contents from the sample code below

<pre>
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
</pre>
<div id="cap">Fig 1: Hello.java</div>

Compile the source file using <code class="codeblock">javac Hello.java</code>. You will have a file named *Hello.class* as a result of the compilation. Use the command <code class="codeblock">java Hello</code>. Do not include the extension *.class* when running Java programs, only the file name portion of the resulting *.class* file is required.

If you typed your program exactly as it appeared in Fig 1.1 the program should compile without problems. If you encountered any compilation error, to back to the program editor and check the  spelling of each and every word. Make sure you did not miss a curly brace or perhaps spelt <code class="codeblock">main()</code> as <code class="codeblock">Main()</code>. Java is case sensitive &mdash; *main* is different from *Main*. When you are sure that the program is free from syntactical errors, compile it again, then run.  

The output of Fig 1 is a very uninteresting "Hello World". True to tradition of every beginning programmer since Kernighan and Ritchie first started it on the first edition of the C Programming Language in 1969. 

Unexciting as the output maybe, it is simple yet rich enough to get our feet wet in Java programming. You need to get used to the structure of the Hello program because a lot of the codes you will write starts out this way. 

***

## WHAT HAVE WE JUST DONE

The first seven lines of the Hello program are *comments*. These are non-executable statements and you can put them anywhere &mdash; inside or outside a class. You can write comments in three ways. 

1. <code class="codeblock">//</code>  &mdash; This is an in-line comment, effective only on the current line. Anything to the right of this comment is ignored. This is suitable for commenting individual lines of code

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

***

## EXERCISE TIME

1. Create a Java program that prints out your name and email address on two separate lines.
2. Create a Java program that prints outo your name and email address on two separate lines, but you can only use a single *println()* statement.
3. Play around with the source code of the Hello program. Try to compile and run. Record the results of the compilation and execution each time you make a change.
4. Change the spelling of function main to Main
5. Remove the opening curly brace immediately right after *main(String []args)*
6. Change "Hello World" to *Hello\n.World*. What's changed? Try to find out what the *\n* means  

<hr class="chapterbreak"/>

<h1 class="chapter">RESERVED WORDS</h1>

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

## RULES ON WRITING IDENTIFIERS

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

***

## EXERCISE TIME

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

<hr class="chapterbreak"/>

<h1 class="chapter">DATA TYPES</h1>

Programmers create things (data). We manipulate them by adding, substracting, dividing or multiplying. Sometimes we mash them up together (concatenation), then we create more things. Sometimes, we store these things for later use, and other times we don't, we simply discard them. Sometimes we dig up things that we have stored in the past (retrieval) and other times we show the things we've tucked away to other people (reports). This is an oversimplification of what programmers do, but I would guess that it is not very far from it. 

In order to create things, we need to know what kinds of things you can create. Will you be counting these things (whole numbers) or will you measure them (real numbers)? If we need to compare one thing to another thing, how will we  remember the result of that comparisson? Can we store the result of that comparisson inside another kind of thing, one that is aware of truth and falsity? 

If we were using a language that is pretty close to the metal, like assembly or C, you may need to know quite a bit about how things are stored and organized in a very low-level fashion before you can get very far.  We are, however, using Java and it will not require us to work close to the metal. 

You will work with *types* rather than bits (zeroes and ones). Java has defined some useful abstractions for us already. These abstractions allow us to work with ease because we can represent familiar concepts with ready-made *types*. For example, if you need to work with real numbers, Java has defined the *float* and *double*  data types. If you need to work with words and letters, Java has defined for us the *java.lang.String* type.  These abstractions are high enough that we don't get bogged down by the details of how they are stored and structured on the disk, we can worry about other things like the logic of our application. 


1. *byte*  &mdash; signed 8-bit integer (-128 to 127)          
2. *short* &mdash;  signed 16-bit integer (-32,768 to 32,767)
3. *int*   &mdash; signed 32-bit integer (-2,147,483,648 to 2,147,483,647)
4. *long*  &mdash; signed 64-bit integer (-9,223,372,036,854,775,808 to 9,223,372,036,854,807)
5. *float* &mdash; signed 32-bit floating point (32 bit IEEE 754 floating point)
6. *double* &mdash; signed 64-bit floating point (64 bit IEEE 754 floating point)
7. *char*  &mdash; 16-bit Unicode character (0 to 65535 or \\u0000 to \\uFFFF)
8. *boolean* &mdash; either *true* or *false*


***

## HOW TO CREATE THINGS

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


***

## SOME TYPE RULES

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

***

## CASTING

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

***

## REFERENCE TYPE

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


<hr class="chapterbreak"/>

<h1>OPERATORS</h1>

This should not not be a long section. If you have programmed before using another language, chances are these operators are exactly the same thing in that other language that you used. So it's a not a big deal. There is not much to see here and to be honest, quite boring. So in this section, we will simply list the operators that you can use in Java. No gotcha's nor clever examples, just a list. 

**ARITHMETIC** 

The *+ - * / and %* functions as you might expect. They work on numbers, both real and integral &mdash; with the exception of the *+* which also works on *Strings* as you've seen earlier.

**COMPARISSON** 

The *> >=  < <= and ==* are read, more than, more than or equal to,less than and less than or equal to, respectively. You know how to use them, you don't need me to explain.

**LOGICAL**

- *&* a logical *and*. The expression will only be true if both operands are true
- *&&* a short circuit *and*, more or less the same as the logical *and* but it's short circuit. If the first operand is already false, it will not even bother testing the second operand, it will immediately return *false*, hence it's name, short-circuit.
- *|* a logical *or*. The expression will return true as long as one of the operand is *true*
- *||* a short-circuit or. It follows the same prinnciple as *&&* only it performs it on an *or* condition &mdash; can you figure it out? That's your homework. 
 
There are other operators in Java, but we won't list them here. It makes sense to tackle them when there is more context. So we will leave the discussions of these other operators like *++ and --* for later.

<hr class="chapterbreak"/>

<h1>FLOW OF CONTROL</h1>

Your ability to direct and command the flow of control in your program is one of the defining skills for a programmer. There are basically 3 ways that you can arrange the commands in your program code. You can execute commands one after another, *sequencing*.
You can execute certain commands when certain conditions are met, *branching*; and you can keep on repeating certain commands while certain conditions are still true, *looping or iteration*

***

## if statement

<pre class="codeblock">
  if(condition) {
  	statement 1;
  	statement 2;
  	statement n;
  }  
</pre>

The *if* statement allows you to conditionally perform some commands. It allows you side-step the main flow of your code. If you remember your flowcharting concepts or logic formumation. When you see the diamond shape, it means you have a fork in the road. When a condition is met, you either go left or right. That is what the *if* statement does. It allows you to test for conditions. When the condition is true, you go to the beginning of the if block (the opening curly brace) and begin executing all the statements there until all the statements are exhausted. When you have reached the end of the block (the closing curly brace), then there are no more commands to execute. The flow of control will resume immediately after the end of the curly brace. 

The condition in the *if* statement can be written as expressions that will evaluate to either true or false. This is the most common use you will have of the if statement. On some occassions, you may see the condition written as the literals *true* or *false* -- this is rare, but it will still be a legal code. Looks easy, right. 

Okay, a little ice-breaker. Can you spot what's wrong in the next code. Try not to read the explanation and figure it out yourself first.

<pre class="codeblock">
  int i = 0;
  if(i = 1) {
  	System.out.println("but i is equal to one");
  }
</pre>

Did you catch it? If you did not, the Java compiler will. That's a good thing. People with programming experience in *C Language* would be familiar with this, because the expression <code class="codeblock">if (i = 1)</code> would have been valid in *C*. Thankfully not in Java, the compiler would have warned you of "Incompatible type error".

The **if** statement requires a boolean expession in the argument. The expression <code class="codeblock">(i = 1)</code> will not result to a boolean expression, rather it will yield a integer expression; zero if the operation succeeds and non-zero if it fails.

***

**NESTING**

You can put an if statement inside another if statement. You can in fact nest them up pretty deeply. While there is no set limit on how deep you can nest if statements, practical considerations and code readability should knock some sense into your code. 

From my experience, whenever I am treading dangerously deep into a web of if-else-if-else, that is usually a signal to take a step back and look if there are other ways of going about controlling program logic. It could be a design or analysis problem already and that using the if-else statement is not the right tool to solve the problem at hand. 

***

## switch statement

When the nature of the decision you need to make is a bit on the fuzzy side, it could be impractical to use the if-statement, for those kinds of decisions, you will use the switch-statement.

The syntax of the switch statement is;

<pre class="codeblock">
  switch(expression) {
    case CONSTANTEXPR:
    case ENUMCONSTANTNAME:
    default:
  }
</pre>

Where expression can either be a *char, byte, short, int*. It can also be *Character, Byte, Short, Integer* OR an *enum* type. By the way, Character is not the same as char, that wasn't a typo. Character is a Java class which is a wrapper class for the char primitive. As of Java 8 (which at the time of writing is in Eary Access), you can now use String expressions on the *switch* statement

The following code sample  extracts the day-of-week value from a *Calendar* object. The day-of-week is returned as integer, which makes it perfect to filter using a *switch* statement rather than nested *if*

<pre>
  import java.util.Calendar;

  class SwitchSample {

  	public static void main(String args[]){

  		Calendar now = Calendar.getInstance();
  		int dow = now.get(Calendar.DAY_OF_WEEK);

  		switch(dow) {
  			case 0:
  				System.out.println("Sunday");
  				break;
  			case 1:
  				System.out.println("Monday");
  				break;
  			case 2:
  				System.out.println("Tuesday");
  				break;
  			case 3:
  				System.out.println("Wednesday");
  				break;
  			case 4:
  				System.out.println("Thursday");
  				break;
  			case 5:
  				System.out.println("Friday");
  				break;
  			case 6:
  				System.out.println("Saturday");
  				break;
  			default:
  				System.out.println("What the value really is = " + dow);
  			}
  		}
  }
</pre>
<div id="cap">Fig 5: switch statement sample</div>

The switch is really simple to use, just put the expression which you'd like to test as an argument to the switch statement, then have a series of case statements inside the switch body.

Each case statement corresponds to a value, if the value of the expression is equivalent to a case value, then instructions immediately right after the colon of the case statement will be executed/evaluated, in fact the rest of the statements will be evaluated, all the way down, until it gets to the last instruction at the bottom of the switch statement; that's not what your intention might be; that is the reason why I put a break statement. Once a case statement evaluates to true, Java blindly executes all the statements after that case, it won't even bother checking the other cases -- so note this, and be careful.

***

## while statement

The *while* statement is used when you would like to perform some commands repeatedly, like in a loop. There is another statement in Java that does looping, that is the *for* statement.

The *while* and *for* loop may overlap at times because they have a similar function. For a beginner, it may not be quite obvious when to use one and not the other. The basic difference of the two statements though is that;

1. Use the *while* loop if you do not know how many times you need to loop
2. Use the *for* loop if you actually know how many times you will need to go through the loop

A *while* loop looks like the following

<pre class="codeblock">
  while(condition) {
  	statement 1;
  	statement 2;
  	statement n;
  }
</pre>

The *condition* is either a literal (the keywords true or false) or an expression that will evaluate to either true or false (boolean values).

The basic idea in a *while* loop is this

1. The condition is evaluated for the first time, if the condition is true or resolves to true, then;
2. Perform statement 1, then;
3. Perform statement 2, then;
4. Perform statement n, then;
5. The program detects that we are at the end of while block (the closing curly brace is the end of the while block)
5. The program will loop back to the condition and re-evaluate it again, if it still true, then;
6. Perform statement (again)
7. rinse repeat until you get the end of the end of the block again and until you get to re-evaluate the condition (again). 

You will only drop off end of the while block if and when the condition evaluates to false. This is the reason it is best to remember that you need write code inside the while block that will make the condition false at some point in time, lest you end up in a perpetual loop.

<pre>
  import static java.lang.System.out;

  class While {

      public static void main (String [] args){
  
          boolean condition = true;
          int counter = 0;

          while(condition) {
              out.println(counter);
              counter = counter + 1;
              if(counter >10) {
                  condition = false;
              }
          }
      }
  }
</pre>

The sample code above shows the use of a while statement. Always remember to put something inside your while loop that will make the conditon false at some point in time. A perpetual loop can be very difficult for a beginning programmer to spot.

***

## for statement

<pre class="codeblock">
  for(beginning value; ending value; step) {
      statement 1;
      statement 2;
      statement 3;
  }
</pre>

The *for loop* like the *while* allows you to iterate and perform a group of statements over and over again. The for loop though, allows for more control.  

A key concept in using the for loop is the automatic counter, the *step*. The code will perform all the statements inside the block for a finite and determined number of times.

Each time that the whole block is evaluated, the *step* value is incremented. The incremented step value is then compared to the *ending value*, and when the ending value is reached, the for loop will then terminate. The program control will fall over to first statement immediately after the for loop block. 


<pre>
  class for_sample {

      public static void main (String [] args) {
          for(int i=0; i<=10;i++) {
              System.out.println(i);
          }
      }
  }
</pre>
<div id="cap">Fig 6: Sample use of the for loop</div>

In the preceding example, we print some numeric values from zero (0) to ten (10). This is the exact thing that our *while* example was doing earlier.  

***

## break and continue

The *break* and *continue* keywords disrupts program flow inside loops, whether the for-loop or while-loop. 

<pre>
  while(condition) {
  	statement 1;
  	statement 2;
  	break;
  	statement 3;
  	statement 4;
  }

  statement 5;
  statement n;
</pre>
<div id="cap">Fig 7: break inside a while loop</div>


The *break* statement caused the program flow inside a block to forcibly exit. In the sample code (Fig 7), as soon as the *break* statement is encountered, the program control ignored statements 3 and 4. The while loop will go out of scope and program control will be transferred to the first executable statement immediately after the while block -- in this case, statement 5.  

You normally will not use the **break** statement in this fashion because it doesn't make sense. This statement is usually deployed with more logical finesse. 

<pre>
  while(condition) {
  	statement 1;
  	statement 2;
	
  	if(someCondition) {
  		break;
  	}	

  	statement 3;
  	statement 4;
  }

  statement 5;
  statement n;
</pre>
<div id="cap">Fig 8: Another sample of break statement</div>

This is a more likely use of the *break* statement. I should warn you though that this is a frowned upon practice. A truly structured programming should have only one entry point and one exit point. Because of the introduction the *break* statement, our control structure now has one entry point and two exit points.  

While this code is innocent enough right now, it could get very hairy and complicated. You will appreciate following the 1-entry-1-exit rule when you have had your fair share of debugging someone else's code and you are wading through a maze of nested structures with lots of breaks peppered into the source code &mdash; and by then you will understand why nobody wants to work on a code they did not write themselves. 

Next is the **continue** keyword. Here is how it behaves.

<pre class="codeblock">
  while(condition) {
  	statement 1;
  	statement 2;
  	continue;
  	statement 3;
  	statement 4;
  }

  statement 5;
  statement n;
</pre>

When the *continue* statement is encountered, statements 3 and 4 will be ignored, just like how it was with the break. Unlike the case in **break** though, the loop will not go out of scope and will not be immediately terminated.  

The *continue* statement will go back to the beginning of the loop and forcibly re-evaluate condition. If the condition is still true, then the loop continues normally.

<hr class="chapterbreak"/>

<h1 class="chapter">ARRAYS</h1>
  


<hr class="chapterbreak"/>

<h1 class="chapter">THE SIMPLEST PROGRAMS</h1>

Before going any further with dry definitions of program structure and rules, let's pause for a while. Take the time to exercise your new found knowledge of programming. Let's do some [fizzbuzz](http://c2.com/cgi/wiki?FizzBuzzTest) exercises 



A slight variation of the 'Hello World' program in Java. Take the time to read it. Try to see what is different about it.

<pre class="codeblock">
import static java.lang.System.*;

class Hello {

  public static void main (String[] args) {
    out.println("Another Hello");
  }
}
</pre>

The above code sample is different in two points:

The *import* statement &mdash; in most *Hello* codes, the import statement is not needed. The package *java.lang.* is imported by default, that is why you don't need it. The Simplest.java source code needed the *import* statement because it is not a simple import. It is a *static import*, it allows you to make unqualified calls to static members of a class &mdash; *out* is a static member of the *System* class, it means we can simply say *out.println* instead of fully qualifying the call like System.out.println. Okay, this may not be the simplest code because it involves static members which are discussed on the OOP lessons, but it doesn't mean we shouldn't take advantage of the short hand call

The name of the source file is *Simplest.java* but the name of the class is *Hello*. There is no requirement for the name of the name of the class to be consistent with the name of the containing source file unless, the class defined has a *public* scope. 

***

## COMMAND LINE ARGUMENT

You can pass command line argument to java programs. Command line arguments allows a java program to get information from the session environment (cmd or SHELL), for example, try to invoke the *Hello* class using this call <code class="codeblock">$ java Hello World</code>

It did not result into any error, but it did not do anything new as well. That is because our code is not yet equipped of dealing with command line parameters. To deal with command line parameters, you need to access the *String* array inside the *main()* function

<pre class="codeblock">
import static java.lang.System.*;

class Hello {

  public static void main (String[] args) {
    out.println(args[0]);
  }
}
</pre>


Run the program again with the command line parameters <code class="codeblock">$ java Hello World</code>

This code works now because *main* function of Java accepts a parameter, an array of *Strings* and because all words (tokens) immediately after the name of Java executable is converted into an array of String. During runtime, you may access the contents of this array. Let's make one more change on the source code

<pre class="codeblock">
import static java.lang.System.*;

class Hello {

  public static void main (String[] args) {
    out.println("Hello " + args[0]);
  }
}
</pre>

Run the code one more time, but this time around, pass your name as the argument.  

You can concatenate Strings inside the *println()* method, this helps out a bit when you are formatting the output a little bit. The arithmetic operator for addition works on Strings too, it adds the strings &mdash; but it doesn't mean you can substract strings using the minus sign or divide or multiply. Only the + sign works on Strings

Our code, while prints prettier than its previous versions, is still very fragile. It can break easily. Try to invoke it without any command line parameter and see what happens &mdash; if you tried it, you probably have seen the *ArrayIndexOutOfBounds* exception message. The reason for that is because our program blindly assumes that the user will always pass one command line parameter. It always assumes that the *args[0]* will contain a valid data. That is why when you did not pass anything on the command line, args[0] does not contain anything, hence the error. To address that error, Let's make the code a bit defensive

<pre class="codeblock">
import static java.lang.System.*;

class Hello {

  public static void main (String[] args) {

    if(args.length > 0){
      out.println("Hello " + args[0]);
    }
  }
}
</pre>

An array, like most things in Java is an object, which means it has methods and properties. It happens the **length** property tells us the length of the array (how many elements it has). By doing a simple check if it the length of the array is more than zero, we can avoid the *ArrayIndexOutOfBounds* error. 

***

## ITERATING THROUGH COMMAND LINE PARAMETERS

The current version of our code is bit more sturdy than its previous versions, it won't break easily if you forgot to pass an argument on the command line. It can deal already with zero command line arguments, but what it cannot do is deal with more than one argument. If you pass more than one argument to the program, it simply echoes only the first argument. It does not know how to deal with more than one argument &mdash; lets fix that.


<pre>
import static java.lang.System.*;

class Hello {

  public static void main (String[] args) {
    int length = args.length;
    for(int i=0; i < length; i++){
      out.println(args[i]);
    }
  }
}
</pre>
<div id='cap'>Simplest.java</div>

We've completely replaced the *if* structure with a looping structure, the for loop. By using and iteration mechanism, it is unecessary to maintain the *if* statement because the for-loop can also deal with zero argument. 

<hr class="chapterbreak"/>

<h1 class="chapter">OBJECT ORIENTED PROGRAMMING</h1>


If you set out to truly understand how an automobile works, down to tiniest detail of how each nut and bolt performs, you could be in over your head &mdash; especially if do not have a degree in mechanical engineering. On the other hand, if the goal is a simpler one such as "to drive a car", it would seem to be a more achievable goal, by order of magnitudes. The mechanics of vehicle control such as steering, braking and accelerating are more manageable to keep in our heads as compared to principles of hydraulics or the inner workings of the internal combustion engine.  

***

## COMPLEXITY

We are surrounded by complex systems in our daily lives, and a career in programming will not shield you from that &mdash; au contraire. Our saving grace is that we have gotten pretty good at dealing with complexities. Take for example the plants that you have at home, you don't need to know the gory details of its biological structure in order to know that you need to give it some sun and water lest it will die. Another example is the light switch, you don't need a degree in electrical engineering to know that you if you flip the switch one way, its lights out &mdash; flip it another way and its lights on. 

Computer scientist have grappled with complexities through the ages and have managed to develop tools to manage software complexities. One of the goals of complexity management is to engineer the illusion of simplicity &mdash; to hide the working details of a complex system in order for it to be usable. 

There appears to be an inherent limit in the capabilities of our brain to deal with a swarm of information, we just can't deal with all of it &mdash; at once. The silver lining, like I mentioned earlier is that we have gotten pretty good at dealing with an avalanche of information. We have developed a coping mechanism called "abstraction"

A new employee on a large organization cannot and will not be able to comprehend all operational tasks that happens in the organization. He cannot possibly know the tiniest work details of each and every employee in the company. If you will just but give him a little time in the company, not only will be able to re-orient himself, he can also do something really productive that adds value to the company. So what happened between then and now? What makes us capable of navigating complex systems now but not then? The answer is, our minds oriented itself and adapted to its new environment.

Our minds focused on just a few items while ignoring the other inessential details of the others. It then moved on to other parts of the complex system forming hierarchies of concepts that builds on top of one and then another. The information bottleneck was broken by dealing with it in chunks. When we focus on specific chunks, we are choosing to deal with idealized and generalized model of the object right in front of us \cite{ooad} thus increasing its semantic content. This abstraction process is responsible why we are capable of understanding very complex systems.  

***

## KEY CONCEPTS

There are a couple of criteria that a programming language needs to meet before it can be considered a OOP language. It needs provide a facility to effectively implement the process of *abstraction*. It needs to provide a way to reuse functionality by means of extension &mdash; *inheritance*. It needs to have a mechanism to protect data and type from inadvertent and unintentional state changes &mdash; *encapsulation*. It needs to have a mechanism to effect *polymorphism* and it needs to have a mechanism for grouping some programming constructs such as methods and classes &mdash; *encapsulation*.  

### ABSTRACTION

Abstraction is an activity where the essential characteristics of *something* is distilled. It makes that something different from other somethings. For example, if you think hard about an elevator and try to list down the characteristics, what would they be? How is an elevator different from other modes of transport such as an escalator or a conveyor? 

We cannot simply list *move up* and *move down*, while these set of behaviors differentiate the elevator from the conveyor (which simply moves to the left and to the right), it does not differentiate it effectively from an escalator. Even if we incorporate the idea that an elevator stops in between floors, it still does not differentiate it because the escalator also takes us from floor to floor. We can incorporate the behavior of *skipping floors* and that will be an effective differentiator because an escalator cannot skip floors. 

If we summarize the *behavior* of the elevator, we can come up with two,  *moveDownToFloor()* and *moveUpToFloor()*. That is the essence of an elevator object. The tricky part is how to know when to stop adding or removing behavior from an object. Unfortunately, abstraction is an acquired skill, and you can only get better at it overtime if you do it lots of times. 

I can tell you from practice that abstraction is not so much as identifying a thousand (unimportant) behavior for an object. On the contrary, abstraction is more an exercise on reduction. Try to remove behavior from an object until you are down to a bare minimum. Let's take a shoe object for an example. You can remove the heels of a shoe and it still will be a shoe. You can remove the laces and it still (barely) is a shoe &mdash; but you cannot remove its sole. 

The abstracted list of behavior of an object is known as a *Type* &mdash; this is an important terminology in OOP and Java, that is why I am emphasizing it in this section. All objects in Java **must have at least one type** &mdash; it can have more, but not less.  

### TYPE SYSTEM

It might help if you think of a *Type* as some sort of a contract or a promise from an object. The object is making a committment that it will respond to any other object or program who calls anyone of the methods within this type. Going back to the elevator example, it means that any Java object or program can call *elevator.moveDownTo()* or *elevatorMoveUpTo()* and they are guaranteed to get a response.  

There are three ways to define a Type in Java, the *class*, *abstract class* and *interface*. Each has its own strengths and inconveniences.  

***

## OBJECTS, CLASSES AND TYPES

An object is an abstraction of something useful to you (the programmer). An object represents an idealized and generalized model of something of interest. Take for example a Phone object, its protocols could be abstracted as *answerCall()* and *dialNumber()*. If we skip all the programming details of type creation, we can start using the object in a Java program , like in the following code.

<pre>
	Phone phone = new Phone();
	phone.answerCall();
	phone.dialNumber("6321234567");
</pre>

*Phone* with an uppercase first letter is a type declaration and *phone* all lowercase letter is variable of type *Phone*. In the statement <code class="codeblock">int i=1;</code> *int* is the type and *i* is a variable of type integer. The *new* keyword is responsible for creating the Phone object and *Phone()* is a special method called a *constructor*. 

To invoke the behavior of an object, you simply need to call its method using the dot notation. That is what we did in the statements *phone.answerCall()* and *phone.dialNumber()*.  

Objects are made by instantiating *Classes*, they our primary we will use to achieve abstraction. If we were to codify the Phone program in our example, it could look like the following:

<pre class="codeblock">
class Phone {
  String phonenumber="6321234567";
    
  void answerCall() {}
  void dialNumber(String args) {}
	}  
</pre>

*Phone.java* is a Java class. It is constructed by using *class* keyword followed by a name of the class .The open and close curly brace is the body of the class.  

You can define methods and variables inside the class body. The collection of methods inside the class body constitutes the protocols of the object. They are the set of behavior that the Phone object guarantees to respond to. 

Java classes are written on source files. Ideally one class definition per source file but you can define more than one class in a file. Classes are compiled using <code class="codeblock">javac sourcefile.java</code> command, in our case, <code class="codeblock">java Phone.java</code>. This will produce a file named *Phone.class*, it is the compiled version of Phone.java. A compiled class is a requirement before you can instantiate objects.

Let's summarize in code what we've discussed so far.

<pre>
	import static java.lang.System.out;

	class Phone {
   	String phonenumber="6321234567";
   
   	void answerCall() {
      	out.println("Answering call...");
   	}
   	void dialNumber(String args) {
      	out.println("Calling " + args);
   	}
   	void setPhoneNumber(String args) {
      	phonenumber = args;
   	}
	}

	class PhoneTest {

   	public static void main (String [] args) {
      	Phone p1 = new Phone();
      	p1.answerCall();
      	p1.dialNumber("6329876543");
      
      	Phone p2 = new Phone();
      	p2.answerCall();
      	p2.dialNumber("6327778888");
   	}
	}
  
</pre>
<div id="cap">Phone.java</div>

The PhoneTest program shows a more complete example of how you might use the Phone object. The PhoneTest class is not necessary because the *main()* function could have been easily written inside Phone class, but the verbosity of two classes was chosen to make the example more readable and less confusing for beginner programmers. 

### INSTANTIATION

To create an object, you need to instantiate a class. The resulting object now has the protocols or the *Type* of that class. You can begin using the object according to the protocols that was defined by its class. The protocols needs to be followed strictly, if the method defined is *dialNumber(String args)*, you need to call the method exactly as it was defined. The spelling needs to be right, the casing of the letters needs to be right and if the method expects an argument or parameter to be passed, you need to pass the expected parameter, in the case of the *dialNumber* method, it expects a String parameter. 

The PhoneTest program defines the *setPhoneNumber()* method and the *phonenumber* variable. The class initially defines its own phone number via the phonenumber variable, but it also offers a way to change this phone number. The *setPhoneNumber* method was declared to facilitate a way to change an internal detail of the class. If the *setPhoneNumber* method is called passing a new phone number, the object's state will change. It will have a new phone number.  

### ENCAPSULATION

Classes provides a way to package data and behavior in a single construction. The *phonenumber* variable is not foreign or external to *Phone Type*, it is an instrinsic property of the Phone. The *setPhoneNumber* method is also intrinsic to the Phone. If you invoke the *setPhoneNumber* method, it will act on a data that belongs to the Phone object, not something alien to the Phone. Java enforces this kind of encapsulation in a strict fashion. There is no way to define a stand-alone method or a stand-alone variable, every method and every variable needs to be associated with a *Type*. 

The concept of objects, classes and types are intertwined. Understanding these concepts individually and collectively forms one of the basis of effective Java programming. 

Objects are created from classes. You cannot create an object without a class definition. When you create an object, the process is known as *instantiation*. An instantiated class &mdash; an object &mdash; can respond to messages or methods as long as the methods are within the defined protocols of the class.  

A *Type* is a collection of methods. One way to define a *Type* is to define a class &mdash; there are two other ways but they will be deferred for later discussion. It is not correct to say that a class has a type. It is correct to say that a class is a Type, just as it is correct to say that an object has a Type &mdash; the Type that was defined by the class.

To illustrate the relationship between a class and an object, try imagining a house plan, a blueprint if you may &mdash; the kinds of drawings that architects produce before building a house. If we build one house out of an architect's blueprint, we can say that the physical house that was built is an instance of the blueprint.  

If we build another house using the same architect's blueprint, we can say that the second house is another instance of the architect's blueprint. Now there are two houses built from the same blueprint. Even if the two houses will be identical because of their structural similarities, they are actually two distinct houses, they are not one and the same. They will be inhabited by different people, they may differ in roof colors or interior paints etc. That is exactly what's going on as well between *classes* and *bjects*. Classes are the blueprints from whence objects come from. 

Going back to the Phone example, if we wanted to create other Phone objects, we simply need to instantiate the Phone class again. 

<pre>
	import static java.lang.System.out;

	class Phone {
   	String phonenumber="6321234567";
   	void answerCall() {
      	out.println("Answering call...");
   	}
   	void dialNumber(String args) {
      	out.println("Calling " + args);
   	}
		void setPhoneNumber(String args) {
      	phonenumber = args;
   	}
	}

	class PhoneTest {

	  public static void main (String [] args){
      Phone p1 = new Phone();
      p1.answerCall();
      p1.dialNumber("6329876543");
      
      Phone p2 = new Phone();
			p2.setPhoneNumber("6329995555");
      p2.answerCall();
      p2.dialNumber("6327778888");
   	}
	}
</pre>
<div id="cap">Phone.java</div>


### STATE ENCAPSULATION

The variables *p1* and *p2* are both of type Phone but they are two distinct objects. They have two different states (phone numbers). You can manipulate one phone object without impacting the state of the other. This characteristic of objects allows for a more sane and rational programming environment. 

***

## CONSTRUCTORS

Object creation requires four things, the type of object to be created, a variable to store the reference of the created object, the *new* keyword to effect the actual creation and a *constructor*. You have seen and used all these things with the exception of the last one, the constructor. In the statement <code class="codeblock">Phone p1 = new Phone()</code>, *Phone* is the type and *Phone()* is the constructor. 

A constructor call is a method, first and foremost but it is not an ordinary method. It is special because it bears the same name as that of the class where it is declared and unlike ordinary methods, it is not written with a *return type*. 

Constructors are important, you cannot create objects without them. They are of extreme importance that Java will actually supply a default constructor in case you do not provide one explicitly. 

<pre class="codeblock">
	class Phone {

		public static void main(String []args) {
			Phone p1 = new Phone();
		}
	}
</pre>

In the preceding code sample, we did not define an explicit constructor but we were still able to call <code class="codeblock">new Phone()</code>. The reason for this is because Java supplied our code with a default *no-arg constructor* (no argument constructor). As if we had written something like

<pre class="codeblock">
	class Phone {

		Phone() {
		}

		public static void main(String []args) {
			Phone p1 = new Phone();
		}
	}  
</pre>

There is also no *return* statement within the body of the constructor. When the constructor returns, it will create an object of type Phone, the variable *p1* will hold a reference (an address) to actual Phone object. 

***

## INHERITANCE POLYMORPHISM

A class can re-use all the codes and functionalities of another class by means of extension. The class being extended is typically called the *parent class* (sometimes also called super class or base class) and the extending class is called a *child class*.  

Class extension grants the child class all the inheritable methods and variables of the super class. The instant functionality gained from class extension impacts the productivity of the programmer in a positive way. If the abstractions are done carefully and rationally, it becomes possible to write a piece of code that can be used in other applications. 

<pre>
	import static java.lang.System.out;

	class Telephone {
		String phonenumber;
	
		void init() {
			out.println("connecting to carrier via land line");
		}
		void dialNumber(String args) {
			out.println("Dialling " + args);
		}
		void answerCall() {
			out.println("Answering call...");
		}	
	}

	class MobilePhone extends Telephone {}

	class TelephoneTest {

		public static void main(String[] args) {

			MobilePhone mp = new MobilePhone();

			mp.init();
			mp.dialNumber("6327775566");
			mp.answerCall();

		}
	}
</pre>
	

### EXTENDS

In the sample code, the *MobilePhone* type was created by defining a class. The class block does not contain any definition and yet we were able to call the *init*, *dialNumber* and *answerCall* methods against it &mdash; these methods, though not explicitly defined inside the *MobilePhone* class has been inherited from the *Telephone* class. The *extends* keyword is used to denote that one class is inheriting from another class.

### JAVA'S ROOT CLASS

Class extension is not an optional activity in Java programming. A Java class needs to extend *at least and at most* one other class. All newly defined classes, by default, extends the *java.lang.Object* class, unless otherwise overriden by an explicit *extends* declaration. In Listing 4.5, class Telephone is not explicitly extending any class, hence it is a child class of *Object*--it is as if we had written;

<pre>
	class Telephone extends Object {

	}
	class MobilePhone extends Telephone {

	}  
</pre>

*MobilePhone* does not extend *Object* because we declared explicitly that it extends Telephone. You will realize soon enough that every class in Java descends either directly or indirectly from *java.lang.Object*. It is the root class of all objects in Java


### SINGLE ROOTED INHERITANCE

I would not advise that you explicitly declare all your classes to extend from Object. Firstly because Java will do that for you implicitly and secondly because you can only extend one class. There is no way to achieve multiple class inheritance. Java follows a single-rooted class inheritance, once you have extended a class, you cannot inherit from another one. That is not to say multiple inheritance cannot be achieved in Java, it can be, using *interfaces*.

### INTERFACES

Creating a class is one of three ways to define a *Type*. The second way is to create an *interface*. An interface is the purest form of a type because it only contains the protocols but not the implementing details of the object. The class on the otherhand contains both the protocol (the Type) and the implementing details (body of the functions). 

<pre>
	interface Phone {
		void answerCall();
		void dialNumber(String args);
	}
</pre>

An interface is declared using the *interface* keyword followed by a name ^[The name of interfaces are programmer defined, like the class]. The opening and closing curly braces comprises the body of the interface.

Methods are variables can be declared in an interface, but they are not the kind of variables and methods that you would declare insie the class. Interfaces can only contain *abstract methods*, which makes sense because interfaces are supposed to contain only the Type information and not the implementation detail. An abstract method declares only the method signature ^[Method signature is the return type, name of the method and parameters that it accepts] and has a semi-colon immediately right after, in place of the usual method body. If you declare variables inside the interfaces, they will be automatically *final, static* and *public*. 

<pre>
	interface IPhone {
		void answerCall();
		void dialNumber(String args);
	}

	class Phone implements IPhone {
		public void answerCall() {
			System.out.println("Answering call");
		}
		public void dialNumber(String args){
			System.out.println("Calling " + args);
		}

		public static void main(String[] args) {
			Phone p = new Phone();
			p.dialNumber("632444888");
			p.answerCall();
		}
	}
</pre>

Interfaces are not meant to be instantiated, they are meant for type extensions (inheritance). To use interfaces, they must be *implemented* by a class. The code sample of listing 4.7 shows a Phone class inheriting the type *IPhone* using the *implements* keyword. 


### INHERITING FROM AN INTERFACE BINDS YOU TO A CONTRACT

When you implement an interface, you are entering into a contract, that you will *implement* whatever methods you have inherited. Implementing a method means that you will provide the details of the function. You will supply the function body. 

At first glance, it looks like more work for the programmer because you are duplicating code. First you will write the interface but the methods doesn't have details, then you will implement in a class then supply the details of the method. This argument maybe true for trivial applications ^[I would define a trivial application as something that you don't intend to maintain or improve in the course of years. A disposable application], but for non-trivial applications, coding against an interface rather than a concrete class is good way to use the Java typing system to achieve maintainability of code. Another reason to use interfaces is when you truly need multiple inheritance. Let us expand the Phone program.

<pre>

	import static java.lang.System.out;

	interface Printer {
		void print();
	}

	interface Phone {
		void answerCall();
		void dialNumber(String args);
	}
  
	interface Copier {
		void copy();
	}

	class MultiFunction implements Printer, Phone, Copier {
		public void print() {
			out.println("Printing");
		}
		public void answerCall() {
			out.println("Answering call");
		}
		public void dialNumber(String args) {
			out.println("Dialling " + args);
		}
		public void copy() {
			out.println("Copying");
		}	
	}

	class TestMultiFunction {

		public static void main(String[] args) {
			Printer printer = new MultiFunction();
			Phone phone = new MultiFunction();
			Copier copier = new MultiFunction();
		
			printer.print();
			phone.answerCall();
			copier.copy();
		
			System.out.println(copier.toString());
			copier.print();
		}
	}
  
</pre>
<div id="cap">MultiFunction.java</div>

The *Multifunction.java* code defines three interfaces, the *Phone*, *Printer* and the *Copier*. The class *MultiFunction* implements all three interfaces. 

This code is saying that &mdash; MultiFunction *is a* Printer, it *is also a Copier* and a *Phone*. As such, a MultiFunction object should behave as a Phone, a Printer or Copier will behave. That is the object contract between these three interfaces and the class.  

If you review the codes inside *TestMultiFunction*, we  did not use the MultiFunction type when the object was created, we used the Type name as specified on the *interface* definitions. Let's recap that portion of the code

<pre class="codeblock">
	Printer printer = new MultiFunction();
	Phone phone = new MultiFunction();
	Copier copier = new MultiFunction();
		
	printer.print();
	phone.answerCall();
	copier.copy();
</pre>

Had we use the code <code class="codeblock"></code>MultiFunction printer = new MultiFunction()</code> , it would have been fine. The code will still compile and run perfectly. So why didn't we do that? Because I only need a *Printer*, I chose a more general type because I am not sure that I will not change the implementation details of the *print()* method in the future. 

It can be argued that if I need to change some details of the *print()* function, I should just go inside the MultiFunction class and change it, but I would rather not do that for a host of reasons. The most important one being that at some point, some of my codes maybe depending on how I actually implemented the print function inside the MultiFunction class. If I change that, some parts of the application could break. 

On the other hand, using the *Printer* interface as a type allows me to achieve loose coupling between the type and its actual implementation. If I need to change some of the details of print() function, I could simply create another class that implements the *Printer* type and make that adjustments on the new class. This approach has some level of encapsulation because I am containing the possible (negative) impact of code change. 

<pre class="codeblock">
	//If I need to change something on the print function()
	class ColorPrinter implements Printer {
		public void print() {
			...
		}
	}

	Printer printer = new ColorPrinter();
</pre>

The above code shows a possible approach if I really need to make adjustments to the print() function in the future. 

All Java objects will have at least one type, but usually it has more than one. The MultiFunction object we have created actually has five. It is a *Copier, Printer, Phone, MultiFunction* and a *java.lang.Object*. 

The Copier, Printer and Phone types are easy to see, they were explicitly implemented by MultiFunction, so that's three. The fourth one (MultiFunction) is not very obvious, but whenever you create a new class, you are creating a new Type. Whatever object you will create out of that class will also bear its type. Our object's fifth type is *java.lang.Object*. That is because no matter what you do, at some point, your class will extend the *Object* class, either directly or indirectly. 

<img src="/img/object-type.png">
<div id="cap">Types</div>


### POLYMORPHISM

Did you notice that he *MultiFunction* object needed to re-define all the methods it has inherited from the three interfaces? We had to re-define *print(), copy, answerCall() and dialNumber()*. Re-defining a method in a subtype is called *method overriding*. 

Overriding a method is done in order for the inheriting class to have a chance to define a unique behavior for the method. For example, the MultiFunction object inherited the *copy()* from the *Copier* interface. What it effectively means is that MultiFunction is making a promise that because it is now a *Copier* object, it will respond to the *copy()* message if invoked. The Copier interface did not specify any behavior for the method, it is up to the implementing class (MultiFunction) to provide the behavior. The provision of behavior for an inherited method can be done using method overriding.  

<pre>
	interface Shape {
		void draw();
	}

	class Square implements Shape {
		public void draw() {
			System.out.println("Drawing a square");
		}
	}

	class Circle implements Shape {
		public void draw() {
			System.out.println("Drawing a circle");
		}
	}

	class TestShape {

		public static void main(String[] args) {
			Shape square = new Square();
			Shape circle = new Circle();
			square.draw();
			circle.draw();
		}
	}

</pre>

<div id="cap">Shape.java</div>

The Shape program is a very trivial and non-realistic example, but the simplicity should aid our understanding of why we use overriding. 

The *Shape* type could have been written as a class. The *Square* and *Circle* classes could have **extended** a Shape class instead of implemented a Shape interface. Why didn't we do that? Here are the reasons

1. Shape is not a real object (even in the real world). Shape is a name we give to describe the contour of something, the state of something. It is not *something*. Just like animal is the classification we give to cats and dogs. A cat is a real thing, a dog is a real thing, an animal is not. Animal is a *type*
2. If you think about it hard enough, can *Shape* really draw something, will it make sense?
3. It makes sense that Circle and Square descend from a common type, after all Circle and Square are, well, shapes.

The *draw()* method are both available in Circle and Square, but they have different implementations or behavior (method body). This was possible because we have overriden the draw() method where it makes sense. It makes the <code class="codeblock">draw()</code> method polymorphic, it changes its behavior depending on which object you are calling it against. 

<hr class="chapterbreak"/>

<h1 class="chapter">EXCEPTIONS</h1>



When you start using code libraries written by other people, it is no longer enough to simply know the name of the method and the parameters that you need pass. You also need to know if the methods you will be calling are *throwing Exceptions*.

An Exception is an error, an abnormal condition, a disruption of normal program flow. 

Programmer's throw Exceptions from their their codes if they think something has gone awry. As a (responsible and defensive) programmer, you will make sure that your code will be able to respond to non-fatal conditions. Surely you will not allow your program to crash because the user has inputted wrong data. The code must be robust enough to recover from and even rectify abnormal conditions. 

A common routine for applications is opening a file. The workflow is straightforward. User selects a file from a list, your code is supposed craft some sort of display window to display the contents of file, after opening it &mdash; sounds straightforward doesn't it. 

If we tried to code this using the control structures (thus far) available for us, it might look something like 

<pre>
class SampleFileCheck {

    public static void main(String []args)) {

        String filename = askUserToInputFile();
        boolean test_the_file = checkFileExistence();

        if(test_the_file == true) {
            //we know it is safe to open the file
            ...
        }
        else {
            //some codes here to inform
            //the user the file does not exist
            ...
        }   
    }

    static String askuserToInputFile(){
        ...
    }
    
    static boolean checkFileExistence() {
        ...    
    }

}
</pre>


From this trivial example I hope it is clear why we need to bother making our code robust. We need to anticipate error conditions because we cannot predict the kind of environment our codes will be subjected to. 

End users are prone to commit errors and misspell things. Network connections go down, databases get corrupted, the list can go on. These are some of the many reasons why we need to bother with abnormal conditions.

It begs the question now "How can we know if a method can throw Exceptions?" The unfortunate answer is "Read the API documentation". The documentation of Java is readily available in a variety of format, so there is no excuse not to read it.

If you need only to peek quickly at the method signatures of specific classes, the *javap* utility allows you to print a summary of class methods. You can do that from the command line. Try it now &mdash; <code class="codeblock">javap java.lang.String</code>

This command will output to the console all the methods and constructors that are found inside java.lang.String. Remember that you need to use the fully qualified name of the class. 

***

## TRY-CATCH

Going back to our pseudo code sample of reading a file, if we were to code this in Java, it would look like this

<pre>
	String filename = "something.txt";
		
	try {
		FileReader reader = new FileReader(filename);
	}
	catch(FileNotFoundException fe) {
			
	}
</pre>

Notice that there is no *if-else* block as written in the pseudo code? A *try-catch* mechanism was used for routing program flow instead.

The try-catch block is Java's prescribed way of handling codes that may encounter abnormal conditions. It is somewhat similar to the if-else conditions in so far as it branches the program flow depending on whether there is an Exception encountered or not. 

to recap

- **Q:** What should I write inside the try block
- **A:** statements that may throw Exceptions. There is no point writing a try block around a statements that do not declare Exceptions 

- **Q:** What should I put inside the catch block
- **A:** statements that you need in order to cope with the abnormal conditions. It could be as simple as logging the error. Sometimes you may need to write code in order to recover from the error.

- **Q:** How do I know which Exceptions to catch
- **A:** Read the API of the method you intend to call. In our FileReader example, I actually ran the command <code class="codeblock">$ javap java.io.FileReader</code> from a console, that's how I knew that the constructor of the *FileReader* class throws the FileNotFoundException

- **Q:** What if I need to call another method, and it throws a different Exception
- **A:** Well, just add another *catch* block to your try-catch mechanism. You can have multiple catch blocks anyway.

- **Q:** Do I always need to use the try-block
- **A:** No, if the method you are invoking is not throwing any Exception, then there is no need to try-catch it. See the answer above. 

***
## TRY-CATCH-FINALLY

The finally block has a special purpose. Whatever you write inside the finally block gets executed, no matter if an Exception was raised or not.  This behaviour makes it ideal for writing clean up codes, such as closing database connections or closing file connections

<pre>
	try {
		Statement 1;
		Statement 2;
		Statement 3;
		Statement 4;
	}

	catch(Exception e) {
		Statement 5;
		Statement 6;
	}

	finally{
		Statement 7;
		Statement 8;
	}
</pre>

Let's do some scenario analysis

### IF EVERYTHING WENT OKAY
Every statement inside the try block will be executed, then every statement inside the finally block will be executed as well. None of the statements within the catch block will be executed.

### SOMETHING WENT WRONG, STATEMENT 2 WENT BONKERS

In this case, statement Nos. 3 & 4 will be skipped. Program flow will be transferred immediately to the catch block. All the statements inside the catch block will be executed. Then all the statements in the finally block will be executed 

As a matter of flow of control, you cannot circumvent the finally block, it will be executed, no matter what &mdash; actually, that's not true, there is a statement that can force the *finally* clause to be skipped, that is <code class="codeblock">System.exit(1)</code>. That code is guaranteed to halt anything, but you know what I mean, you really wouldn't use this statement irresponsibly now, would you?

***

## THROWS CLAUSE 

When you invoke a method and it throws an *Exception*, you can somewhat ignore it.How do you do that? The answer can be a bit long-winded, but bear with me. 

Remember our code for reading a file? We had to use a library from *java.io*, the FileReader class. The FileReader is a standard library for Java. If you read the API doc for that class, you will find something like this

<pre>
public FileReader {

	public FileReader(String filename) throws FileNotFoundException {

	}
}
</pre>

There is *throws* clause in the constructor of the FileReader. What does it mean for us? It means that we need to take some caution using this class. We need to take extra steps even at the point of instantiation. The *throws* clause is warning us that it can potentially throw an error and it needs to be handled appropriately.

There are two ways we can call methods that have *throws* clause. We have already done the first one a while back (the try-catch-finally). The other way to handle such methods is to kick the Exception upwards &mdash; let me explain that by starting with a code example.

<pre>
import java.io.FileReader;
import java.io.FileNotFoundException;

class FileSample {
	
	public static void main(String[] args) throws FileNotFoundException {
		
		String filename = "something.txt";
		FileReader reader = new FileReader(filename);
		
	}
}
</pre>

In the code construction above, we did not enclose the *FileReader* constructor inside a *try-catch* block. We declared a throws clause as part of the *main()* method. 

If something does happen inside the body of the *main()* method, say the FileReader constructor encounters an error because the file wasn't there, I will not handle inside the *main()* method.

The thrown Exception will first look if there is any *try-catch* block where the error can be handled. It won't find any, because we did not write one. The Exception will then look at the signature of the method where the Exception has happened &mdash; in this case, inside *main()*. The error will be passed to a higher level in the call stack (who ever called method *main*). Of course, the one who will call the main() method is already the JVM, so in case something abnormal does happen to our code while executing the FileReader constructor, the JVM will simply halt and throw us a bunch error printouts.

***
## BUBBLE THE EXCEPTION UP THE CALL STACK

Let's work with another example. This is not different from the previous example, just more elaborate. In this construction, the main method calls *doo* which in turn calls *foo* which in turn calls *goo*. Method *goo* throws the *FileNotFoundExcpetion*, so does *foo* and so does *doo*. 

<pre>
import java.io.FileNotFoundException;

class ThrowSample {

    public static void main (String [] args) {
        
        ThrowSample ts = new ThrowSample();
        
        try {
            ts.doo();
        }
        catch(FileNotFoundException fe) {
            //error handling
            //code here
        }
    }

    void doo() throws FileNotFoundException {
        foo();
    }

    void foo() throws FileNotFoundException{
        goo();
    }

    void goo() throws FileNotFoundException {
        //Open a file here
    }
}
</pre>

Notice that inside *goo*, there is no try-catch block? That should not be a surprise anymore. We know the reason why we don't have to try-catch inside *goo*, that is because, in the method signature, we said that it *throws FileNoutFoundException*. If anything happens inside method *goo*, we will simply throw upwards to whoever called method *goo*. 

<img src="/img/exception-bubble.png">
<div id="cap">How Exceptions are propagated</div>

Method foo invoked *goo*, *foo* also did not use a try-catch block to handle the FileNotFoundException, instead, it also passed the buck upwards. 

The buck stopped at method *main*, we did not declare a throws clause on the signature of *main* and hence, we are obliged to handle the Exception using a *try-catch* block. 

Whenever you are using a method, always check the signature. If the signature declares that it is throwing Exceptions, you need to handle that exception your code either by re-throwing it up the call stack, or by enclosing it in a try-catch block. You do this for **CHECKED EXCEPTIONS**

There are errors and *Exceptions* that may still be thrown during runtime, but you will not find them on the declaration of method signatures. These are called **UNCHECKED EXCEPTIONS**, for example, say you tried to divide some integer value with zero, that will result to an *ArithmeticException* &mdash; but you don't guard against arithmetic exceptions during compile time though.

***

## WRITING YOUR OWN EXCEPTIONS

You can write your own Exceptions if you want to, For whatever reason you may have. Some people write Exceptions to closely model the business domain they are working on, for example, when balance of a SavingsAccount object goes down below a set threshold, some programmers might throw an Exception like "InsufficientBalanceException".

To create your own Exception, the simplest way is to extend *java.lang.Exception*.

<pre>
class A extends Exception  {
	
	public String getMessage() {
		return "You got an error on ...";
	}
}
</pre>
<div id="cap">Custom Exception</div>

*Class A* is now a bonafide Exception object. You can *throw, try and catch* type A objects just as would throw, try and catch any other built-in Exception objects in Java.  

The <code class="codeblock">getMessage()</code> method was overridden so we can provide a friendly error message when the Exception is triggered. Whatever you write inside the body of *getMessage()* will be spewed to the screen, in case the Exception is triggered.  

***

## REMEMBER THE FOLLOWING

When calling java method that have been coded by other people (or even coded by you), you need to be aware whether or not they are throwing Exceptions. 

If the methods are declared to throw Exceptions, you need to choose how you will handle it. You can a) handle it using try-catch-finally or you can b) let other methods bother with the Exception by simply putting a *throws clause* on your own methods.

If you do decide to handle the Exception using try-catch-finally mechanism, remember that you can declare as many *catch* blocks as you need. 

If you do write a *finally* clause, remember that all the codes inside that block will get executed no matter what.

<hr class="chapterbreak"/>

<h1 class="chapter">BIBLIOGRAPHY</h1>






























