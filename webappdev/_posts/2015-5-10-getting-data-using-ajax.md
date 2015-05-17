---

title: Getting Data Using AJAX
tags:
- ajaxjquery
- phpendpoint

---


# Get Data from an Endpoint

If simply want to get data from a web endpoint and you don't need to send something to that endpoint, you can use `getJSON`. It is another shorthand for the longer form `ajax` method of jquery. The `getJSON` method will not require you to specify the encoding because it will automatically be 'json' encoded.

{% highlight javascript %}
$.getJSON('/restendpoint.php', function(data){
  // do something with data
  // data is the payload of server's response
});
{% endhighlight %}

You will use this if you know that the type of data that the server will return is 'json', if is anything other then json, use the `$get()` method instead

{% highlight javascript %}
$.get('/restendpoint.php', function(data){
  // do something with data
  // data is the payload of server's response
  // this data could be html or xml
});
{% endhighlight %}

# Sending Data to the Server

You should really use jquery's  `$.post` method when sending data to an endpoint for many good reasons e.g. you don't see the data on query string and you can move away from the size limitation that HTTP GET imposes when sending data. But it does not mean you can't use GET to send data. It is really up to what you are trying to do. Here's how to send data to a server using the GET method of ajax.

{% highlight javascript %}
$.getJSON('/restendpoint.php', {data:'mydata'}, function(data){
  // do something with data
  // data is the payload of server's response
});
{% endhighlight %}

The second parameter of `getJSON` which acts as the payload that will be sent to the server. The code below is an example of how to  send more than one data item.

{% highlight javascript %}
$.getJSON('/restendpoint.php', {data:'mydata', email: 'tedhagos@gmail.com'}, function(data){
  // do something with data
  // data is the payload of server's response
});
{% endhighlight %}

# Sending Form Element Data








# References

1. api.jquery [getJSON](http://api.jquery.com/jquery.getjson/)
