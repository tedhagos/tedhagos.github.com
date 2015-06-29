var http=require('http')

app=http.createServer(sayHi);

function sayHi(request, response) {
  response.writeHead(200, {'Context-Type' : 'text/plain'});
  response.end("Hello Node\n");
}

app.listen(8000, '127.0.0.1');
console.log("Web Server has started");

