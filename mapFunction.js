//Implement your own version of the build-in array map function
/*map function provides a callback function once for each element in an array, in order,
  and constructs a new array from the results.callback
*/

function map(array, callback){
  var newArray =[];
  array.forEach(function(x){
    newArray.push(callback(x));
  });
  return newArray;

}

//Testing
var words = ["ground", "control", "to", "major", "tom"];

var length = map(words, function(word) {
  return word.length;
});

//console.log(length);
