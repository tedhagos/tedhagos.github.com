---

title: Align Vertically inside a DIV
tags:
- verticalignment
- alignment
---


The html

{% highlight html %}
<div id=a>
  <img src="" float:right>
</div>
{% endhighlight %}

The CSS

{% highlight css %}
#a {
  height:200px;
  line-height:200px;
}
{% endhighlight %}

To float an image within a div

{% highlight css %}
#a {
 height:200px;
 line-height:200px;
 overflow:hidden;
}
{% endhighlight %}
