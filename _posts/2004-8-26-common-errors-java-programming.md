---
layout: post

title: Common Java Programming Errors

description: 

excerpt: This should aide beginning programmers. I've compiled this list because I kept seeing them in my students over and over again. Encountering errors is part of the learning process. In fact, I think it is a critical part of that process. When our brains gets stumped, it seeks other ways of doing things. It tries out different things until it makes a break through &mdash; of course this was all before the forums became popular. Before (some)programmers turned from being creative creatures to freeloaders &mdash; CAN I HAS THE CODES. It's a sad story.

categories:
- java
- programming
- errors

---


## SEMICOLON 

 A lot of your errors can really be solved by the semicolon. Java ignores white space, you need to tell it that your statement is finished by ending it with a semicolon.

This isn't tricky to catch. The compiler is going to tell you where exactly you forgot the semicolon. 


***



## RUNNING THE BYTECODE

<code class="codeblock">java Hello.class</code> is not the proper way to run a byte code. You do not include the *.class* extension. You simply run it with <code class="codeblock">java Hello</code>. 

This error results in a *NoDefFoundException*. This error is thrown when you try to use a class file that does not exist &mdash; true enough, there is no *Hello.class* class, there is only the *Hello* class. Drop the extension of the filename when you want to run your program.



***


## FORGETTING MAIN

<pre>
  class Hello {
    
  }
</pre>

This class will compile but it will not run. If you try to run <code class="codeblock">java Hello</code>, you will get a *NoSuchMethodError main*.  

The *main* function is not a requirement for compilation but a requirement for runtime. Not all of your classes will need a *main* but if you will run them on the command line, then they need a *main*.

<pre>
  class Hello {
    public static void main(String []args){
    }
  }
</pre>

This code will both compile and run.

***

## SPELLING AND CASING

Wrong spelling and type casing of the *main function*. It should be <code class="codeblock">public static void main(String args[])</code>.   Common variations of this mistake

<pre class="codeblock">
Main(String args[])
Main()
main(string args[])
</pre>

***

## CURLY BRACES


Methods, Classes and Interfaces always will contain *blocks*. Blocks are made up of a pair of curly braces &mdash; they need to pair up. On trivial codes with just a few levels of nesting, this may not be an issue. On more involved codes with nested blocks, this will be a problem.

This can be solved by practice and convention. If you use the *K & R* way of french bracketing, then stick to it. Don't mix and match *C++ style*  with K & R.

<pre>
  
      class Hello { // opening brace is here

      }
      
</pre>
<div id="cap">K & R bracket</div>

<pre>
  
      class Hello 
      { // opening brace is here

      }

</pre>
<div id="cap">C++ style</div>

You can also move away from this problem quite easily by using a real programmer's editor. One that has facility to visually inspect paired curly braces and preferably one with *code folding* abilities. 

Now you know one more reason why notepad is not a hard core programmer's editor. It's not a programmer's editor. At all. It never was.

***

## OBJECT COMPARISSON

<pre>
class CompEqual {
  public static void main (String[] args) {
    String a = "Hello"; 
    String b = "World";
    String c = a + b;

    System.out.println(c == (a + b)); // false
    System.out.println(c.equals(a + b)); // true
  }
}
</pre>
<div id="cap">Object Comparisson</div>

Use *==* to compare primitive values. These things are stored on the *stack*. 

When things are stored on the *heap* &mdash; all reference types are stored on the heap &mdash; use the *.equals()* method. 

Remember that *variable a* does not really contain "Hello". The string "Hello" is stored somewhere on the heap. What *variable a* contains is the location of "Hello" in the heap. So when you compare *c == (a + b)* you are not comparing the string contents, you are comparing memory addresses. 

***

## ARRAY IS ZERO BASED


<pre>
class Arr {
  public static void main (String[] args) {
    String arr[] = {"Apple","Orange","Banana"};
    for (int i =0; i <= arr.length ; i++ ){
      System.out.print(arr[i]);
    } 
  }
}
</pre>
<div id="cap">< is not the same as <=</div>

<code class="codeblock">arr.length</code> is = 3 but it doesn't mean that the last element's ordinal position is 3. The last element number is 2 because arrays start with 0 &mdash; *0 - Apple, 1 - Orange, 2 - Banana*

This results to an *ArrayIndexOutOfBounds* exception because the for loop is trying to access element number 3 of *arr*, which there is none, it is only up to element number 2. 

The for loop above should have been written as <code class="codeblock">for(int i =0; i < arr.length)</code> or <code class="codeblock">for(int i =0; i <= arr.length - 1)</code>

***

## EMPTY CATCH BLOCKS

<pre>
try {
	DriverManager.getConnection();
	// some other statements here
}
catch(Exception e) {
	// NOTHING, ZILCH
}
</pre>

This is just plain laziness. You think you will have time to get around putting an actual handler later on? What happens when you  get so involved and immersed on other parts of the code. When your 50 liner code turns to 500, this will be very difficult to spot. 

When an actual error happens, the *catch* block will activate and guess what happens. Nothing. Zilch. The error is suppressed. You sunk it down. Covered it up. Swept under the rug.

As a rule of thumb, make errors scream and shout during development. You don't want it with a faint voice or no voice at all. It needs to grab your attention.

***

## TOO GENERIC EXCEPTION

<pre>
try {
	Class.forName();
	DriverManager.getConnection();
}
catch(Exception e) {
	// SOME ERROR HANDLING CODES HERE
}
</pre>
<div id="cap"></div>

Yeah, this would work. *Exception* is a very general class and all possible exceptions will be trapped by this one. Problem here is that when a SQLException occurs, do you think you can tell from the *Error Message* that is something related to SQL. You will just get a very generic notification. This is just slightly better than *empty catch blocks* &mdash; like I said &mdash; make the errors scream and shout. Really loudly. 

Use the specific exceptions for the catch blocks. If the code on the try block can throw SQLException and ClassCastException, then catch SQLException and ClassCastException. Not the generic *Exception* class.

