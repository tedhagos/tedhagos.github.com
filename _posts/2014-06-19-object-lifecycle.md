---

title: Object Life cycle
author: Ted Hagos
categories: java

---



There are things that happen inside a Java object from the time you create it using **new** up until you call its first method. The Java runtime makes certain calls to specific blocks of code in your class definition.

A Java object goes through several stages before you can call any of its instance methods. The static initializer kicks in first, if one is defined. And after that, the instance initializer and  then the constructor kicks in. The code below illustrates the construction of such initializers. 

{% highlight java %}
// LifeCycle.java
import static java.lang.System.out;

class LifeCycle {

  static {
   out.println("1");
  }

  {
    out.println("2");
  }

  LifeCycle() {
    out.println("3");
  }

  protected void finalize() {
    out.println("4");
  }

  public static void main(String []args) {
    LifeCycle lc = new LifeCycle();
    lc = null;
  }
}
{% endhighlight %}

Initializers are still just code blocks. When you define variables inside them, they will still be local to the block. So you can't do things like this

{% highlight java %}
class LifeCycle {
  {
    int i = 10;  // i still local to the block
  }

  LifeCycle() {
    out.printf("i = %d", i); // cannot access i from here
  }
}
{% endhighlight %}

# Static initializers

# instance initializer

# Constructors

Q: Are variables defined in the initializer blocks local to the blocks, or like instance members also
Q: Are blocks inherited
Q: Can I call methods inside the blocks
Q: Why bother with blocks in the first place

<http://docs.oracle.com/javase/tutorial/java/javaOO/initial.html>
