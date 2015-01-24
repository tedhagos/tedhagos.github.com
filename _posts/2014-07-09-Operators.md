---

title: Operators
author: Ted Hagos
categories: java

---



This should not not be a long section. If you have programmed before using another language, chances are these operators are exactly the same thing in that other language that you used. So it's a not a big deal. There is not much to see here and to be honest, quite boring. So in this section, we will simply list the operators that you can use in Java. No gotcha's nor clever examples, just a list. 

## Arithmetic

The **+ - \* / and %** functions as you might expect. They work on numbers, both real and integral &mdash; with the exception of the **+** which also works on **Strings** as you've seen earlier.

## Comparisson

The **> >=  < <= and ==** are read, more than, more than or equal to,less than and less than or equal to, respectively. You know how to use them, you don't need me to explain.

## Logical

- **&** This is the logical **and**. The expression will only be true if both operands are true
-  **&&** This is the short circuit **and**, more or less the same as the logical **and** but it's short circuit. If the first operand is already false, it will not even bother testing the second operand, it will immediately return **false**, hence it's name, short-circuit.
-  **\|** This is the logical **or**. The expression will return true as long as one of the operand is **true**
-   **\|\|** This is the short-circuit **or**. It follows the same prinnciple as **&&** only it performs it on an **or** condition &mdash; can you figure it out? That's your homework.

There are other operators in Java, but we won't list them here. It makes sense to tackle them when there is more context. So we will leave the discussions of these other operators like `++ and --` for later.
