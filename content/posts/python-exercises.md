---
title: "Python Exercises"
date: 2016-05-10T13:46:41+08:00
draft: false
categories: [python, exercises]
---

## 1.  Summing things up

**Create a module named "sums.py"** with three functions in it. These functions are named as follows 

* `sum_to(end)`
* `sum_of_even(end)`
* `sum_of_odd(end)`

The module should be loadable from the **REPL**, sample usage is as follows

```
>>> import sums
>>> sums.sum(100)
Sum of numbers from 1 to 100 is 4950
>>> sums.sum_of_even(100)
“Your answer here”
>>> exer1.sum_of_odd(100)
“Your answer here”
```



You should also be able to run the module as a script, like so

```
$ python sums.py 100
Sum of numbers from 1 to 100 is 4950
```

Since there are 3 functions in the module, make the default function to run from `__main__` to be “sum_to”. It should be able to read the argument that was passed from the command line. 

For this exercise, you need the following skills and knowledge

1. loop constructs
2. work with functions and parameters
3. use of basic math operators, specifically the modulo
4. how to work with Python basic types, specifically converting from `str` to `int`
5. knowledge of Python execution model, know when a module is run as a script and when it's loaded from the REPL

## 2. Greatest Common Factor



Given two non-negative integers *firstNum* and *secondNum*, find the greatest common factor. There are many solutions to this problem, but for the purpose of our exercise, we'll use the Euclidean algorithm. The steps are as follows;

1. Find the bigger (*bigNum*) and smaller (*smallNum*)
2. Get the quotient (in remainder form) of *bigNum* and *smallNum*
3. If the remainder (*rem*) is `== 0`, then were done, the GCF is *smallNum* 
4. However, if `rem != 0`, then we do the following
   1. `bigNum = smallNum`
   2. `smallNum = rem`
   3. Go back to step number 2 (Get the quotient of *bigNum* and *smallNum* … )

> NOTE: 
>
> Pass the numbers as argument to the command line. This module needs to be ran as a script

This is an exercise on the following areas

1. Use of Math operators
2. Python loop constructs
3. How to use built-in Python modules
4. Knowledge of Python data types and basic conversions
5. Knowledge of some data structures like *tuples* and *dereferencing* operations (if you use them for finding the bigger and smaller number, it's entirely optional to use *tuples* though)



## 3. String parsing















