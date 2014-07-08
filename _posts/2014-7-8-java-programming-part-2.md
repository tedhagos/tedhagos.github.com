---
layout: post

title: Core Java Programming, Part 2

description: 

excerpt: 

author: Ted Hagos

lastupdate: 


tags: core java programming


categories: java

---


## 7. Operators

This should not not be a long section. If you have programmed before using another language, chances are these operators are exactly the same thing in that other language that you used. So it's a not a big deal. There is not much to see here and to be honest, quite boring. So in this section, we will simply list the operators that you can use in Java. No gotcha's nor clever examples, just a list. 

### 7.1 Arithmetic

The *+ - * / and %* functions as you might expect. They work on numbers, both real and integral &mdash; with the exception of the *+* which also works on *Strings* as you've seen earlier.

### 7.2 Comparisson

The *> >=  < <= and ==* are read, more than, more than or equal to,less than and less than or equal to, respectively. You know how to use them, you don't need me to explain.

### 7.3 Logical

- *&* a logical *and*. The expression will only be true if both operands are true
- *&&* a short circuit *and*, more or less the same as the logical *and* but it's short circuit. If the first operand is already false, it will not even bother testing the second operand, it will immediately return *false*, hence it's name, short-circuit.
- *|* a logical *or*. The expression will return true as long as one of the operand is *true*
- *||* a short-circuit or. It follows the same prinnciple as *&&* only it performs it on an *or* condition &mdash; can you figure it out? That's your homework. 
 
There are other operators in Java, but we won't list them here. It makes sense to tackle them when there is more context. So we will leave the discussions of these other operators like *++ and --* for later.

## 8. Program flow

Your ability to direct and command the flow of control in your program is one of the defining skills for a programmer. There are basically 3 ways that you can arrange the commands in your program code. You can execute commands one after another, *sequencing*.
You can execute certain commands when certain conditions are met, *branching*; and you can keep on repeating certain commands while certain conditions are still true, *looping or iteration*

***

### 8.1 If statement

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

#### 8.1.1 Nested structures

You can put an if statement inside another if statement. You can in fact nest them up pretty deeply. While there is no set limit on how deep you can nest if statements, practical considerations and code readability should knock some sense into your code. 

From my experience, whenever I am treading dangerously deep into a web of if-else-if-else, that is usually a signal to take a step back and look if there are other ways of going about controlling program logic. It could be a design or analysis problem already and that using the if-else statement is not the right tool to solve the problem at hand. 



### 8.2 Switch statement

When the nature of the decision you need to make is a bit on the fuzzy side, it could be impractical to use the if-statement, for those kinds of decisions, you will use the switch-statement.

The syntax of the switch statement is;

<pre class="codeblock">
switch(expression) {
  case CONSTANTEXPR:
  case ENUMCONSTANTNAME:
  default:
}
</pre>

Where expression can either be a *char, byte, short, int*. It can also be *Character, Byte, Short, Integer* OR an *enum* type. By the way, Character is not the same as char, that wasn't a typo. Character is a Java class which is a wrapper class for the char primitive. As of Java 7, you can now use String expressions on the *switch* statement

The following code sample  extracts the day-of-week value from a *Calendar* object. The day-of-week is returned as integer, which makes it perfect to filter using a *switch* statement rather than nested *if*

{% highlight java %}

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
{% endhighlight %}
<div id="cap">Fig 5: switch statement sample</div>

The switch is really simple to use, just put the expression which you'd like to test as an argument to the switch statement, then have a series of case statements inside the switch body.

Each case statement corresponds to a value, if the value of the expression is equivalent to a case value, then instructions immediately right after the colon of the case statement will be executed/evaluated, in fact the rest of the statements will be evaluated, all the way down, until it gets to the last instruction at the bottom of the switch statement; that's not what your intention might be; that is the reason why I put a break statement. Once a case statement evaluates to true, Java blindly executes all the statements after that case, it won't even bother checking the other cases -- so note this, and be careful.

### 8.3 While statement

The while statement is used when you would like to perform some commands repeatedly, like in a loop. There is another statement in Java that does looping, that is the *for* statement.

The **while** and **for** loop may overlap at times because they have a similar function. For a beginner, it may not be quite obvious when to use one and not the other. The basic difference of the two statements though is that;

1. Use the while loop if you do not know how many times you need to loop
2. Use the for loop if you actually know how many times you will need to go through the loop

A while loop looks like the following

<pre class="codeblock">
while(condition) {
  statement 1;
  statement 2;
  statement n;
}
</pre>

The condition is either a literal (the keywords true or false) or an expression that will evaluate to either true or false (boolean values).

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

### 8.4 For statement

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

{% highlight java %}
class for_sample {
  public static void main (String [] args) {
    for(int i=0; i<=10;i++) {
      System.out.println(i);
    }
  }
}
{% endhighlight %}
<div id="cap">Fig 6: Sample use of the for loop</div>

In the preceding example, we print some numeric values from zero (0) to ten (10). This is the exact thing that our *while* example was doing earlier.  



### 8.5 Break and Continue

The **break** and **continue** keywords disrupts program flow inside loops, whether the for-loop or while-loop. 

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


The break statement caused the program flow inside a block to forcibly exit. In the sample code (Fig 7), as soon as the break statement is encountered, the program control ignored statements 3 and 4. The while loop will go out of scope and program control will be transferred to the first executable statement immediately after the while block -- in this case, statement 5.  

You normally will not use the break statement in this fashion because it doesn't make sense. This statement is usually deployed with more logical finesse. 

{% highlight java %}
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
{% endhighlight %}
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

## 9. Arrays



## 10. The simplest programs

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

## 11. Parameters from the command line

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

### 11.1 CLI params iteration

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


[Core Java Programming, Part 2]({% post_url 2014-7-8-java-programming-part-3 %})

