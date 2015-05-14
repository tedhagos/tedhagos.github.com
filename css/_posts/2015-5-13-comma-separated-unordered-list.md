---

title: comma separated list
tags:
- webmenu
- unorderedlist

---

The html

{% highlight html %}
<div id="thelist">
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>
</div>
{% endhighlight %}

The CSS

{% highlight css %}
#thelist ul {margin:0;padding:0;display-inline; list-style-type:none;}
#thelist ul li:after {content:",";}
#thelist ul li:last-child:after {content: "";}
{% endhighlight %}

On some rare occassions, you may have to handle the peculiarities of webkit and mozilla. If the code above does not seem to affect the margin and padding of the `ul`, try to inspect the elements using the facilities of your browser. You may have to do following  adjustments to the css definition of `ul`

{% highlight css %}
#thelist ul {
  margin:0 padding:0; list-style-type:none; display: inline;
  -webkit-margin-before:0;-webkit-margin-after:0;-webkit-padding-start:0;
  -moz-margin-before:0;-moz-margin-after:0;-moz-padding-start:0;
  margin-before:0; margin-after:0; padding-start:0;
}
{% endhighlight %}
