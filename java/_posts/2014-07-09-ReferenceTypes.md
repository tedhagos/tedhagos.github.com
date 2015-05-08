---

title: Reference Types
author: Ted Hagos
categories: java

---



By far and thus far, the data types you have seen are called **primitive types**. The Java Type System has another kind of type. It is called **reference types**. Let's defer the discussion for reference types at least until after we've gone through the OOP topic. 

For now, what we need to remember is that, if it's not primitive (double, float, long, int, short, byte, char or boolean) then it must be a reference type. It' not all scary, some reference types are actually pretty to use, for example, the **String** type which you have been using all  along since the Hello World program.

    String a = "Hello";
    String b = "World";
    String c = a + b;
    int d = 10;
    String e = a + d; // attention here

I called your attention to the last line because I thought this might be a good opportunity to explain why the addition operator works for a String type, what happened to our rule before &mdash; when a **double** is added to something else it becomes a double.

First, let's put an addendum to our rule. **When something is added to a String** the whole expression becomes a String. The String type rules them all.
