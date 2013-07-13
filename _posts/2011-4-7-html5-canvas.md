---
layout: post

excerpt: The canvas is a viewport. The DOM element <code class="codeblock">&lt; canvas height="300" width="300" &gt;</code>, this creates a canvas 300 pixels wide and 300 pixels tall. You cannot change the unit of measurement, it will always be in pixel. 

title: HTML5 Canvas
subtitle: Technical notes on building HTML5 Canvas apps

description: Notes on how to animate using HTML5 canvas. Drawing squares, circles, erasing and redrawing. Simplistic game programming principles on html5 canvas

categories:
- html5
- canvas
- animation

---



<h1 class="chapter">INTRODUCTION</h1>

The canvas is a viewport. The DOM element <code class="codeblock">&lt; canvas height="300" width="300" &gt;</code>, this creates a canvas 300 pixels wide and 300 pixels tall. You cannot change the unit of measurement, it will always be in pixel. 

You are not supposed to write directly into the canvas element. You cannot. You need to get a programmatic reference to it using <code class="codeblock">getContext("2d")</code>. 


{% highlight javascript %}

<body>
	<canvas id="canv" height="300" width="300">
	<script>
		c = document.getElementById("canv");
		cx = c.getContext("2d");
	</script>
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

<hr class="chapterbreak"/>

<h1 class="chapter">MOTION</h1>

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

<hr class="chapterbreak"/>

<h1 class="chapter">HANDLING COLLISION</h1>

Once you are comfortable making objects move, you will have another problem. That is how to know when your objects are bumping into other objects. Even if you have just the one object moving about in the canvas, surely at some point it will hit the borders of the canvas. You need to be able to handle that.

There are no magical or automatic ways to do this. You will need to resort to primitive techniques. That means being aware of coordinates of your *fixed-position* objects, in this case, the borders of the canvas and being aware of the current position of your object. 

You will devise a way to keep track of these things. When the updated position of your object coincides with the location of another object, fixed position or otherwise, you have a collision. The next thing left to do is provide programming logic when the collision happens.

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
            
      if((box.y + box.height) < c.height) {
        cx.clearRect(0,0,c.width, c.height);
        cx.fillRect(box.x, box.y, box.width, box.height);
        box.y = box.y + box.speed;
      }
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


This code sample basically moves the box object along the *y-axis*. Notice that prior to the *clear-update-redraw* operation, the bounds of the box is checked against the height of the canvas. If the box's current *y-location* plus the height of the box is less than the value of the canvas' height, the animation continues, if not, then no action is taken. This gives the appearance that the box stops at the bottom of the canvas. This approach is probably good enough for a first draft, but it can get messy really quickly once we add more objects to this. 

We can improve the code a little bit if we move the programming logic of the collision away from the drawing logic. 

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
      if(!isInCollission(box)) {
        cx.clearRect(0,0,c.width, c.height);
        cx.fillRect(box.x, box.y, box.width, box.height);
        box.y += box.speed;
        setTimeout(update,50);
      }
    }
  }

  function isInCollission(box) {
    if((box.x + box.width) < c.width &  
       (box.y + box.height) < c.height) {
         return false;
       }
    else {
      return true;
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

The  *isInCollission()* function takes a *box* parameter to check if either the bottom or the right side of the box is already in contact with either the right boundary or the floor of the canvas. 

You can make this code more robust by including codes that checks for collission on ceiling or the left side of the canvas, but that is left to you as an exercise.

<hr class="chapterbreak"/>

<h1 class="chapter">EVENT HANDLING</h1>

The objects you draw on the canvas are not event aware. You won't be able to hook em up to *click* events or any other standard events. These objects are not DOM objects, hence, they cannot raise nor sink events. 

Short of using a framework like KineticJS, what you can do is attach the event to the *canvas* DOM element, capture the *x,y mouse coordinates* and devise a logic if the click happened within the bounds of your object. 

The following code sample traps the click event inside the canvas. 

<pre>
	window.onload = function(){
		
		var c = document.getElementById('mycanvas');
		var context = c.getContext("2d");
		var watch = document.getElementById('watch');
		
		var mousex;
		var mousey;
		var mousepos;
		var mouseoffset = 20;
		
		c.onclick = function() {
			
			mousex = event.clientX;
			mousey = event.clientY;
			
			mousepos = "X : " + mousex + " | Y :" + mousey;
			watch.innerHTML = mousepos;
			draw(mousex,mousey);
		}
		
		function draw(x,y) {

      var R = Math.floor(Math.random() * 255);
      var G = Math.floor(Math.random() * 255);
      var B = Math.floor(Math.random() * 255);
      var color = "rgb(" + R + "," + G + "," + B + ")";
      
      var dim = Math.random() * 50;
      
      context.fillStyle = color;
			context.fillRect(x-mouseoffset,y-mouseoffset,dim,dim);
		}		
	}
</pre>

The current location of mouse is given by *event.clientX & event.clientY*. The sample code uses the current location of the mouse to draw the *X & Y* of the rectangle. The *offset* variable was used simply to reposition the top-left of the rectangle in order to coincide with tip of the mouse cursor.





