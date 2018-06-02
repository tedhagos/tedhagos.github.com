---
title: "Kotlin"
date: 2017-12-30T21:07:12+08:00
categories: [kotlin]
---

# 1. Tooling 

There are a few ways to get started. 

1. Explore the online editor at [try.kotlinlang.org](http://bit.ly/kotlinonline)
2. Get the command line tools at [kotlinlang.org/commandline](http://bit.ly/kotlincommandline)
3. Use an IDE like Eclipse or IntelliJ IDEA, there is a non-paid version of IntelliJ called CE or Community Edition

# 2. A few characteristics

Like Java, its

* compiled, so it goes through the same cycle of writing > compiling > running
* statically typed, but we don't always have to write the type. Kotlin can infer types on certain situations
* strongly typed
* object oriented

Unlike Java, it

* treats functions as first class citizens and it supports functional programming. We also can write functions as top-level constructs, it doesn't have to be inside a class anymore. Kotlin refers functions inside a class as member functions, not member methods
* treats exceptions differently. All exceptions are unchecked exceptions, you may (or may not) handle exceptions, it's up to you and not the compiler. try-catch blocks are optional
* doesn't have primitive types
* doesn't have static members
* treats everything as public by default, classes, variables and functions. If you want to restrict accessibility, you'll have to specify it
* treats expressions and statements differently, e.g. assignment is a statement in Kotlin (it is an expression in Java), the decision making constructs like _if_ and _when_ are expressions, not statements
* treats all variables as _non-Nullable_ by default. It means, when you declare a variable in Kotlin, without any decoration, modifier or annotation, the variable can never be assigned a _null_ value

***

# 3. Functions

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

## 3.1 Default params

Function params can be assigned a default value, like this

Listing 3-1. connectDb function
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

## 3.2 Named params

Calling functions in your code can be further improved using named parameters. 

## 3.3 Variable args

## 3.4 Extension functions

## 3.5 Infix functions

***


# 4. Variables and Basic Types


# 5. Classes and Objects


# 6. Access Modifiers 

# 7. Companion Objects

# 8. Higher Order Functions 




# 9. Collections

# 10. Working with Java

# 11. Nullability and Java Inter-Op

# 12. Generics 








