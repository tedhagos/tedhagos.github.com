---
title: 2.4.2 Returning Other Formats
---


Previously, we returned html data from our application. You can return data in other formats. 

**Plain Text**

{% highlight javascript %}
res.setHeader('Content-Type', 'text/plain');
res.write("Hello node");
res.end();
{% endhighlight %}

**JSON data**





