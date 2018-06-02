---
title: "Angularjs Quickstart"
date: 2017-12-31T20:58:27+08:00
categories: [angularjs]
tags: [javascript]
---

## 1. Introduction

* What's covered
* What versions
* Why this tutorial

Why Angular1 (you saved someting in instapaper). Why would you want to use this in 2018?

Package this with

Resources for the book (have it downloadable)

## 2. Requisite knowledge and background

1. JS
2. Command line experience
3. Experience setting up a POSIX shell such as Cygwin or MingW, if you are using Windows. It is possible to do all the examples which requires the use of the command line in Windows Powershell, but that is out of the scope of this tutorial.
4. HTML and DOM

This is not for beginners.

## 3. Tools

To get the most out of this tutorial, it's best if you can get your tooling as close as possible to what's been used in working these examples. To follow the examples here, you will need the following tools.

1. **Node** installation, at the time of writing, node's version is v9
2. A **program editor**. Any competent program editor wil do, use whatever it is you are already comfortable with
3. **npm**. This is usually installed with Node
4. **HTTP server** to test the example codes

> **NOTE**
> This tutorial has been done on macOS, the example commands as shown here, should work with Linux machines as well. For Windows users, 

### 3.1 Installing nodeJS


### 3.2 Installing the web server


### 3.3 UNIX tools for Windows


## 4. A view from 10,000 feet


## 5. Preparations

Create a project folder and install the angularJS libraries in it. There are plenty of ways to get the angularJS libraries, depending on your choice of tools, you can get it via bower (falling out of favor nowadays), npm, yarn, direct download from angularJS website or even simply referencing it from any of the CDNs. The commands found below will apply to Linux and macOS. For Windows users, if you want to follow along these examples, as they are shown here, it will be best to get a UNIX like terminal or shell such as Cygwin or other similar tools. 

_Example 1. Preparing a project folder_
```bash
mkdir ~/myproject && cd ~/myproject
```

The next examples shows how to get angularJS using the various package managers.

_Example 2. bower_
```bash
bower init  # answer all the questions
bower install angular#1.6 --save
```


_Example 3. yarn_
```bash
yarn init -y # answers all questions with "yes"
yarn add angular#1.6 --save 
```

_Example 4. npm_
```bash
npm init -y # answers all questions with "yes"
npm install angular@1.6
```

You may also get the angularJS libraries by downloading them directly from the [angularjs.org](http://angularjs.org) website and follow the directions for getting the zipped files. After that, unzip the downloaded file into your project folder.  

Alternatively, if you have the `curl` or `wget` tools at your disposal, you may also use them.

_Example 5. wget_
```bash
wget https://ajax.googleapis.com/ajax/libs/angularjs/1.6.6/angular.js
```

If you prefer not to download the angularJS libraries locally into your project folder, you may simply reference it from the `script` tag of your HTML file

_Listing 1. referencing angularJS in the script tag_
```html
<html>
 <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.6/angular.min.js">
 </script>
</html>
```

For the rest of the tutorial, we will use the npm package manager.

## 6. Hello World

Let's start our code exploration with a simple angular app. We'll put the JS codes on the same file as the HTML, this will keep things simple for now. Listing 2 (below) shows the structure of our html file.

_Listing 2. hello.html_
```
<html>     
  <div>     (1)

  </div>
  <script src="node_modules/angular/angular.js"></script>  (2)
  <script> (3)

  </script>
</html>
```

**(1)** We will use this `div` element to contain our first angular expression

**(2)** This code brings the angular files into our html file. You must have downloaded the angular codes before this. I used the _npm_ package manager to get angular that's why it's located in the `node_modules` folder. Other package managers, like bower, would put angular in a differently named folder

**(3)** This script tag is where we'll put our angular app codes



_Listing X. Complete code listing for hello.html_
```html
<html>
  <div ng-app="app">
    {{ 5 * 5 }}
  </div>

  <script src="node_modules/angular/angular.js"></script>
  <script>
    (function(){
      let mod = angular.module('app',[]);
    })();
  </script>
</html>
```




















