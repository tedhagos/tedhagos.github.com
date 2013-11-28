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

The differences between the two kinds of accounts was addressed by deferring the implementation to more specific classes &mdash; *Savings* and *Current*. 


# Usage

# Rules

# Vocabulary






