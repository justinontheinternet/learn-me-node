// requiring filesystem operation node
var fs = require('fs');
// get the file path argument from the command line
// ( index 1 is always node, index 2 is always path of this file)
var file = process.argv[2];

// buffer is a representation of the file contents
var buffer = fs.readFileSync(file);
// convert it to a string
var string = buffer.toString();

// count how many lines there are, -1 because no line after last \n
console.log(string.split('\n').length - 1);