---
layout: java

title: Abstract Classes

description: What you need to know about abstract classes

excerpt: 

author: Ted Hagos

lastupdate: November 28, 2013


tags:
- oop
- abstract
- polymorphism


categories:
- Java

---


![](/img/java/abstract-class.png)


The construction of an abstract class is simple (see preceding diagram). You only need to prepend the class declaration with the *abstract* keyword and that already makes it an abstract class. A class that is comprised of concrete or non-abstract methods can also be declared as abstract &mdash; although this case is rare &mdash; the absence of abstract methods does not have any bearing whether you can or cannot declare a class as abstract.  

When the class contains at least one abstract method, it becomes necessary to declare the enclosing class as *abstract*.  


![](/img/java/abstract-method.png)

The construction of an abstract method must be approached with care. It is not enough to use the *abstract* keyword on the method signature, but you must also ensure that the body of the method is replaced by a semi-colon. Instead of a method declaration, it will read as if it is a statement. In fact, it is. It tells the compiler that the declared method contains no implementation. Rather, the implementation is delegated to whoever inherits from the class. The logic of the method becomes the responsibility of immediate child classes. 

An abstract method can only be written as part of an abstract class. A concrete class &mdash; a class that does not declare itself as abstract &mdash; may not contain any abstract method. 


# A Bank Account Example

If we were to construct the domain objects of a fictitious bank account project, we could come up with two dominant objects. The current account and the savings account. The two kinds of account are more similar than they are different. But their differences, still, needs to be considered. 

When things share similarities in their attributes and behavior, we can collect their similarities and implement them on a base class. Their differences can be addressed by extending the base classes and altering or adding characteristics on the sub classes to make them more specific. Such is the approach we took on the following example. 

A savings account class defined characteristics such *name, number* and *balance* but did not make any attempt to calculate the interest. An account's interest rate, it appears, is calculated one way when the account is *savings* and another way when it is *current*.  


![](/img/java/abstract-class-hierarchy.png)


The similar characteristics of *Savings* and *Current* account objects makes inheritance a somewhat obvious choice for organization. That is why we created an *Account* base class to act as a common organizer of the similarities. 

The differences between the two kinds of accounts was addressed by deferring the implementation to more specific classes &mdash; *Savings* and *Current*. The *Account* base class contains some concrete implementations. Getting the balance of an account, it would seem, does not have to change whether you are dealing with a Savings or a Current account, this is the reason why the *getBalance* method has a concrete implementation on the base class. We intend for the sub classes *Savings* and *Current* to inherit this behavior. We will re-use functionality whenever possible.  

The matter of calculating interest differs between a Savings and a Current account. This behavior cannot be, must not be, inherited. Nevertheless, we would like for all *Account* objects to respond to a uniform set of messages. We would like all Account objects to respond when sent a *calculateInterest* message. This is the reason we included it as part of base class' *Type*. We made this method *abstract* on the base class in order to force the sub classes to provide the implementation. 

The child classes Savings and Account inherited the method *calculateInterest*. But what they inherited was still an abstract method. They needed to override and provide implementation for this inherited method lest they (sub classes) will also be an *abstract* class &mdash; remember that a class with at least one abstract method must be declared abstract.

Converting an abstract method to a concrete one is simple matter. You need only to remove the *abstract* keyword from the signature, then replace the semi-colon with a block. The block is where you provide the specific behavior for the sub class. This makes the inherited behavior polymorphic. 

# A Simple Compute Engine example

Let us consider another case in order to further our understanding of abstract classes. Consider an object that can produce the arithmetic results of any two number. To make our construction as elementary as possible, let us say that we simply need to pass three things to this object; 1) the operation 2) the first number and lastly 3) the second number. To make it simpler even, we will only accept whole numbers. We will not bother the usual trimmings of a real world application such as ensuring the validity of each input to the program. This will allow us to concentrate our analysis on the inheritance hierarchy without being bothered by issues of program robustness. 


![](/img/java/compute-engine.png)


We can suppose that we would like to use such an object like this

{% highlight java %}
class TestOperation {
  public static void main(String[] args) {
        
    Operation op = Operation.getOperationObject(optr,n1,n2);
    double result = op.performOperation();
 
  }
}
{% endhighlight %}


The actual class or type is hidden from the client. What is known only is the presence of a generic *Operation* object capable of handling rudimentary arithmetics of two whole numbers. Considering our code is structured, it appears that the *Operation* object needs to handle the routing of arithmetic logic. It must provide branching facilities to differentiate betweent + - / and * operation. Such routing can be managed using a simple switch statement.

{% highlight java %}
class Operation {

  public static Operation getOperationObject(String optr, int n1, int n2){

    switch(optr.trim()){
      case("+"): // Addition operation
      case("-"): // Subtraction operation
      case("/"): // Division operation 
      case("*"): // Multiplication operation
      default: return null;
    }
  } 
}
{% endhighlight %} 

The behavior *performOperation* is where the logic variation happens. This is the method that needs to be polymorphic. It can be accomplished by sub-classing *Operation* and overrding this method on the sub classes so we can place the appropriate arithmetic action. The entire code is given in following listing

{% highlight java %}
abstract class Operation {
  
  protected int n1 = 0;
  protected int n2 = 0;

  protected Operation (int n1, int n2){
    this.n1 = n1;
    this.n2 = n2;
  }
  
  public abstract float performOperation();
  
  public static Operation getOperationObject(String optr, int n1, int n2){

    switch(optr.trim()){
      case("+"): return new Plus(n1,n2); 
      case("-"): return new Minus(n1,n2);
      case("/"): return new Divide(n1,n2); 
      case("*"): return new Multiply(n1,n2); 
      default: return null;
    }
  } 
}  
  
class Plus extends Operation {
  Plus(int n1, int n2){super(n1,n2);}
  public float performOperation(){return n1 + n2; }
}
  
class Minus  extends Operation {
  Minus(int n1, int n2){super(n1,n2);}
  public float performOperation(){return n1 - n2; }
}
  
class Divide extends Operation {
  Divide(int n1, int n2){super(n1,n2);}
  public float performOperation(){
    if(n2 == 0) {
      System.err.println("Zero Divide Error");
      System.exit(1);
    }
    return n2 / n2;
  }
}
  
class Multiply extends Operation {
  Multiply(int n1, int n2){super(n1,n2);}
  public float performOperation(){return n1 * n2;}
}

// TEST CLIENT
// USAGE:
// java TestOperation + 1 2
// java TestOperation - 1 2
// java TestOperation / 1 2
// java TestOperation "*" 1 2
// 
// the asterisk will cause FormatException on the command line param

class TestOperation {
  public static void main(String[] args) {
    
    if(args.length < 3) System.exit(1);
    
    String optr = args[0];
    int n1 = Integer.parseInt(args[1]);
    int n2 = Integer.parseInt(args[2]);
    
    Operation op = Operation.getOperationObject(optr,n1,n2);
    double result = op.performOperation();
 
    if (op !=  null) {
      System.out.printf("( %s %d %d ) = %.2f\n", optr, n1, n2, result);
    }
    else {
      System.err.println("Unsupported operation");
    }
  }
}
{% endhighlight %}











