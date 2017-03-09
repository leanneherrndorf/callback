//Implement your own version of the build-in array map function

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
