---

title:  /3/1/ Simple Express App
tags:
- express

---


Create a directory for the application, for this example, the project folder name will be **expressSimple**

~~~
mkdir expressSimple
cd expressSimple
mkdir node_modules
npm install express
touch server.js
~~~

The first two lines are obvious and does not need an elaborate explanation. They simply created a folder that will hold all the files in our application and we switched our current directory to that project folder. The third line might require a bit of explanation.

I created the `node_modules` folder explicitly because my node development environment has an `.npmrc` file. As such, all npm installations will go to `~/.node` folder instead of a local project folder. The npm manager will always try to install packages in a sensible location, and since I defined an npmrc file, it will follow the configuration of that resource file. On the other hand, if npm sees a `node_packages` folder on the current directory where npm was invoked, it will install the packages on the local folder.

The 5th command pulls the express framework from the npm repositories and installs it inside the node_modules folder. The last line created a file that will contain the program commands of our first application. The name of the file does not have to be `server.js`, it can be anything you like, but it quite common to name this kind of file either server.js or app.js.

The contents of `server.js` is as follows.

{% highlight javascript %}
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send("Hello Express");
});

app.listen(2000, function(){
  console.log("Listening on port 2000");
});
{% endhighlight %}


# Other Ways of Getting Started


Create a file named `package.json` inside the project folder. This file will contain a list of software which the project needs to run. If you have experience working with ruby projects, the `package.json` file is similar to the `bundler`. In Java, this will be similar to maven's pom file and in php, this kind of package management style is the equivalent of `composer`.  The basic idea is to have a file which contains a list of all the software, and their versions, that the project needs to run.

For our simple project, the contents of `package.json` will be the following

{% highlight javascript %}
{
  "name": "expressSimple",
  "version": "0.0.0",
  "private": true,
  "dependencies": {
    "express": "~4.12.2"
  }
}
{% endhighlight %}

The package.json file, obviously, is JavaScript Object literal. Our package file is intendedly simple, it only contains a few things. Here's what the entries mean.

name
: The name of our project. This is a required field

version
: Like the `name` property, this too is required

private
: If this is set to `true`, it means we don't want this project to be published publicly in npm. This is for our own use only

dependencies
: A list of software, and their versions, are written in here. When the command `npm install` is invoked, everything inside the dependencies attribute will be pulled from the npm repositories and installed inside the node_modules of the project folder

npm link express, this will create a node_





[docs.npmjs.com/package.json](https://docs.npmjs.com/files/package.json)
