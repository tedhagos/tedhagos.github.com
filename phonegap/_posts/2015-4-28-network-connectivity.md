---

title: Network Connectivity
tags:
- network connectivity
---

Checking for connectivity is not an out of the box functionality for phonegap. You need to get a plugin for it.

~~~
cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-network-information.git
~~~

The network state is exposed via the variable `navigator.connection.type` which will be available to your app as soon as the the `deviceready` event has been raised. The code snippet below shows the basic use of this plugin

{% highlight html %}
<!DOCTYPE html>
<html>
<head>
  <script type="text/javascript" src="cordova.js"></script>
</head>

<body>
  <script type="text/javascript">
    document.addEventListener('deviceready', function(){

      var conn = navigator.connection.type;

      if(conn == Connection.NONE) {
        alert("No Connection");
      }
      else {
        window.location.replace("landingpage.html");
      }

    });
  </script>
</body>
</html>
{% endhighlight %}

The possible values for `navigator.connection.type` are the following

1. Connection.UNKNOWN
2. Connection.ETHERNET
3. Connection.WIFI
4. Connection.CELL_2G
5. Connection.CELL_3G
6. Connection.CELL_4G
7. Connection.CELL
8. Connection.NONE

Adjust your application logic appropriately so you can route the programming flow depending on which connectivity the device has at the moment.

# Reference

1. Cordova Docs/connection - [docs.phonegap.com/connection](http://docs.phonegap.com/en/edge/cordova_connection_connection.md.html)
