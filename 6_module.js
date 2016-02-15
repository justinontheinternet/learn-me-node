var fs = require('fs');
var path = require('path');
var filepath = process.argv[2];
var extension = '.' + process.argv[3];

fs.readdir(, function(err, list))