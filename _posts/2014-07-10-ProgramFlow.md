---

title: Program Flow
author: Ted Hagos
categories: java

---


Your ability to direct and command the flow of control in your program is one of the defining skills for a programmer. There are basically 3 ways that you can arrange the commands in your program code. You can execute commands one after another, **sequencing**.
You can execute certain commands when certain conditions are met, **branching**; and you can keep on repeating certain commands while certain conditions are still true, **looping or iteration**

## If statement

    if(condition) {
      statement 1;
      statement 2;
      statement n;
    }

The **if** statement allows you to conditionally perform some commands. It allows you side-step the main flow of your code. If you remember your flowcharting concepts or logic formumation. When you see the diamond shape, it means you have a fork in the road. When a condition is met, you either go left or right. That is what the **if** statement does. It allows you to test for conditions. When the condition is true, you go to the beginning of the if block (the opening curly brace) and begin executing all the statements there until all the statements are exhausted. When you have reached the end of the block (the closing curly brace), then there are no more commands to execute. The flow of control will resume immediately after the end of the curly brace. 

The condition in the **if** statement can be written as expressions that will evaluate to either true or false. This is the most common use you will have of the if statement. On some occassions, you may see the condition written as the literals **true** or **false** &#x2013; this is rare, but it will still be a legal code. Looks easy, right. 

Okay, a little ice-breaker. Can you spot what's wrong in the next code. Try not to read the explanation and figure it out yourself first.

    int i = 0;
    
    if(i = 1) {
     System.out.println("but i is equal to one");
    }

Did you catch it? If you did not, the Java compiler will. That's a good thing. People with programming experience in **C Language** would be familiar with this, because the expression `if (i = 1)` would have been valid in **C**. Thankfully not in Java, the compiler would have warned you of "Incompatible type error".

The ****if**** statement requires a boolean expession in the argument. The expression `(i = 1)` will not result to a boolean expression, rather it will yield a integer expression; zero if the operation succeeds and non-zero if it fails.

## Nested structures

You can put an if statement inside another if statement. You can in fact nest them up pretty deeply. While there is no set limit on how deep you can nest if statements, practical considerations and code readability should knock some sense into your code. 

From my experience, whenever I am treading dangerously deep into a web of if-else-if-else, that is usually a signal to take a step back and look if there are other ways of going about controlling program logic. It could be a design or analysis problem already and that using the if-else statement is not the right tool to solve the problem at hand. 

## Switch statement

When the nature of the decision you need to make is a bit on the fuzzy side, it could be impractical to use the if-statement, for those kinds of decisions, you will use the switch-statement.

The syntax of the switch statement is;

    switch(expression) {
      case CONSTANTEXPR:
      case ENUMCONSTANTNAME:
      default:
    }

Where expression can either be a **char, byte, short, int**. It can also be **Character, Byte, Short, Integer** OR an **enum** type. By the way, Character is not the same as char, that wasn't a typo. Character is a Java class which is a wrapper class for the char primitive. As of Java 7, you can now use String expressions on the **switch** statement

The following code sample  extracts the day-of-week value from a **Calendar** object. The day-of-week is returned as integer, which makes it perfect to filter using a **switch** statement rather than nested **if**

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

The switch is really simple to use, just put the expression which you'd like to test as an argument to the switch statement, then have a series of case statements inside the switch body.

Each case statement corresponds to a value, if the value of the expression is equivalent to a case value, then instructions immediately right after the colon of the case statement will be executed/evaluated, in fact the rest of the statements will be evaluated, all the way down, until it gets to the last instruction at the bottom of the switch statement; that's not what your intention might be; that is the reason why I put a break statement. Once a case statement evaluates to true, Java blindly executes all the statements after that case, it won't even bother checking the other cases &#x2013; so note this, and be careful.

## While statement

The while statement is used when you would like to perform some commands repeatedly, like in a loop. There is another statement in Java that does looping, that is the **for** statement.

The ****while**** and ****for**** loop may overlap at times because they have a similar function. For a beginner, it may not be quite obvious when to use one and not the other. The basic difference of the two statements though is that;

1.  Use the while loop if you do not know how many times you need to loop
2.  Use the for loop if you actually know how many times you will need to go through the loop

A while loop looks like the following

    while(condition) {
      statement 1;
      statement 2;
      statement n;
    }

The condition is either a literal (the keywords true or false) or an expression that will evaluate to either true or false (boolean values).

The basic idea in a **while** loop is this

1.  The condition is evaluated for the first time, if the condition is true or resolves to true, then;
2.  Perform statement 1, then;
3.  Perform statement 2, then;
4.  Perform statement n, then;
5.  The program detects that we are at the end of while block (the closing curly brace is the end of the while block)
6.  The program will loop back to the condition and re-evaluate it again, if it still true, then;
7.  Perform statement (again)
8.  rinse repeat until you get the end of the end of the block again and until you get to re-evaluate the condition (again).

You will only drop off end of the while block if and when the condition evaluates to false. This is the reason it is best to remember that you need write code inside the while block that will make the condition false at some point in time, lest you end up in a perpetual loop.

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

The sample code above shows the use of a while statement. Always remember to put something inside your while loop that will make the conditon false at some point in time. A perpetual loop can be very difficult for a beginning programmer to spot.

## For statement

    for(beginning value; ending value; step) {
      statement 1;
      statement 2;
      statement 3;
    }

The **for loop** like the **while** allows you to iterate and perform a group of statements over and over again. The for loop though, allows for more control.  

A key concept in using the for loop is the automatic counter, the **step**. The code will perform all the statements inside the block for a finite and determined number of times.

Each time that the whole block is evaluated, the **step** value is incremented. The incremented step value is then compared to the **ending value**, and when the ending value is reached, the for loop will then terminate. The program control will fall over to first statement immediately after the for loop block. 

    class for_sample {
      public static void main (String [] args) {
        for(int i=0; i<=10;i++) {
          System.out.println(i);
        }
      }
    }

In the preceding example, we print some numeric values from zero (0) to ten (10). This is the exact thing that our **while** example was doing earlier.  

## Break and Continue

The ****break**** and ****continue**** keywords disrupts program flow inside loops, whether the for-loop or while-loop. 

    while(condition) {
      statement 1;
      statement 2;
      break;
      statement 3;
      statement 4;
    }
    
    statement 5;
    statement n;

The break statement caused the program flow inside a block to forcibly exit. In the sample code (Fig 7), as soon as the break statement is encountered, the program control ignored statements 3 and 4. The while loop will go out of scope and program control will be transferred to the first executable statement immediately after the while block &#x2013; in this case, statement 5.  

You normally will not use the break statement in this fashion because it doesn't make sense. This statement is usually deployed with more logical finesse. 

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

This is a more likely use of the **break** statement. I should warn you though that this is a frowned upon practice. A truly structured programming should have only one entry point and one exit point. Because of the introduction the **break** statement, our control structure now has one entry point and two exit points.  

While this code is innocent enough right now, it could get very hairy and complicated. You will appreciate following the 1-entry-1-exit rule when you have had your fair share of debugging someone else's code and you are wading through a maze of nested structures with lots of breaks peppered into the source code &mdash; and by then you will understand why nobody wants to work on a code they did not write themselves. 

Next is the ****continue**** keyword. Here is how it behaves.

    while(condition) {
      statement 1;
      statement 2;
      continue;
      statement 3;
      statement 4;
    }
    
    statement 5;
    statement n;

When the **continue** statement is encountered, statements 3 and 4 will be ignored, just like how it was with the break. Unlike the case in ****break**** though, the loop will not go out of scope and will not be immediately terminated.  

The **continue** statement will go back to the beginning of the loop and forcibly re-evaluate condition. If the condition is still true, then the loop continues normally.
