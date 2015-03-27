---

title: Hello Node

---

Node has a **REPL** environment where you can interactively write commands and expressions. As you type something on the REPL, it will be evaluated and interpreted by Node and results will immediately shown to you. The REPL is a good tool to use for learning Node, but most of the things we will do in Node will not be on the REPL. We will write our programs in a JavaScript file and execute that file on the Node runtime. To Demonstrat this workflow, we will write a simple program.

## Steps

**1. Create a Node source file**. Node programs are JavaScript programs that run on the server side. But still, they are JavaScript programs nonetheless. Create a folder where you can store our exercise files. Ideally, this folder is inside your user folder. On a Mac this will be `/Users/yourname` and on Windows it will be `c:\Users\yourname`


{% highlight javascript %}
var http=require('http')

app=http.createServer(sayHi);

function sayHi(request, response) {
  response.writeHead(200, {'Context-Type' : 'text/plain'});
  response.end("Hello Node\n");
}

app.listen(8000, '127.0.0.1');
console.log("Web Server has started");
{% endhighlight %}


## Exercise

## Glossary

Callback
: A function call back is.

Idiomatic JavaScript
: What is this
