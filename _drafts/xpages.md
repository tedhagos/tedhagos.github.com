---

title: XPages Notes
categories: java

---

# What is it

It's a *notes* design element. Whatever that means. It is used to present content in either a web server or a mobile browser or a notes client. I think, a lot of my confusion stems from the fact that I don't know notes. So how do I understand this?

I know about a web presentation but I don't know anything about a notes clients. From this definition, it appears that XPages is somewhat similar to Apache Cocoon document. It is written in a specific XML dialect, actually **XSP** which is short for eXtensible Stylesheet Page. This document is then processed so that it can emit either a PDF, html or something else altogether. 

## Questions
What does NSF stand for? What is a notes database design element Can you build an XPage without the designer? Gotta figure that one out.

# First Principles of designing an XPage Application

There is an XPage programming model that involves Java, JSF to be specific. It is in chapter 5

An XPage is a plaintext file. It is written using XSP (I need to be careful if what XSP means is the same for IBM Notes and Apache Cocoon). XSP is a declarative language, a specific dialect of XML. In a declarative language, you define what you want to happen and not how to do it. You leave the how to processors. From the book, it says, you can achieve a lot without a single line of code (Now why don't I believe that), but you can write code if you want or need to, which will most likely be the case if you want to do something that is non-trivial, things that are beyond the HelloWorld application. It seems that you can code XPages using either Java or JavaScript or both.


## The XPage Markup

The markup allows us to

1. Create the user interface
2. Define data that can be manipulated and displayed
3. Define the application logic to be executed in response to events

## Does all this makes sense to me

1. Can I understand this. This is the basic model for an android app, even XML, there is a processor that reads the markup then a code is emitted so that the appropriate view or UI design element can be properly ran/displayed
2. XML is all about data, which means that XPage is also a document that defines structured data
3. No 3 above is what I don't get. How does it do that. I have to keep reading

# The tags

Each tag in the XSP markup corresponds to a;

1. User interface control
2. Data source
3. Pre defined app logic or
4. Propery used by one the components of any of the above

There is well defined interaction between the UI, app, data and app logic. But where is the processor? Is the XPage runtime or Domino runtime. Are these two one and the same

Each new XPage is an XML doc. Here's what it looks like

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<xp:view xmlns="http://www.ibm.com/xsp/core">
 
</xp:view>
{% endhighlight %}

The book warns **do not confuse xp:view with notes:view**, but what does that mean?

The xmlns attribute should be replaced by your own (but how will I define that. What does the ns document look like)

## Root of JSF element

The root is the **view** tag. This convention was adopted from JSF. The **\<xp:view\>** means it is the body of an HTML doc

The view tag can be customized by adding attributes to it. It is an xml tag after all, so it can have attributes that can add to the specifity of its behavior or how it is displayed. but where can you learn these attributes? (Find the documentation of this one) 

## Properties of tags 

Properties of tags are categorized according to function

1. Accessibility - assistive technologies
2. Basics - generaral properties
3. Dojo - Yes. it uses the dojo toolkit, so I need to learn dojo
4. Data - Optional properties that allow association between data and tag
5. Events - what events can the component respond to. Kinda like prefabricated events found on VB editors or the predefined events of DOM elements
6. Styling - CSS stuff

