---

title: 1 Introduction
category: macprog

---

Objective-C is the C language with some add-ons. It is different from other languages like Java, C# or C++ such that those languages were designed and built from the ground up as a totally new language but with heavy influence from the C language. Hence they are called **C based languages**.  

Objective-C is not based on C. It is actually the C language with some added capabilities. As such, any code written in the C language from years ago can be compiled and ran using the Objective-C compiler now and you can expect it work.

{% highlight objective-c %}
#import <stdio.h>
#import <stdlib.h>

int main() {

  printf("Hello World\n");
  return EXIT_SUCCESS;

}

{% endhighlight %}

The only things out of place in the example code above is the **#import** statement, in C language, that should have read **#include**. 


