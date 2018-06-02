---
title: " Collections"
date: 2018-05-07T13:22:10+08:00
draft: false
categories: [kotlin]
---



* [ ] Why are we bothering
* [ ] Should I go through all the topics in collections
* [ ] What are the collections, by the way, should I describe them in detail
* [ ] Don't write raw loops (the filter and lambdas should actually be able to do the job), why should'nt I use raw loops, the syntax is there, why shouldn't I use it — because most of hte time, there's probably a better way of doing it
* [ ] Why do we call it a framework



The questions I should be asking;

* [ ] What are collections

* [ ] Do I need them, we've already got arrays, wouldn't that suffice

* [ ] How many kinds are there

* [ ] Are there operations that are common to all Collections, or do I have the operation for each one of them

* [ ] What are the basic operations, how do I go through them

* [ ] Is the declarative (functional) way really better than if work with collections the imperative way? You know, like how we did it in Java. Are there downsides (decompiler), and this is where sequences comes in




*Q* : What is a collection?

*A* : The dictionary meanings are;

1. the act of *collecting*
2. something that is *collected*; a group of objects or an amount of material accumulated in one location, especially for some purpose of or as a result of some process

Maybe the second definition fits our purpose. So we'll use that — it's a group of objects accumulated in one location. We can probably think of a collection like a coin purse. Sometimes the purse will be empty, sometimes it will contain some coins, and perhaps at other times, it might be full. In this analogy, the coints are the items and the purse is the *container*. So, we can probably say that a collection is container with zero, one or more items in it. But you might remember that 

## What are they

[Can be used for the intro]

I'm assuming that you didn't skip this topic while you at it with Java. Working with the collections framework is very crucial if you wanted to build a strong foundation as a developer — that was true in Java, and it's still true in Kotlin. We won't spend too much time on the introductory part of collections because the Kotlin collections are very similar to their Java counterparts. We'll spend just enough time to jog our memories.

One of hte real-world analogies for collections would be a purse or a pouch filled with various things such as coins. The coins would be the _items_ and the pouch itself is the  _colllection_. So based on this analogy, we can say that a collection is a _container_ of sorts that may have zero, one or many items in it.  You might remember that we already have something like this, an `Array`. The `Array` fits this description exactly because it can contain zero or one or many items inside it. If this is the case, do we really need to learn about other containers.  











IntArray

ByteArray

CharArray

etc. Mention when to use this, I need to talk about the Kotlin nullable type system, why it isn't always efficient to use the reference types. When I say Int in Kotlin, does that always mean that in runtime, it will be represented as as Integer or Java's int



Kotlin focuses on interoperability, it doesn't have it's own Collections classes, it uses the Java ones. But it has lots of extended methods.





## Why do we bother





Why do we call 





## Kotlin and Java collections





 






