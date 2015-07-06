---

title:  3 Express
chapterhead: yes

---

The things I would like to cover

- Why express, what is it
- How to use it
- Routes
- Middleware
- Express Generators




The express framework needs to be installed as a dependency of your application. That means we will install it locally via npm on the project folder and not globally. You will install node modules globally if they are tools that you wish to use from anywhere in your system. If the modules are things that you need for a specific project, then these modules needs to be installed as dependency and should be located on the same folder where the project files are.

To get started,

~~~
cd
mkdir firstApp
cd firstApp
npm install express
~~~

The npm tool will pull the necessary files from internet repositories. You need to have an internet connection when you do this. The downloaded files will be placed in a folder called `node_modules` on your project folder. Now we can begin to write the  codes for our first express application.

The first thing to do is to get the `express` library and make it available to our application. This can be done by simply `requiring`  the express codes  which we pulled earlier using `npm`. After that we create an application object by calling the `express` function

~~~
var express = require('express'),
    app = express();
~~~

At this point, we can use any method of the express object to create our application. The first thing we will use is the `get` method. The `GET` method allows


{% highlight javascript %}
var express = require('express'),
    app = express();

app.get('/', function(req, res){
  res.send('Hello World');
});

app.listen(5000, function(){
  console.log("waiting on 5000");
});
{% endhighlight %}




http://jade-lang.com/tutorial/
