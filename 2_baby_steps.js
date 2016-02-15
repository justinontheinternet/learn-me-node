var array = process.argv;
var sum = 0;

for ( var i = 2; i < array.length; i++ ) {
  sum += array[i];
}

return sum;