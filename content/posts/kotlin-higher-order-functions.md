---
title: "Higher Order Functions"
date: 2018-05-05T09:16:00+08:00
draft: false
categories: [kotlin]
---


1. Why the name? are there lower order functions?
2. How is it any different from the usual method I know from Java, C/C++ or Visual Basic
3. What does it mean when they say “first class citizen”, first class functions
4. What do they look like
5. How do they accept functions as parameter and why is this useful
6. How would it return functions? again, why is this useful
7. Do the Kotlin team themselves use higher order functions

## What’s with the name

The name _higher order functions_  come from the world of Mathematics, in there, a higher order function is also called _functional_, _functional form_ or _functor_, and apparently, they take the difference between function and values, a bit more seriously than programming folks. 

I don’t think that the term “lower order function” is used, either in programming nor in Math. At least in Math, anything that isn’t a higher order function is referred to as “first order function”. I haven’t really heard any coder use the term “lower order function”— or maybe I just didn’t “Google” deep enough. 

Another name that was given to higher order functions is _first class functions_. A very clever guy named Christopher Strachey coined the term sometime in the mid 60s. 

So, if we can’t use “lower order functions” or first order functions to refer to our regular functions, we’ll just call them, well, functions.

## How is it different

Java, C/C++ and Visual Basic and some other languages, don’t have higher order functions. At least at the time of this writing. The functions or methods or whatever it they may be called in those languages, cannot take in functions as parameters nor can they return functions. But hang on, of course those languages can take in functions as parameters, what about this code example

_Listing 1-1. foo() and bar() example_

```java
public static void main(String []args) {
  bar(foo(2));
}

static void bar(int val) {
  System.out.println(val);
}

static int foo(int x) {
  return x * x;
}
```

Didn’t we just pass `foo()` to `bar()`? isn’t that passing a function to another function? That’s a no. Passing `foo()` to another function like `bar()` isn’t what we mean by a “function taking in another function as parameter”. Maybe if there was a way to pass `foo` without the parentheses, and then somewhere in the body of function `bar` (the receiving function), we get to invoke it like this

_Listing 1-2. foo() and bar() examples, again_

```java
public static void main(String []args) {
  bar(foo);
}
static void bar(func val) {
  val(2)
}
```

But this isn’t doable in Java, nor is it doable in a language that doesn’t support higher order functions. 

The code `bar(foo(2))` means we are calling `foo(2)`, it will be resolved to 4 and it’s type is `int` , then we get to call `bar()`, what’s being passed to to `bar()` isn’t the function definition of `foo`, but whatever value `foo` resolves to — which is 4 in our example, which is of type `int`. We’re not passing a _function type_ because Java doesn’t have a _function type_, nor does C/C++ nor VB. 

## What does it look like

In a language that has support for higher order functions, like Kotlin, the _foo and bar_ examples would have looked like this

_Listing 1-3. foo() and bar() in functional style_

```kotlin
fun foo(arg:Int): Int {              <1>
  return arg * arg
}

fun bar(fu:(arg:Int) -> Int) : Int { <2>
  return fu(2)                       <3>
}

fun main(args: Array<String>) {
  println(bar(::foo))                <4>
}
```

**<1>** This is a simple _named function_ in Kotlin. It takes an _Int_ and the function returns an _Int_ as well. The function simply squares whatever Int you throw at it. We’re going to pass this function to another function (`bar()`)

**<2>** Function `bar()` takes one input as parameter, this input is named `fu` but  take note of how it’s type is declared; `(arg:Int) -> Int` — this is how a _function type_ is declared in Kotlin. A function type has 3 parts, (1) the parameter list, if it doesn’t take any, it would just be a pair of parentheses, but in our case it takes on an _Int_ (2) the arrow operator, it’s written as a dash or minus sign immediately followed by the greater than sign, some people call it the chevron symbol. This operator separates the parameter list and the return type. And finally (3) the return type of the _function type_. We intend to pass function `foo()` to function `bar()` and `foo()` returns an _Int_, hence, our function type in `bar()` should also return _Int_  

**<3>**  Now, we invoke `fu` and we pass the value 2 to it

**<4>**  Now, we pass `foo` to `bar()`. Notice that we passed the param as `foo` and **not** `foo()`. We are not resolving the value of `foo()` and then passing it to `bar()`, were passing `foo` as a function definition, so that later on, we can invoke it from within the context of the receiving function

When a function can take in another function as a parameter, in the same vein that it can take in objects or values, it can be said that that language treats functions as _first class citizens_; in Kotlin, _functions_ supports all the operations that are generally available to other entities like _objects_ or _values_. It’s not simply a named collection of statements, it’s also a _type_ 

## Why are we bothering

Because this gives us the ability to vary the compute process depending on the *client*. In Listing 1-3 (above) the client is the `println()` function, and the server is the `bar()` function. We’ve defined `bar()` to accept a _function type_ that takes an _Int_ and also returns and _Int_, we can pass any function to _bar_ that meets this criteria, it may have a different implementation inside but so long as it takes in and returns an _Int_ that should be fine. This  is actually a design pattern called the _Strategy Pattern_. This pattern is from the gang of four (GoF), they wrote a book called _Design Patterns_, the Strategy pattern is one of them.  

## Does Kotlin itself use functionals

I don’t know that personally, but by reading through some of literature produced by that team and a quick look at some of Kotlin’s standard library e.g. “Standard.Kt” and some of the operations we can do on collections objects, I think the answer is “yes”. 

If you’ve gone through any tutorial of the Kotlin language, there is a fair chance you’ve encountered some constructs that involved `forEach`, `filter`,  `map`, `with`, `apply` and `let` to name a few. These things are higher order functions.







