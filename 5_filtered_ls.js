var fs = require('fs');
var path = require('path');
var filepath = process.argv[2];
var extension = '.' + process.argv[3];

// 'list' is an array of filename strings
fs.readdir(filepath, function(err, list){
  if (!err) {
    for (i = 0; i < list.length; i++) {
      var file = list[i];
      if (file.match(extension)) {
        console.log(file);
      }
    }
  }
});