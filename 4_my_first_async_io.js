var fs = require('fs');
var filepath = process.argv[2];

var contents = fs.readFile(filepath, function(err, data){
  if (!err) {
    return data;
  }
});

console.log(contents.toString());