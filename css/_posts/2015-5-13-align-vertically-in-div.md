---

title: Align Vertically inside a DIV
tags: 
- verticalignment
- alignment
---


The html

~~~
<div id=a>
  <img src="" float:right>
</div>
~~~

The CSS

~~~
#a {
  height:200px;
  line-height:200px;
}
~~~

To float an image within a div

~~~
#a {
 height:200px;
 line-height:200px;
 overflow:hidden;
}
~~~

