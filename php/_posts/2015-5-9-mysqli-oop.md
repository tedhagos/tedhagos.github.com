---
title: MySQLi OOP
tags:
- databaseprogramming
---

Start by connecting to the database

{% highlight php startinline %}
define("DBSERVER" , "localhost");
define("DBUSER" , "dbuser");
define("DBPASS" , "dbpassword");
define("DBNAME" , "dbname");

global $cn;

$cn = new mysqli(DBSERVER,DBUSER,DBPASS,DBNAME);

if(mysqli_connect_errno()) {
  die("DBCONNECT | database connection failed" . mysqli_connect_error());
}
{% endhighlight %}

Fetch just the one record from the database

{% highlight php startinline %}
$query = "SELECT * FROM tbousers WHERE idno=11";
$result = $cn->query($query);
$row = $result->fetch_assoc();

var_dump($row);
{% endhighlight %}

To get more than one record, use the following code

{% highlight php startinline %}
$query = "SELECT * FROM tbousers";
$result = $cn->query($query);
$row = $result->fetch_assoc();

while($row = $result->fetch_assoc()){
  var_dump($row);
}
{% endhighlight %}

If you want to store the results you got into a an associative array, use these codes

{% highlight php startinline %}
$storage = array();

$query = "SELECT * FROM tbousers";
$result = $cn->query($query);
$row = $result->fetch_assoc();

while($row = $result->fetch_assoc()){
  array_push($storage, $row);
}

var_dump($storage);
{% endhighlight %}
