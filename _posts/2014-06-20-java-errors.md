---

title: Common Java Errors
author: Ted Hagos
categories: java

---



# Forgetting the semicolon

The Java compiler ignores white space. The only way for it to know that your statement is complete or finished is if you put tample     
int i = 0
xi = i + 10;
\\#+end\_example  

The first line was supposed to be complete at the assignment of the literal value zero to i, but because you did not properly terminate it, the compiler thinks the statement reads this way

    int i = 0 i = i = 10;

Which of course doesn't make sense. These kinds of errors are easy enough to spot when Java spits out a compilation error, but it may not always be as simple as this. Some IDEs may even help you out to quickly spot mistakes such as this one.

# Running the byte code

`java Hello.class` 

Results to *NoClassDefFoundError*. Just drop the *.class* extension when you run java programs, like this

`java Hello`

# Running a class without a main method

Java, like most other languages requires an entry point to properly run. So if you define a class like this and then try to run it, it will compile but will not run

    // Hello.java
    class Hello {
    
    }

`javac Hello.java`  
`java Hello`

The Java runtime will point it out to you, so it's easy to spot this error. What's not easy to spot are mispellings on the *main* method

    public static void Main(String args[]) // wrong 
    public static void Main() // wrong
    public static void main() // wrong
    public static void main(String args) // wrong

All the examples above will compile, but won't run. They all define a method called either *Main* or *main* but none of them complied with the prescribed signature for a Java entry point. The Java main needs to meet the following conditions

1.  publicly accessible, hence the keyword *public*. It means other classes can call it from any package
2.  statically scoped, hence the *static* keyword. It means there is no need to create an instance of the enclosing class in order to invoke the method. The method belongs to the class and not its instance
3.  It does not return anything, hence the *void* keyword
4.  It accepts an array of java.lang.String type.

A prooper main is written like this

    class Hello {
      public static void main(String args[]) {
    
      }
    }

# Comparing Strings

    // filename: xCompareString.java
    
    class CompareString {
      public static void main(String []args) {
        String a = "abc";
        String b = "abc";
        
        if(a == b) {System.out.println("a == b");}
        else {System.out.println("a <> b");}
    
      }
    }

There are two kinds of data values in Java. The first kind is the primitive data type. Java defines eight of them &#x2014; *byte, short, int, long, char, float, double* and *boolean*. Use the double equal operator to determine equality for these types. The other kind of data in Java is the reference type. Reference types are objects. String is a reference type. 

The example ab ove is a tricky one because the expression `(a == b)` will actually evaluate to true. But that only happened because of Java has a concept of a String literal pool . The variables *a* and *b* truly are pointing to exactly the same instance of "abc" in the pool. 

Comparisson of one String to another &#x2014; or for that matter, one reference type to another &#x2014; use the *.equals()* method. 

    // filename: CompareString.java
    
    class CompareString {
      public static void main(String []args) {
        String a = "abc";
        String b = "abc";
        
        if(a.equals(b)) {System.out.println("a == b");}
        else {System.out.println("a <> b");}
    
      }
    }

# Arrays start with zero, not one

    String basket[] = {"apple", "orange", "banana"};
    
    basket[0] -> "apple"
    basket[1] -> "orange"
    basket[2] -> "banana"

So if you get the length of array, it will be *3*, naturally, because it has 3 elements. But there is no `basket[3]` because the first element of the array numbered as zero, not 1. If you try to access `basket[3]`, you will see the ArrayIndexOutOfBoundsException. 

This thinng will bite when constructing loops that are intended to "walk" through the array, like this example below

    class ZeroBase {
      public static void main(String []args) {
        String basket[] = {"apple","orange","banana"};
        for(int i=0;i <= basket.length; i++) {
          System.out.println(basket[i]);
        }
      }
    }

This will compile, but will run into problems during execution. Just remember that the last element of the array is numbered as `basket.length -1`, always account for the fact that it starts with zero. So, to fix the code sample above, just rewrite the for loop to read either

    for(int i=0;i < basket.length; i++)

or

    for(int i=0;i <= (basket.length - 1); i++)

# Bibliography

<http://www.javacoffeebreak.com/articles/toptenerrors.html>
<http://docs.oracle.com/javase/tutorial/getStarted/problems/>
<http://www.open.ac.uk/StudentWeb/m874/!synterr.htm>
<http://cs-people.bu.edu/dgs/courses/cs111/assignments/errors.html>

<div id="footnotes">
<h2 class="footnotes">Footnotes: </h2>
<div id="text-footnotes">

<div class="footdef"><sup><a id="fn.1" name="fn.1" class="footnum" href="#fnr.1">1</a></sup> The String literal or constant pool is a special area in memory. Strings that are created by assigning a literal or constant expression to a variable e.g. String s = "Hello"
will be kept inside the literal pool. A String created using String s = new String("Hello") will not be part of this pool. Read [String literal pool](java-string-literal-pool) for more details</div>


</div>
</div>
