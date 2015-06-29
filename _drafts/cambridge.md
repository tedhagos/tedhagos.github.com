---

title: Cambridge Training
categories:
- nodejs

---

# 1 Introduction and Setup

MEAN Stack - Is an acronym for Mongo, Express, AngularJS and Node. This is fast becoming a favorite and goto stack for development. 

Why? Well, you typically need a couple of technologies when building a web application. You usually stack up software on top of another and you make them communicate to each other in order to facilitate your web workflow. The closest layer to the user is the front end layer. This is the what the user sees. These technologies the ones found running in the web browser, html, css and javascript. On the server end, these are codes invisible to the user, this is the layer of technology where you write business rules -- do you know this user name, is he allowed in the system, how much discount do you want to give when you sell a product item etc. Another part of your architecture stack is the database layer. Your application receive, store and retrieve information from a storage device, this is the database layer. Most of the time, each of layer on these architectural stack will use their own language when it needs to manipulate data. The front end layer will typically use JavaScript, the lingua franca of web. The business or logic layer will a language other than JavaScript, for example, if you use .NET the language of the logic layer will either be Visual Basic or C#, if you are using Java, naturally the logic layer will use Java. The database layer will most likely use the Structured Query Language (SQL).

The MEAN stack uses JavaScript in all the layers. This means there is no loss of fidelity or conversion of data structure as the data moves from the front end to logic layer to the database. This is a big deal.

Node overview -> V8, JavaScript, Libuv. This was done by Ryan Dahl. Google invented the v8 engine (why). Because …
NoSQL was done why.

## Installation

There are a couple of ways to install the MEAN stack depending on what OS you are using. The simplest would be to download the precompiled binaries from nodejs.org and mongodb.org. 

### Installing NodeJS

### REPL 


### Hello World

{% highlight javascript %}
var server = require('http');

var app = server.createServer(serve);

function serve(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("Hello World");
  res.end();
};

app.listen(5000, function(){
  console.log("Waiting on port 5000");
});
{% endhighlight %}


### Installing Mongodb

# 2 Node

What did we do here exactly

I also made a point about two things
- event model
- require

I have to elaborate a bit

file reading

{% highlight javascript %}
var fs = require('fs');

fs.readFile('./index.html', 'utf-8', function(error, data){
  console.log(data);
});
{% endhighlight %}

and the HTML file

{% highlight html %}
<html>
  <h1>Home Page</h1>
  Welcome to node
</html>
{% endhighlight %}


then we went back to hello world and read a file, there was path and basename

then the restful stuff





# 4 MongoDB 

# 5 Tools




