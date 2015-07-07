---

title: 5 Mongoose 
chapterhead: yes

tags:
- nosql
- database
- mongoose

---

What is mongoose
How to do it

{% highlight javascript %}
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test2');

var Schema = mongoose.Schema;

var productSchema = new Schema({
  name : {type: String},
  count : {type : String}
});

var Product = mongoose.model('Product', productSchema);

var obj = new Product({
  name : "Breeze",
  count : 10
});

obj.save(function(error){
  if(error){
    throw error;
  }
  else {
    console.log("Saved one product");
  }
});
{% endhighlight %}
