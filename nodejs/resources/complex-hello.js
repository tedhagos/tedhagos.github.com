var http = require('http');
var path = require('path');
var fs = require('fs');
var url = require('url');

var pages = {
  '': "Landing page",
  about: 'About',
  foo: "Yeah Foo",
  goo: "Yeah Goo",
  xoo: callxoo()
};

function callxoo(){
  var retval = {
    empname: "Ted Hagos",
    email: "tedhagos@gmail.com"
  };
  // I cannot return the bare JS object because
  // the HTTP object of node will throw an error.
  // First type argument must be a string or buffer
  return JSON.stringify(retval);
  
}

http.createServer(
  function(request,response){
    
    var lookup = path.basename(decodeURI(request.url));
    var thedata = null;
    var temp = null;
    
    // Check first if we are looking for an HTML file
    fs.exists(lookup, function(exists){
      if(exists){
        fs.readFile(lookup, 'utf-8', function(woops, filecontent){
          if(!woops) {
            //console.log(filecontent);
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(filecontent);
          }
        });       
      }
      else {
        console.log("inside the else");
      }
    });
        
    if (pages[lookup] != undefined){
      console.log("inside pages");
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(pages[lookup]);
    }           
  }
).listen(8080);