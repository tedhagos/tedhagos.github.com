---

title: 2 Node
chapterhead: yes

---


A description of nodejs from the NodeJS.org site

> Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

That's a mouthful. Keep an eye on the big words like event driven and non-blocking. We'll try our best to understand these concepts in later sections.

# 2.1 What node is

- A runtime for Javascript programs
- Uses Google's V8 engine as runtime. This is the same Javascript runtime inside Chrome browsers
- It includes libraries so we can use it out of the box. Most of these libraries are network and I/O libraries which are written in Javascript
- While node is a runtime for Javascript and uses the V8 engine, it is not written in Javascript. Node actually wraps the V8 engine but the runtime itself is written in C
- Intended to be ran on the server. You can write server side programs using Javascript

# 2.2 What it isn't

Node is not 

- **A framework** like Rails, Django, Laravel or SpringBoot. It is actually just a runtime with network, I/O and other libraries. Nevertheless, these libraries are still dealing with pretty low level stuff. So no, it is not a framework. It's too close to the metal to be called a framework. But don't be discouraged, there are lots of libraries for node that you can use a framework e.g.   you can use express to ease the writing of web applications in node
- **A programming language**. It's a runtime for Javascript programs
- **A virtual machine**. Not in the sense that Java and .NET are virtual machines. Yes those two are also runtimes but you cannot run a program in node unless it is written in Javascript. The JVM allows you to develop programs written in languages other than Java, same is the case with the .NET runtime
- **For beginners**. While you can get by with Javascript that you learned while cutting and pasting code from the interweb, you really do need to understand proper Javascript constructs if you  want to move beyond hello world programming in node

# 2.3 What you need to get started

As far as hardware goes, the barrier to entry is pretty low. You don't need a quadcore Macbook Pro (that would really be nice though) with 16GB RAM (that will be even better) and an SSD (that's the icing on the cake). No, you don't need all that. Your old notebook with a single core and 1GB RAM will do just fine. I would think that the limiting factor isn't node itself but the other software you need to run like a modern browser that is capable of running ES6 (EcmaScript version 6) and your choice of operating system. Node runs happily on Windows, Mac and Linux. Having said that, I think that if you plan to do long term development with node, it's prudent to try and use the modern versions of the OSes. That way, you get security and stability updates. At the time of writing, that should be version 10 on Windows, El Capitan in OSX and version 16 in Ubuntu.

## 2.3.1 Theoretical Minimum

Now that hardware and software are out of the way, we go to the wetware requirements. What are expected to know.

1. **General web programming background.** Node is a server side framework and most of the applications built with it has something to do with the web. So it's a pretty safe bet that your web programming background wouldn't go to waste, in fact, it will come very handy. What happens if you don't have it? Well, you will struggle a little bit but it won't be the end of the world, you should still be able to get by 
2. **Javascript.** Node programs are written in Javascript. You should at least have a passing familiarity with the JS language constructs like data types, block and control structures, basic libraries etc 
3. **Working concept of concurrency and asynchrony.**
4. **General HTTP background.** Node's libraries are quite heavy on  network I/O, particularly using the http protocol. You don't really need to be an expert on RFC 2616 and the likes, but you do need to have a passing knowledge of HTTP e.g. the basic commands, data structure and response codes
5. **General database programming background**. A passing knowledge of NoSQL and ODMs would be nice. Brush up those database programming concepts as well. You may still need to deal with relational databases
6. **Basic I/O skills.** A general appreciation of what's involved when opening and closing files and some general concept of streams.

