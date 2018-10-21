---
title: Getting Started in Kotlin
layout: post
categories: android, kotlin
permalink: /posts/kotlin-getting-started/
comments: false
date:   2018-08-15 
image: /images/kotlinheader.jpg
description: Do you want to learn Kotlin in a day? Read this.
---


It's the new(est) kid on the the JVM  block.

It's from JetBrains, they're the guys who built IntelliJ. They've been around for quite some time, so chances are you already know them. Kotlin has also been around for quite sometime, since 2011 in fact — it gained a lot of traction and attention probably 2016 or 2017 (I'm not sure, I'm too lazy to research).  The "hooray" moment for Kotlin was probably during Google I/O 2017, because they (Google) announced that it can now be used for Android programming. This was the same time that Android Studio 3 was about to be released, and AS3 already has an out-of-the-box support for Kotlin. You don't even have to add the plugin anymore. 


Like Java, Kotlin is;

* compiled
* statically typed, but we don't always have to write the type. Kotlin can infer types on most situations. When Java 10 comes out, it will be able to infer types too, at least for local variables 
* strongly typed
* object oriented

Unlike Java, it;

* treats functions as first class citizens and it supports functional programming. We also can write functions as top-level constructs, it doesn't have to be inside a class anymore. Kotlin refers functions inside a class as member functions, not member methods
* treats exceptions differently. All exceptions are unchecked exceptions, you may (or may not) handle exceptions, it's up to you and not the compiler. try-catch blocks are optional
* doesn't have primitive types, everything truly is, an object
* doesn't have static members
* treats everything as public by default, classes, variables and functions. If you want to restrict accessibility, you'll have to specify it
* treats expressions and statements differently, e.g. assignment is a statement in Kotlin (it is an expression in Java), the decision making constructs like _if_ and _when_ are expressions, not statements
* treats all variables as _non-Nullable_ by default. It means, when you declare a variable in Kotlin, without any decoration, modifier or annotation, the variable can never be assigned a _null_ value



# Compilation 

It's a JVM language, so, naturally, you still need the JDK. KT files are compiled using the kotlin compiler (`kotlinc`).



![compilation process](/images/kotlin-compilation-process.png)

The Kotlin compiler outputs `.class` files, just like `javac`. But, you cannot run Kotlin bytecodes the same way you would run Java bytecodes. You'll need to combine the resulting  Kotlin byte code with the Kotlin runtime and package it into a jar file. Only then will you be able to run the program.

This detail is probably important for you if you will work with Kotlin on the command line. These compilation and execution details are typically handled for you by an IDE.  I can think of three IDEs that should be usable with Kotlin; Eclipse, NetBeans and IntelliJ — the last one is a commercial IDE but it does have a community edition. IntelliJ CE is able to run Kotlin.  Anyone of these 3 IDEs should suffice. In case you choose to use IDEA, you might want to refer to the [IntelliJ minimal survival guide](http://bit.ly/intellijguide). 



# Project setup in IntelliJ

Launch IntelliJ if it isn't opened yet. On the "Welcome" screen, click "Create new Project". Next, you should see a screen like Figure 1. 



![newprojectidea](/images/new-project-intellij.png)

**Figure 1. New Project**

Choose "Kotlin/JVM", as shown in Figure 1, and try to see if IntelliJ has detected your installed JDK. As you can see, it detected my JDK 9.

Next, fill out the "Project name" information, name the project "kotlinproject" for example.  After that, the project should be created and opened in IntellIJ.

Now we can add a Kotlin file to the project. Use the context menu (right click) on the "src" folder, as shown in Figure 2. 



![new file](/images/new-kotlin-file.png)

**Figure 2. Add a Kotlin file to the project**

Choose "Kotlin/File". Name the file, and you should be good to go. 



# Hello World

The simplest program we'll create in Kotlin could look like the following;

**Listing 1. hello.Kt**

```kotlin
fun main(args: Array<String>) {
  println("Hello")
}
```

Kotlin programs don't need classes in order to run. You can get by with top level functions only.  

To run this code in IntelliJ, from the main menu bar, click **Run** →  **Run**. You will notice that there are two Run options on the menu. The first Run is greyed out. That's because we haven't defined any runtime configuration yet. Choose the second Run option. You should see a popup dialog, as shown in Figure 3



![new file](/images/kotlin-run-context.png)

**Figure 3. Running Hello.Kt**



# Variables 

Variables are declared either as `val` or as `var`.  Listing 2 shows some example usage

**Listing 2. Variable declarations**

```kotlin
var someStr: String = "Hello" // (1) 
someStr = "World"             // (2)

val someInt = 1               // (3)
val anotherInt = 1            // (4)
```



**(1)** `someString` is the variable name (identifier)  and `String` is the type of variable. The type is written to the right of the identifier, and they are separated by a colon. It's  quite the reverse in Java where the type is written to the left of the identifier.

**(2)** We can re-assign values to variables that were declared as `var`. No surprises here.

**(3)** Same as the first statement, except that were using the `val` instead of `var`, and were not specifying the type anymore. There are many situations in Kotlin where you can skip type declaration. This case is one of those. The c0mpiler can infer the type of `someInt` from the assignment. It will see that `1` is an Integer literal, hence, it can make the necessary type assignment

**(4)** This statement won't work because variables declared as `val` are effectively constants. They become immutable. The Java equivalent is when you declare a variable as _final_



# Types

There are no primitive types in Kotlin, everything is an object. So, if you need to work with numbers, the types youl'll work with are the following; Double, Float, Long, Int, Short and Byte, their bit widths are 64, 32, 64, 32, 16 and 8, respectively — that might be easier to look at in table form, so here you go.

**Table 1. built-in number types**

| Type   | Bit width |
| ------ | --------- |
| Double | 64        |
| Float  | 32        |
| Long   | 64        |
| Int    | 32        |
| Short  | 16        |
| Byte   | 8         |

For the most part, operations on number types works the way you expect them, by that I mean, the way you expect them to work in Java. What's different in Kotlin is that we don't have implicit casting anymore. You can't assign an Int to a Long, while this would have worked in Java, it doesn't in Kotlin. If you want to convert from one type to another, you'd have to do that explicitly

**Listing 3.  No implict casting**

```kotlin
var a = 10L // a is a Long literal, note the L postfix
var b = 20

var a = b // this won’t work
var a = b.toLong() // this will work

```



**Characters**

You might remember from Java that `char` was treated as a number, that's not the case in Kotlin. You can't write code's like this

```kotlin
fun checkForKey(keyCode:Char) {
  if (keyCode == 97) { // won’t work, keyCode is not a number
  }
}
```



Character literals are created by using single quotes, like so

```kotlin
var enterKey = ‘a’
```

Like in Java, you can use escape sequences such as \t, \b, \n, \r, \’, \”, \\ and \$ and if you need to encode any other character, you can use the Unicode syntax e.g. \uFF00.

**Booleans** work and behave exactly as they do in Java. Even the literals are exactly the same — `true` or `false`





# Branching

The  `if` construct work almost the same as in Java.  

**Listing 4. Branching with If**

```kotlin
var bigNum = firstNum
if (secondNum > firstNum) {
  bigNum = secondNum
}
```

The second form, with the `else` is written as follows.

**Listing 5. If Else construct**

```kotlin
var bigNum: Int
if (secondNum > firstNum) {
  bigNum = secondNum
}
else {
  bigNum = firstNum
}
```

The difference in Kotlin is, the `if` construct is not a statement, it's an expression. Which means we can do things like this

**Listing 6. As an expression**

```kotlin
val bigNum = if (firstNum > secondNum) firstNum else secondNum
```



Kotlin doesn't have a switch statement, what it has is a *when* construct.  It’s form and structure is strikingly similar to the *switch* statement. In its simplest form, it can be implemented like this (Listing 7)

**Listing 7. Branching with When**

```kotlin
val d = Date()
 val c = Calendar.getInstance()
 val day = c.get(Calendar.DAY_OF_WEEK)

 when (day) {
   1 -> println("Sunday")
   2 -> println("Monday")
   3 -> println("Tuesday")
   4 -> println("Wednesday")
 }
```



*When* matches the argument (the variable day) against all branches sequentially until it encounters a match; note that unlike in *switch* statements, when a match is found, it doesn’t flow through or cascade to the next branch, hence we don’t need to put a *break* statement. 



# Looping

Kotlin also has a *while* loop, it works exactly the same in Kotlin as it does in Java. 

**Listing 8. while loop**

```kotlin
fun main(args: Array<String>) {
  var count = 0
  val finish = 5

  while (count++ < finish) {
    println("counter = $count")
  }
}
```

Kotlin doesn't have a *for* loop, at least not the one with the counter and incrementing variables inside. The *for* loop of Kotlin works with Iterable objects. Listing 9 shows a basic usage of the for loop.

**Listing 9. Kotlin's for loop**

```kotlin
val words = "The quick brown fox".split(" ")  

for(word in words) {  
  println(word)  
}
```



# Functions

The _main_ function in Kotlin is written as follows

```kotlin
fun main(args: Array<String>) { 
  println("Hello")
}
```

* The keyword `fun` is used to declare that the block is a function
* Functions names are identifiers, just like in Java. The function name `main` is special, it denotes the entry point of the program, much like the `public static void main` in Java
* The `args` argument of `main` is an _Array_ of _String_. Kotlin doesn't have a syntax to create arrays using the `[]` notation. The Kotlin _Array_ is a generic class, it accepts a typed parameter, it's _String_ in this case. So, the `main` function accepts an array of _String_
* println is translated (under the hood) to a call to Java's `System.out.println()`. Kotlin can Java codes, including the Java standard library. And likewise, Java can use codes written in Kotlin. After all, Kotlin codes translates to byte codes as well





## Default params

Function params can be assigned a default value, like this

**Listing 3-1. connectDb function**
```kotlin
fun connectDb(host: String = "localhost",
              user: String = "root",
              password: String = "password")
```
All the params of `connectDb()` have default values, so we can call this function like this

```kotlin
connectDb() // no arguments passed
connectDb("jupiter") // just the 1st param
connectDb("jupiter", "neptune") // 1st and 2nd params
connectDb("jupiter","neptune","saturn") // or all three
```

## Named params

Calling functions in your code can be further improved using named parameters. 

## Variable args

## Extension functions

## Infix functions



# Classes and Objects


# Access Modifiers 

# Companion Objects

# Higher Order Functions 



# Collections

Kotlin did not build its collections framework from scratch. It actually used the existing Java Collection framework. So, Kotlin lists, sets or maps are actually the exact same list, sets and maps of Java. It's not wrapped nor  transmogrified in any way.  But there are a couple of things we need to remember.  

1. Each of the Java collection is represented in Kotin in two ways. 





# Generics
 