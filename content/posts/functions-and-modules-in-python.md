---
title: "Functions and Modules in Python"
date: 2017-04-09T12:29:52+08:00
draft: true
categories: [python]
---

- [x] What is a function
- [ ] What is a module
- [x] What kinds of problems do they solve, why are they important
- [x] What do they look like
- [ ] How do I use modules
  - [ ] from the REPL
  - [ ] when invoked as a script


Python isn't finicky how you will write your code. You don't need to put them in a class or even a main function. You can pretty much write all your program as top level statements in a file. However, when you start writing programs that exceeds the complexity of "Hello world", you're bound to encounter some problems when organizing your code.  When your program grows in size, it may be difficult to track the responsibilities of certain group of codes if there were all written as top level statements. The original intent of your codes maybe lost in shuffle — sure you can use comment blocks to separate chunks of code and it may work up until a certain extent, but what your code exceeds a 1,000 lines or 10,000 or a hundred thousand, or more. This is where code organization comes in, you can use functions and classes to group your code according to some responsibilities that  you will assign to them, and that, should solve the _code intent_ issue. To solve the scale issue, we will use Python _modules_ — these things allows us to split our programs across many files. 

## Functions

In it's simplest form, a function is a named collection of statements. The basic idea is to _(1)_ group a bunch of statements, that ideally, solves a single problem (this is "S" in the SOLID principle) and _(2)_ give it a name that, ideally, describes what the statements are doing. There is no shortage of advice as to how you should name your functions and what kind of casing you should use, but you needn't go far, PEP 8 has got you covered, if your'e in doubt whether you should use 4 spaces or 2 spaces for indentation, follow the PEP 8 advise.  

Listing 1 (below) shows a simple program that defines one function and then later invokes it.

_Listing 1. simple function named "foo"_

```python
def print_a_message():    # (1)
    print("hello world")  # (2)

    
print_a_message()         # (3)
```

**(1)**  A Python function starts with the `def` keyword. This word has a special meaning in the Python runtime, you cannot use this word as a name of a _variable_ , _class_ or _function_. The `def` keyword is followed by a function name which is of your own choosing, it's programmer-defined. What follows next is a pair of parentheses, this is where we write the list of parameters that a function may accept. In the case of Listing 1, it's empty because we don't intend to receive anything — that's not always the case though. The last part is the colon symbol .  The colon symbol is used to signify the beginning of a block

**(2)**  This is the first and only statement in body of the function. Most functions you will write will most likely have more statements. Notice how it's indented by 4 spaces. This indentation is not a stylistic choice on my part. You need to indent statements that are a part of a *block*.  The body of a function is _block_ , hence we need to indent it. In Python, you need to remember that white spaces are big deal, it is its way of knowing which statements are a part of a block and which statements are top level. The 4 spaces that we used to indent the statement may be a stylistic choice, I could have used 2 or 8 spaces to indent but I instead used 4. The reason for this is PEP 8 again, 4 spaces is the recommended number to use for indentation 

**(3)** Now that we've defined a proper function, we can invoke it to kick it into action. To invoke a function, just write it's name together with the pair of parentheses.  

> **NOTE**
>
> The colon symbol or the slice operator is an interesting part of hte Python syntax, specifically with respect to its use in blocks — like function blocks, if and other program control constructs. It may seem redundant because if it's purpose is to signify the beginning of a block, it is unecessary becasue blocks in Python are indented anyway,  so the indents should be dead give away that were dealing with blocks. Guido Van Rossum responded to this issue — the colon is used also to improve readability. You can read the transcript of question and Guido's answer at [bit.ly/guido-colon-on-blocks](bit.ly/guido-colon-on-blocks)



## Modules

This is a place holder for modules








