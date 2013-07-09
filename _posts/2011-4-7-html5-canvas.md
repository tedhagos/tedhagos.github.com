---
layout: post

excerpt: The canvas is a viewport. The DOM element <code class="codeblock">&lt; canvas height="300" width="300" &gt;</code>, this creates a canvas 300 pixels wide and 300 pixels tall. You cannot change the unit of measurement, it will always be in pixel. 

title: HTML5 Canvas

description: Notes on how to animate using HTML5 canvas. Drawing squares, circles, erasing and redrawing. Simplistic game programming principles on html5 canvas

categories:
- html5
- canvas
- animation

---


# CANVAS

The canvas is a viewport. The DOM element <code class="codeblock">&lt; canvas height="300" width="300" &gt;</code>, this creates a canvas 300 pixels wide and 300 pixels tall. You cannot change the unit of measurement, it will always be in pixel. 

You are not supposed to write directly into the canvas element. You cannot. You need to get a programmatic reference to it using <code class="codeblock">getContext("2d")</code>. 


{% highlight javascript %}

<body>
	<canvas id="canv" height="300" width="300">
	<script>
		c = document.getElementById("canv");
		cx = c.getContext("2d");
	<script>
</body>

{% endhighlight %}

The basic idea on canvas programming is to *1) find a spot in the canvas* by specifying the *x and y coordinates* then *2) draw something* using the provided mechanisms for drawing. The *canvas primitives* (see the section below) provides some rudimentary line drawing facilities. 

***

# CANVAS PRIMITIVES

**RECTANGLE** <code class="codeblock">fillRect(x, y, width, height)</code> &mdash; draws a black rectangle. Black is the default color of the canvas, you can change the color by changing the *fillStyle*  property of the canvas. If you want to draw the rectangle's outline rather than filling it up, use <code class="codeblock">strokeRect(x, y, width, height)</code>. The color of the outline is affected by the *strokeStyle* property of the canvas.

**CIRCLE** <code class="codeblock">context.arc(x,y,r,beginAngle,endAngle,clockwise);</code> &mdash; not as simple as drawing a rectangle. There is no direct way of drawing circles in the canvas, you can only draw arcs. That is why the code to draw a circle is more involved than drawing a simple rect. The parameters are easy to figure out; *x,y* is center of circle, *r is the radius*, beginning angle is 0 (zero) and ending angle is 360. 

<pre>
window.onload = function() {
  var canvas = document.getElementById('canvasname');
  var context = canvas.getContext('2d');
  var x = 50;
  var y = 50;
  var r = 30;
  var beginAngle = 0;
  var endAngle = 360
  var clockwise = false;

  context.beginPath();
  context.arc(x,y,r,beginAngle,endAngle,clockwise);
  context.closePath();
  context.stroke();
}
</pre>
<div id="cap">Sample code to draw a circle</div>

**TEXT** <code class="codeblock">fillText(string, x, y)</code> &mdash; this is self explanatory, you know what to do with this

*** 

# MOTION

1. Draw the shape
2. Change the location of the shape
3. Erase the whole canvas or portions of it
4. Redraw the canvas using the updated coordinates of the shape 

There is no other way. The steps above is the only way to achieve motion. Think of [flip book or a flick book](https://en.wikipedia.org/wiki/Flip_book)

## LINEAR MOTION

Make the box move from left going to the right

<pre>
  var c = null;
  var cx = null;
  var box = null;
  
  window.onload = function() {
    
    c = document.getElementById('mycanvas');
    cx = c.getContext('2d');
    box = new Box();
    
    update();
    
    function update() {
      cx.clearRect(0,0,c.width, c.height);
      cx.fillRect(box.x, box.y, box.width, box.height);
      box.x = box.x + box.speed;
      setTimeout(update,50);
    }
  }

  function Box() {
    this.x = 0;
    this.y = 0;
    this.width = 50;
    this.height = 50;
    this.speed = 5;
  }
</pre>
<div id="cap">Animating a box</div>

The key of this example is the *update()* function. It calls the *setTimeout* which acts as the timer of canvas, it executes the *update* function every 50 milliseconds. 

The main things to do in the *update* function are; *1) Erase the canvas* , the <code class="codeblock">clearRect</code> function took care of that *2) Redraw the object* and *3) Change the x & y coordinates of the object*