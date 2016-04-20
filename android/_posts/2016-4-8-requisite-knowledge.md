---

title: 01.3 Requisite Knowledge

---


java language fundamentals
: you will need to be familiar with programming fundamentals in Java. Even if Android uses a different VM to run the apps, the language used for native apps development is Java. The more familiarity you have with basic programming concepts in Java, the better. You should at least know the concept of variables, constants, branching and looping, packaging and scope visibility, basic I/O and file persistence

object oriented concepts
: the Android framework uses OOP heavily. You need to be comfortable with the idiomatic use of things like class/interface inheritance, polymorphism etc. Even the humble Hello World application in most Android textbooks involves the use inheritance

collections
: beyond simple variables, you will need some skills to handle collections of data. A basic familiarity with rudimentary data structures like arrays, maps and sets will be essential

event model
: android applications are heavy on user interaction. For the most basic applications, you might be able to get away by simply knowing how to put the click handler on XML file. But for other gestures like long clicks, swipe etc, you will need to write Java codes to handle the event. The Java event model uses listeners and callbacks quite a lot

concurrency
: you probably will not have to write your own threads in Android because there are ways on how to make your code run in the background, but you need to be familiar with the general concepts of concurrency

interprocess communication
: each Android application runs in its own instance of the vm, as such, they are generally prohibited to communicate with other applications. Android has mechanisms in order for applications to share data with other applications

database
: some, if not most, of the applications you will make will need to store data. Some data might be simple and can be stored either via the preferences or the SD card. But some might need the facility of a relational database. The Android runtime includes the SQLite database. You will talk to it using the Structured Query Language

xml familiarity
: A passing familiarity wih XML structures and validation rules should take you quite far in Android programming. You don’t need to work much with XML programmatically. Your usual need for XML will arise when you define layouts and when configuring permissions for the app. If you have coded HTML before without using WYSIWYG tools, you should be fine

