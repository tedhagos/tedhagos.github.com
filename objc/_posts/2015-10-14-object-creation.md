---

title: Classes and Objects

---


## Object Creation 

Objects are created in a two step process. First step is to call the `alloc` method of the class, assuming that this method is defined somewhere in it. One of the reasons why it is recommended to inherit the NSObject, either directly or indirectly is because plumbing codes or bootstrap codes like `alloc` is so common, that it is very convenient to define them somewhere really up the class hierarchy. The `alloc` class method will return an instance of the receiving class. 

{% highlight objc %}

@interface Car : NSObject {
  @public NSString *model;
}
-(void) startEngine;
@end

@implementation Car
-(void) startEngine {
  NSLog(@"Starting engine");
}
-(id) init {
  NSLog(@"Init called");
  return self;
}
@end
{% endhighlight %}


The code above creates a class definition for **Car**, it is quite a vanilla object. Nothing fancy going on. The `init` method is overridden but it does practically nothing, it simply logs a message to the screen.

To create a variable that will hold the Car object, we need to declare it like so

~~~~~~~~
Car *obj
~~~~~~~~

The var obj is of type Car and more importantly, it is declared as a pointer. Like all objects in Objective-C, the obj var needs to be of type pointer because it will be stored on the heap.

To define the Car object, we will send the `alloc` message to the Car class.

~~~~~~~~
[Car alloc]
~~~~~~~~

The alloc method sets aside an area of memory on the heap and returns address of this memory to **obj** variable. While alloc reserves an area in memory for our object, it does not initialize whatever member variables we have defined in the class. To initialize the variables, we will need to send the `init` message to our newly created Car object. 

~~~~~~~~
[obj init]
~~~~~~~~

Notice that **obj** does not have the asterisk operator anymore. You only need to use the pointer operator once, when you are declaring an object. You do not need to use the pointer operator anymore after that, not when you are defining the object or sending a message to the object. 

The complete code to create an object is thus as follows

{% highlight objc %}
Car *obj = [Car alloc];
[obj init];
{% endhighlight %} 

Most programmers actually don't write it like the snippet above, the most common way of writing an object creation code is as follows

{% highlight objc %}
Car *obj = [[Car alloc] init];
{% endhighlight %}


### The init method


{% highlight objc %}
int main(int argv, const char *argv[]) {
  Car *obj = [Car alloc];  
}
{% endhighlight %}


If you send the `alloc` message to the Car class, it will allocate an area of memory for a Car object somewhere in the heap and the address of this memory will be held by our `obj` variable, which is of pointer type. So everything is well. Once a call to the alloc method is completed, you need to call the `init` method of the object that was just created. The alloc does not initialize values  for your ivars, that is your responsibility. A common practice in initializing ivars is to put them on the `init` method. 

There is an init method defined on the NSObject class, but it practically nothing for your ivars. You are in charge of initializing your ivars. Our code should look like the following

{% highlight objc %}
@implementation Vehicle
-(void) startEngine {
  NSLog(@"Starting engine");
}
-(id) init {
  NSLog(@"init called at %@", [self class]);
  model = @"Nissan";
  return self;
}
@end
{% endhighlight %} 

