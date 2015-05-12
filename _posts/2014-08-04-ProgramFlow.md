---

title: Program Flow
author: Ted Hagos
categories: javascript

---


The JavaScript interpreter looks for the first statement in a program or script. It will read and execute that. If there is another statement after the first one, it will execute that too. It will keep on doing this until there are no more statments to execute. Think of program flow like a river or stream. It flows in one direction unless something alters that direction.

Sometimes, the interpreter encounters an instruction that will divert the flow of execution. These instructions are called control structures. Some structures allows you to branch and some structures allows for looping.

Branching happens when you divert program flow away from a linear path. Some instructions on the script are skipped or not performed when some conditions are true (or not). Branching is facilitated in JavaScript by using the keywords **if** and **switch**.

Looping happens when you perform statements repeatedly. This kind of control flow can be done by using the keywords **while** and **for**.

# TODO Rework the examples so it doesn't use nodejs, use the browser

# TODO Reword. The prose is weak

# If statement

Branching statements allows you to side step some statements when some conditions are true; **if-else** statement is one way to branch. When the expression inside the **if()** construct yields true, the statement inside the if block is executed. 

The **if** statement can be used when you want to conditionally skip some statements. It forks the program flow. The basic construction of an **if** statement is as follows

    if (<boolean expresion>) {
      // statements;
    }

The boolean expression (condition) is an argument to the **if** reserved word. It needs to evaluate to either true or false. The pair of curly braces is optional. If you only have one statement to execute when the condition is true, the braces can be omitted. 

{% highlight java %}
var i = 10;

if (i == 20) {
  console.log("true");
}
else {
  console.log("nah!");
} 

// RETURNS nah!
{% endhighlight %}
    
Be careful when writing your comparisson operator. Here's a slightly modified version of the code above
    
{% highlight javascript %}
    
var i = 10;

if (i = 20) {
  console.log("true");
}
else {
  console.log("nah!");
} 

// RETURNS true

{% endhighlight %}

Can you spot the difference? The expression inside the if() construct is improperly written as an assignment rather than a test for equality&#x2013;but JavaScript went to evaluate it anyway. Be careful with this one because this mistake is so easy to make. The reason this returned ****true**** is because an arithmetic assignment operation returns the zero value, and if you use a number where a boolean expression is expected, the number is convered to the **true** value. 

# Switch statement

is another way of branching. It is a bit more concise than the if-else statement, it allows for a different kind of construction. 

{% highlight javascript %}

var s = "hello";
var ret;

switch (s) {

  case "he":
    ret = "he";
    break;
  case 1:
    ret = 1;
    break;
  case true:
    ret = "true";
    break;
  case "Hello".toLowerCase():
    ret = "Hello";
    break;
  default:
    ret = "nothing";
}

console.log(ret);


// RETURNS "Hello"

{% endhighlight %}

The values listed in **case** statements can be Strings, booleans or numbers (a bit of a relief if you are coming the Java language where the case is restricted to integer values). Always add the **break** keyword inside the case statement lest you will have unintended consequences&#x2013;without the break keyword, the program will overflow to the remaining statements of the **switch construct** even if a match has already been found. 

# While loop

Looping or iteration statements allows you to perform some statements repeatedly while some conditions are true.

The **while** statement is a looping mechanism. It requires a boolean value (or an expression that yields a boolean value) inside the ****while()**** construct. The statements inside the while block will be executed repeatedly as long as the expression inside while() is true. When the expression is no longer true, the loop terminates. 

    var timetoexit = false;
    var counter = 0;
    
    while (!timetoexit) {
      console.log("counter = " + counter);
      if (counter++ == 10) timetoexit = true;
    }

You can use the **break** keyword to break out of loops, like this

    var timetoexit = false;
    var counter = 0;
    
    while (!timetoexit) {
      console.log("counter = " + counter);
      if (counter++ == 10) break;
    }

The break keyword causes the program flow to ignore all the statements (if there are any) immediately following the **break** keyword and fall right outside the end of the while block where the program flow will resume.  

Another keyword related to loop structures is the ****continue**** keyword. It causes program flow to jump also

    var timetoexit = false;
    var counter = 0;
    
    while (!timetoexit) {
    
      console.log("counter = " + counter);
      if (++counter == 10) {
        timetoexit = true;
        continue; 
      }
      console.log("*");
    }

Unlike **break** though, ****continue**** causes program flow to ignore all the remaining statements until the end of the while block and jump right away to the beginning of the while loop&#x2014;forcing the condition to get re-evaluated; this is the reason why our last asterisk never got printed. 

# For loop

The **for** statement is another looping mechanism. The for loop like the while loop allows you to iterate and perform a group of statements over and over again. 

    for ([where to begin] ; [where to stop] ; [step]) {
    
    }

A key concept in using the for loop is the counter (the step). Loop will perform all the statements inside the block for a finite and determined number of times. Each time that the whole block is evaluated, the step value is incremented. The incremented step value is then compared to the ending value, and when the ending value is reached, the for loop will then terminate. The program control will fall over to first statement immediately after the for loop block.

    for (i = 1 ; i < 10 ; i++) {
    
      console.log(i);
    
    }

The code sample above defines the starting point at 1 (i = 1), it will stop the loop execution when **i < 10**.  Each time the **for** loop is evaluated, the i variable will be incremented by 1 (i++).

Here is a another sample of the for loop.

    var util = require('util')
    
    var i = 1;
    var j = 1;
    
    for (i = 1 ; i < 10; i++) {
    
        for (j =1 ; j < 10; j++) {
    
            util.print(i * j + "\t");
    
        }
    
        util.print("\n");
    }
    
    
    /*
    
    RESULT
    
    1   2   3   4   5   6   7   8   9   
    2   4   6   8   10  12  14  16  18  
    3   6   9   12  15  18  21  24  27  
    4   8   12  16  20  24  28  32  36  
    5   10  15  20  25  30  35  40  45  
    6   12  18  24  30  36  42  48  54  
    7   14  21  28  35  42  49  56  63  
    8   16  24  32  40  48  56  64  72  
    9   18  27  36  45  54  63  72  81
    
    */

This code requires the node.js library **util**. We can't use the STDIO (console.log) here because it automatically adds a CRLF (carriage return-line feed) while **util.print()** library does not. Node.JS has many libraries for convenient use, you just need to do the **require(libname)** statement if you want to use it.
