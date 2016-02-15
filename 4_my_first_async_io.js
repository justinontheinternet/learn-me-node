var fs = require('fs');
var filepath = process.argv[2];

// because readFile is asynchronus, all manipulation must be done in the callback
fs.readFile(filepath, function(err, data){
  if (!err) {
    var bufferString = data.toString();
    console.log(bufferString.split('\n').length - 1)
  }
});