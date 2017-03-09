var array = [10, 2, 5, 1, 9];
var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

function compareNumbers(a, b) {
  return a - b;
}

var sorted = array.sort(compareNumbers);

students.sort(function(a, b){
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();
  if(nameA < nameB) {
    return -1;
  }
  if(nameA > nameB) {
    return 1;
  }
  var diff = compareNumbers(a.age, b.age);

  if(diff > 0){
    return -1;
  }
  if(diff < 0){
    return 1;
  }
  return 0;

});

//Testing
//console.log(sorted);
//console.log(students);