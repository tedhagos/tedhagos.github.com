---

title: Just Enough Java
categories: java

---

## Introduction

## A Brief History of Java

In the early part the 1990s, a team of engineers at Sun Microsystem, led by James Gosling, created a programming language called **Oak**. Sometime later, Oak was renamed to **Java**. The origins of how Java got its name is a storied one. Some stories say that it was inspired by the coffee and some other stoies say that Java is an acronym for **J**ames Gosling, **A**rthur **V**an Hoff and **A**ndy Bechtolsheim, all three are from Sun Microsystems. Who knows what the back story really is. As a Java programmer, this story tidbit is just nice to know and we'll leave it at that.

In 1996, Java 1.0 was released. Its claim to fame was the applet technology. Before the time of web applications, there were desktop applications. These were thick client software which you need to install on a PC. They were distributed via physical media such as CD ROMS. They were painful to maintain and upgrade. If a company releases a bug fix for a desktop software, that meant packaging the updates on a physical media, distributing it via snail mail so that IT people can install the software on each and every PC. A very painstaking process. 

In the mid 90s, the Internet was experiencing a phenomenal leap in terms of adoption. Internet browsers and web pages were all the rage. It  so happened that Java applets live inside web pages. Applets allowed developers to write applications, distribute it from a central point (a web server) and execute the applications immediately right after the web page has rendered. And it didn't matter whether the end user was on Linux, Solaris Windows or Mac. As long the web browser ran Java, the applet can run.  Hence the rallying cry of Java, Write Once Run Anywhere or **WORA** for short. When developers write a bug fix for their apps, they only need to update application from a single location. The next time end users download the web page, they will be using the updated applet.

1995 was a magical and pivotal moment for Java. 


**1996** Java 1.0

**1997** Java 1.1

**1998** Java 1.2

**2000** Java 1.3

**2002** Java 1.4

**2002** Java 5

**2006** Java 6

**2011** Java 7

**2014** Java 8

Editions, JEE, JSE etc

## Basic Concepts

Java programs are written on source files that has a **.java** extension. These are nothing more than plain text files


## Development Setup

The Java SE is available for the Solaris, Linux, OSX and Windows platform. The installer files can be downloaded from the [Oracle.com site](http://www.oracle.com/technetwork/java/javase/downloads/index.html). Download the binary files appropriate for your platform

### OSX

The Mac installer is a **.dmg** file. Like all dmg packages, just double click it and follow the onscreen prompts. It will unwrap the package and reveal a **.pkg** file. Double click the pkg file then follow the onscreen prompts once again. You will be asked for your  Mac user password because the installer will make changes to the system files. 

JAVA_HOME and bash_profile

### Windows

The Windows installer is a typical **.exe** file. Double click it and follow the onscreen prompts

JAVA_HOME on Environment Settings

### Linux

Ubuntu
Fedora, Centos (recommend a link)

JAVA_HOME

http://java.sun.com/javase/downloads/index_jdk5.jsp

## Basic Syntax

## Identifiers and Keywords

The lexical makeup of our programs require the use of classes, variables and methods. When we create any of these, we need to name them so they can be identified by the compiler. The names we give to our classes, variables and methods are called **identifiers**. 

Identifiers are programmer defined names. We make them up. There are a few simple rules when creating identifiers. 

1. It cannot start with a digit, but digits are okay to use as long as they are not the first character
2. It cannot contain special characters except the dollar sign and underscore
3. It cannot be the same as a Java keyword or reserved word
4. It can only use the characters A - Z, a - z, 0 - 9

In the next code snippet, the **identifiers** in the code are marked in red.

![keywords](/java/images/keywords.png)


#### The Java Keywords

The list of Java special words are listed below. Not all of them may make sense right now but they don't have to. At the moment, we simply need to remember that we cannot use them either as class name, method name or variable name.

| abstract | continue | for        | new       | switch       |
| assert   | default  | goto       | package   | synchronized |
| boolean  | do       | if         | private   | this         |
| break    | double   | implements | protected | throw        |
| byte     | else     | import     | public    | throws       |
| case     | enum     | instanceof | return    | transient    |
| catch    | extends  | int        | short     | try          |
| char     | final    | interface  | static    | void         |
| class    | finally  | long       | strictfp  | volatile     |
| const    | float    | native     | super     | while        |

## Modifiers



## Variables

## Collections and Arrays

## Enums

## Keywords

## Data Types

### Primitive Types

### Reference Types

## Literals

## Package and Access Modifiers

## Operators

### Arithmetic

### Relational

### Bitwise

### Logical

### Assignment

### Misc

instanceOf
(?:)

## Control Flow

## Methods

## Classes and Objects

## Inheritance

## Polymorphism

## Exceptions

## Concurrency

## Input and Output

## Database

