function compareArrays(arr1, arr2) {

  return arr1.length === arr2.length && arr1.every((item, i) => item === arr2[i]);
}

// Удлинённое написание решения первой задачи

//function compareArrays(arr1, arr2) {
  //let result;

  //if (arr1.length === arr2.length && arr1.every(function(item, i) {
    //return item === arr2[i];
  //})) {
    //result = true;
  //} else {
    //result = false;
  //}

  //return result;
//}

function advancedFilter(arr) {

  const resultArr = arr.filter((number) => number > 0).filter((number) => number % 3 === 0).map((number) => number * 10);

  return resultArr; // array
}
