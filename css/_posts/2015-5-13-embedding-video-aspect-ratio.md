---

title: CSS for Embedded Video on a Webpage
tags:
- embedvideo
- aspectratio
- youtube
- vimeo

---

The html page

{% highlight html %}
<div class="videocontainer">
<!-- video embed codes here, iframe probably -->
</div>
{% endhighlight %}

The CSS definition

{% highlight css %}
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}

.video-container iframe,  
.video-container object,  
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
{% endhighlight %}
