var foundIndex = 0;

// The second argument/parameter is expected to be a function

var findWaldo = function(element, index) {
   if (element === "Waldo") {
      foundIndex = index;
      return actionWhenFound();   // execute callback
    }
}

function actionWhenFound() {
  console.log("Found Waldo at index " + foundIndex + "!");
}

["Alice", "Bob", "Waldo", "Winston"].forEach(findWaldo);