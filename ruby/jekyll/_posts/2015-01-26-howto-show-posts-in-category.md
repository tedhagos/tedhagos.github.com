---

title: How to Show Posts in a given category
author: Ted Hagos

---

The **categories** variable is a list in Liquid. In order to selectively display posts that belongs to a specific category, we need to do 3 things. First is to traverse all the **posts**, then traverse the **categories** list  and lastly, inquire if the category is a match to the category we want to display on the page. The code snippet below will display all the post, the title at least, that belongs to the 'linux' category.

~~~
{% raw %}
{% for post in site.posts %}
  {% for cat in post.categories %}
    {% if cat == 'linux' %}
      {{ post.title }} <br/>
    {% endif %}
  {% endfor %}
{% endfor %}
{% endraw %}
~~~

Alternatively, we can use the **site.categories.CATEGORY** variable in Jekyll to do exactly what the code sample above does. I prefer the second approach because it has less code. It is easier to read, maintain and most importantly, less processing time. 

~~~
{% raw %}

{% for post in site.categories.linux %}
  {{ post.title }} <br/>
{% endfor %}

{% endraw %}
~~~

## References

1. [jekylrb.com/variables](http://jekyllrb.com/docs/variables/)