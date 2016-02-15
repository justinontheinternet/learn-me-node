var myModule = require('./6_module');
var dirPath = process.argv[2];
var extension = process.argv[3];


myModule(dirPath, extension, function(err, list) {

  list.forEach(function (i) {
    console.log(i);
  });

});




// var filterFn = require('./solution_filter.js')
// var dir = process.argv[2]
// var filterStr = process.argv[3]

// filterFn(dir, filterStr, function (err, list) {
//   if (err)
//     return console.error('There was an error:', err)

//   list.forEach(function (file) {
//     console.log(file)
//   })
// })