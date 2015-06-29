---

title: jpanelmenu
tags:
- ui
- ux
---


Download the jpanelmenu javascript file from [jpanelmenu.com](http://jpanelmenu.com) and include it in your page. Don't forget to include JQuery as well, JPanelMenu needs JQuery.

~~~
<head>
  <script src="../js/jquery-1.11.2.js"></script>
  <script src="../js/jquery.jpanelmenu.js"></script>
  <link rel="stylesheet" type="text/css" href="/css/style.css" />
</head>
~~~

Structure your webpage like you normally would. JPanelMenu will monkey around with the DOM anyway. It will restructure the DOM during runtime and put its own div wrappers, so don't sweat your static structure so much. Make it as simple as possible. Having said that, JPanel will look for an element with an `id=menu`, this is the part of page that it will hide. Change the display property of that element to **none**.

JPanelMenu will also look for an element whose `class=menu-trigger`. This will be some sort of a hotspot or a button which when clicked, will trigger the sliding of the menu div.

~~~
<body>
<div id="menu" style="display:none;">
  <ul>
    <li><a href="#">Menu 1</a></li>
    <li><a href="#">Menu 2</a></li>
    <li><a href="#">Menu 3</a></li>
    <li><a href="#">Menu 4</a></li>
  </ul>
</div>

<div id="wrapper">
  <header>
    <span class="menu-trigger" style="cursor:pointer;">&#9776</span>
  </header>
  <article></article>
  <footer></footer>
</div>
</body>
~~~

Lastly, to activate JPanelMenu, you need to instantiate and turn it on.

~~~
<script type="text/javascript">
  $(document).ready(function(){
    var jPM = $.jPanelMenu();
    jPM.on();
  });
</script>
~~~

A basic structure of a whole page that uses the the JPanelMenu might look something like the html code sample below

~~~
<!DOCTYPE HTML>
<html lang="en">
<head>
  <script src="../js/jquery-1.11.2.js"></script>
  <script src="../js/jquery.jpanelmenu.js"></script>
  <link rel="stylesheet" type="text/css" href="/css/style.css" />
</head>
<body>
<div id="menu" style="display:none;">
  <ul>
    <li><a href="#">Menu 1</a></li>
    <li><a href="#">Menu 2</a></li>
    <li><a href="#">Menu 3</a></li>
    <li><a href="#">Menu 4</a></li>
  </ul>
</div>

<div id="wrapper">
  <header>
    <span class="menu-trigger" style="cursor:pointer;">&#9776</span>
  </header>
  <article></article>
  <footer></footer>
</div>

<script type="text/javascript">
  $(document).ready(function(){
    var jPM = $.jPanelMenu();
    jPM.on();
  });
</script>

</body>
</html>
~~~

# Styling

JPanelMenu will rewrite the DOM of the page. So if you think you can style the sliding panel by using the `#menu` selector, that won't work. If you inspect the elements of the page using firebug or the chrome developer tools, you will find that the sliding panel is actually enclosed in an element named `#jPanelMenu-menu`. This is the element you need to style. Code below is a snippet taken from `style.css`.

~~~
#jPanelMenu-menu {
  border-right: 1px solid #dbdbdb;
  margin: 5px;
  text-align: center;
  line-height: 2em;
  background: #fff;
}
#menu {
  padding: 10px;
}
  .menu-trigger {font-size: 3em; cursor: pointer; color: #979797;}

#jPanelMenu-menu a {
  text-decoration: none;
  color: #838383;
}
#jPanelMenu-menu a:hover {
  text-decoration: underline;
  color: #000;
}
#jPanelMenu-menu ul {
  list-style-type: none;
  margin:0;
  padding:0;
}
~~~

The code above changed the style of the unordered list and anchor tags because the sliding panel was intended to hide a menu navigation panel. The navigation panel is built by a bunch of anchor tags enumerated using an unordered list.

## Remove the scrollbar

The JPanel adds a whitespace on the side, which is probably intended for a scrollbar. To remove the whitespace without removing the scrolling ability of the panel, you need to edit the `jquery.jpanelmenu.js`

1. Find the line `overflow-y:scroll`
2. Replace it with `overflow-y:visible`
