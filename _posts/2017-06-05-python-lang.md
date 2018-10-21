---
title: My notes on Python
layout: post
categories: python
permalink: /posts/python-lang/
comments: false
# image: /images/python-stevecarell.jpg
date:   2017-10-10 
---


**Preface material**

Who is this for? It's for a beginning programmer, but I'm assuming this isn't your first programming language — HTML doesn't count, but if you coded a bit of JavaScript, then that counts. 

The very fundamentals of coding won't be tackled in here. I'm already assuming that your quite familiar with some of the tenets of imperative programming, like, statements are arranged in sequence, they execute one after another unless redirected by a branching construct like an `if`, or a looping construct like a `do`; or variables can hold data,  they have a memory address and we can replace that data whenever we like — stuff like that. There are plenty of places in the web where you can an introduction to programming, e.g. [Coursera's introduction to programming](bit.ly/introprogrammingcsera). Having said that, I tried to stay away from computer science jargon as much as I can. So, it may be possible after all for a beginner to make use of these materials. 

**Style guide and other stuff**

I use lots of code examples. These materials are peppered with. So, when you see something like this

**Example 1. How to start the REPL**

```python
$ python3
>>> import this
```

You're supposed to launch a terminal application and type what you see. If you will work with Python, you need to be comfortable working on the cmd line. I'm assuming that you can manage to find the terminal application in your OS — like `cmd` in Windows, Terminal.app in macOS or an xTerm in Linux, or whatever terminal you prefer.

When you see something like this

**Listing 1. age.py**

```
from datetime import datetime as d

birthYear = int(input("When year of birth "))

if 1946 <= birthYear <= 2012:
    print(d.now().year - birthYear)
else:
    print("no logic for that")
```

You're supposed create a file named "age.py" as specified in the Listing header and type the contents into it. 



# Getting Python 

Linux and macOS users already have Python installed, but chances are they have Python 2. We'll be using Python 3, so you need to get it.

| platform | how to install Python                                        |
| -------- | ------------------------------------------------------------ |
| Linux    | If you're using a modern Debian or Ubuntu system, chances are you already have Python3. To see if you really have it, type `python --version` on a terminal |
| macOS    | I'm assuming you already have the HomeBrew package manager. If you don't have it, you can install by following the instructions on the [homebrew install page](http://brew.sh/#install). Then, on a terminal, type `brew install python` |
| Windows  | You can use the chocolatey package manager. To install it, you can follow the instruction in [chocolatey/installation](https://chocolatey.org/install). After that, you can do this on the the command line `choco install python` |

Another way to get Python is via the Anaconda installer. You can find the instructions [here](http://bit.ly/anaconda_installer)



# REPL

REPL is short for Read Eval Print Loop. It's an interactive environment for Python.  Try it out.

**Example 2. Try the REPL**

```
$ python
>>> 1 + 1
2
>>> print("Hello World")
Hello World
help(str)
```

You can type any valid expression or statement in this environment. This is a good way to learn the language. You can try out some expressions in here before you put them in your script. 

It's also an excellent way to learn about the Python library. The last line in Example 2 shows how to get help about the String library.

# Editor



# Basics



# Strings and collection



# Modules

Modules make our lives a lot easier. This is how we take advantage Python's built-in library and other people's codes. 



This is just Python source file that can expose classes or functions.

3 forms of import



# Objects



# Collections again



# Exceptions



# Iterables



# Classes



# I/O

