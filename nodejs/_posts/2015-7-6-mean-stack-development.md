---

title: 1 Introduction 

---

A web application typically has 3 parts or components. To use the lingo of developers, these components are sometimes referred to as solution stack, architectural stack or simply tech stack, they all mean the same. They are programs or applications that are needed in order to build a web app. These components are the client, server and database or db. In the last 15 years or so, there has been marked and significant changes on each of these components.


## Client Side

The client is usually made up of HTML markup, CSS and JavaScript. In the early years of the web, the client was typically just made up of HTML and CSS. There was little JavaScript in them, if at all. Then business apps were built and the client component needed a bit more interactive. We started getting inputs from the client side. A bit JavaScript began to be used but mainly only for validation of inputs. 

A couple more years passed and we began to use JavaScript not only for validation but for creating dynamic HTML. DHTML became popular because it allowed us to change the DOM in response to user activity. This gave way to web apps that mimic desktop applications; they did it poorly of course but doors were opened towards replicating the desktop experience on the a web platform.

One of the annoying limitation of web apps is imposed the stateless nature of the http protocol. HTTP being stateless and all meant that everytime you navigate away from a page means that the whole web page will be redrawn or refreshed before you can see new content, even if most of the page is unchanged. This limitation drove tehnical community to find a solution where new content can be fetched and displayed from a server without redrawing the whole page. This technology becaame known as Xml Http Request or XHR for short. Nowadays, we simply call it AJAX or Asynchronous JavaScript and XML.

Another problem that plagued web developers was the fact that there were quite a couple of web browsers in use and they don't treat JavaScript code the same way. The technical community again banded together to solve this issue. This effort gave rise to JavaScript libraries that manage the differences between browsers. This allowed developers to focus more on functionality and be less concerned about browser incompatibilities. There were several JS libraries that did this, namely Yahoo User Interface (YUI), Prototype and JQuery to name a few. Hands down, JQuery was, and is still the one in widest use. 

As the browser capabilities grew, developers shifted more and more functionality on the client component. They put more and more JavaScript code on the front end. A couple of years ago, MVC or the model view controller programming pattern began to be used on the front end. MVC used to be on the server territory but because of increased capabilities of the browser, it is now being used on the client side as well. This is a serious and significant change on the client side stack. AngularJS is on the forefront of the client side MVC movement. There are other technologies as well, Knockout and BackboneJS also frameworks on the same vein but Angular is becoming to be the more popular choice. 


## Server Side


## Database stack



Web Development has changed significantly in the last few years

Client
Server
DB

Client - were simply a combination of HTML markup and CSS. The use of JavaScript was minimal. Then just JS validation, then DHTML, then XHR (MS), then JQuery/Prototype/YUI etc, then MVC. Client side code is now a serious platforms. Angular is not alone but it is the most popular, most popular and most talked about. It is a framework, rather than library

Server - This also changed. Java, .NET and PHP used to be king. But now Node is making inroads to Enterprise. NodeJS and Express are practically joined at the hip for making web applications. Express is like Struts, somewhat.


DB - In the early years of web application, relational databases were dominant as storage technical strategy. But high scalability sites like Amazon ran into the limitations of RDBMS in terms of performance. This gave birth to the NoSQL, a new type of database. Document database, no constraints and referential integrity -- MongoDB is one of the most popular. BSON, JSON, JS as a query language

Client, DB and Server all use JS as the language. Devs no longer need to switch context as far as language is concerned as they move from through the stacks of the technical solution. While this is not a silver bullet because each solution layer or stack still have their own coding paradigms and patterns, it helps a lot that they all use JavaScript as the language

The harmony brought about by our ability to use JS across the solution layers of the web app is probably the biggest reason why MEAN is becoming very popular. MEAN is short for Mongo, Express, Angular and Node. It makes a pretty cool acronym, a bit out of order, but it doesn't matter.


## What you should know

- JavaScript
- 
