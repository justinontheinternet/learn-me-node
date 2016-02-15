var fs = require('fs');


module.exports = function(dir, extension, callback){
  fs.readdir(dir, function(err, list){
    if (err) 
      return callback(err);
    
      var ext = '.' + extension;

      var files = list.filter(function(file){
        return file.indexOf(ext) !== -1;
      });

    callback(null, files);
  });

};



// var fs = require('fs')
// var path = require('path')

// module.exports = function (dir, filterStr, callback) {

//   fs.readdir(dir, function (err, list) {
//     if (err)
//       return callback(err)

//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })

//     callback(null, list)
//   })
// }

