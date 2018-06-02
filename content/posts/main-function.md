---
title: "Main Function"
date: 2016-02-02T14:32:31+08:00
draft: true
---



1. Why do (most) programming languages have a main function



------



```
gcc -e abc -nostartfiles <filename> -o runme
```

./runme

It will print Hello World on the command line.

```
#include<stdio.h> 
int abc() {	
  int a = 0;	
  printf("Hello World\n");
}
```

Let me enumerate the steps the OS does when you run a C program :

\1. It sets up libc runtime that will run your code
\2. It will pass load function pointed by _start pointer to Run
\3. It will run the function pointed to by _start till it ends

By default _start points to __libc_start_main function. Which is the default run function that handles parsing command line arguments, running main() and return values. If you run your code with function abc you will have to write the logic to do that yourself.



--------



It is the default entry code for the C standard library. You can use --nostart to avoid any startup code and --nostdlib for no standard library. In the first case you'll need to define _start() in your code, and in the second you'll need an assembly hook to perform that (see [Mick Stute's answer to Is main() predefined in C? If yes, how? Why don't it have any header files associated with it?](https://www.quora.com/Is-main-predefined-in-C-If-yes-how-Why-dont-it-have-any-header-files-associated-with-it/answer/Mick-Stute))

The compiler creators chose main() since that is defined in the C standard, but it could be anything. I do remember a time where a few compilers also defined an altmain() that was the entry point for standard library code and for portability you have to use #ifdef at the top to use either altmain() or main() depending on the compiler and OS. I believe I first encountered that on Mark Williams C for the Atari ST.

