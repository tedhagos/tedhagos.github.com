---

title: AJAX Form Submission
tags:
- ajaxjquery
- formsubmission
- phpendpoint
---

The code samples use the ajax functions of jquery, so you need to add jquery to the page

~~~
<script src="/js/jquery.js"></script>
~~~

The html code is as follows, it's a simple login form. The form does not have any `method` attribute, we will define that on ajax code. It also does not have an `action` attribute, we will also handle that on the ajax code.

~~~
<form id="loginform">
  <input type="text" name="username" placeholder="ID No"><br/>
  <input type="password" name="password" placeholder="password"><br/>
  <input type="button" id="btnlogin" value="Login"/>
</form>
~~~

JavaScript code for ajax submission is as follows. The first thing to do is to call `event.preventDefault` so that the form does not automatically submit itself to the same URL where the html file was downloaded. If the form does not specify any `action` attribute,  by default, it will submit it self where it came from. We need to prevent it because we would like to submit the data using ajax and we don't like to cause a `request/response` action that will result in a page refresh.

~~~
<script>
$("#btnlogin").on('click', function(event){
  event.preventDefault;
  // form submission code
});
</script>
~~~

The long winded and most verbose way of writing the form submission code could look like the sample code below.

~~~
var formdata = $("#loginform).serialize();

var xhr = $.ajax({
  type      : "POST",
  url       : "/login.php",
  data      : formdata,
  dataType  : 'json',
  encode    : true
 });
~~~

The `serialize` function takes care of creating a JSON object out of the form elements. The URL encoded JSON object is needed when we submit the form to the target URL. 

The `.ajax` function takes a JSON object as a parameter. This JSON data is where you can set some form options and action. The `dataType` was set to 'json' because were expecting the server to send back a response in JSON format. If the call to the ajax function is successful, it will return an jqXHR object. In our code we stored this object in a variable named `xhr`. You can call your variable whatever you please, you don't have to use `xhr` like in this code sample, but xhr is easy to remember, it stands for **XML Http Request**. 

The code above will do only 2 things, it will serialize the form data and send it to a web endpoint called `/login.php` where it may undergo further processing e.g. look up username and password against a database and return an appropriate response to our ajax code. But at the moment, we don't have a code that will handle any response that may come from the server. We still need to write that code.

~~~
xhr.done(function(data){
  alert(data);
});
~~~

You can call the `done` method against the xhr object we initially created. The success method lets us define a callback function which will be called if our ajax call succeeds. The `data` parameter of the callback function actually carries a payload which contains the server's response, if there are any, to our call. If you want to handle a failure scenario, we can use the `fail` method of the xhr object. 

The complete code is as follows

~~~
<script>
$("#btnlogin").on('click', function(event){
  event.preventDefault;

  var formdata = $("#loginform).serialize();

  var xhr = $.ajax({
    type      : "POST",
    url       : "/login.php",
    data      : formdata,
    dataType  : 'json'
  });
  xhr.done(function(data){
    alert(data);
  });
  xhr.fail(function(data,status,errror){
    alert(data + " " + error);
  });
});
</script>
~~~

# Short Form

JQuery has a short form for doing ajax calls. The `ajax` function is a generic way of sending either a `GET` or a `POST` request against a  web endpoint, you just need to specify the type of request inside the JSON data of the ajax function. Alternatively, you can also make ajax calls using either the `post` or `get` method.

~~~
<script>
$("#btnlogin").on('click', function(event){

  var xhr = $.post('/login.php',$("#loginform").serialize(),function(data){
    alert(data);
  },'json')
  xhr.fail(function(data, status, error){
    alert(data +  " " + error);
  });
});
</script>
~~~

The code is functionally equivalent to our earlier example when we used the `ajax` function. Another way of writing the code sample above is to chain the `fail` method right after the call to `post`. After all, the `post` method returns an jqXHR object, which means we can call the fail method against it, inline. Here's how the code looks.

~~~
<script>
$("#btnlogin").on('click', function(event){

  $.post('/login.php',$("#loginform").serialize(),function(data){
    alert(data);
  },'json').fail(function(data, status, error){
    alert(data +  " " + error);
  });
});
</script>
~~~

# References

1. api.jquery.com [ajax](http://api.jquery.com/jquery.ajax/)
2. api.jquery.com [serialize](https://api.jquery.com/serialize/)
