var fs = require('fs');


console.log(read("file1.js"))


function read(filename) {
  var file;
  fs.readFile(filename, 'utf-8',function(err, data){
    file = data;
    console.log(data);
    return file; // this does not work, because of callbacks
    // TASK: read promises
  });
}