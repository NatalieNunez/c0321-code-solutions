/* exported findIndex */
function findIndex(array, value) {
  var index = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      index = i;
      return index;
    } else {
      index = -1;
    }
  }
  return index;
}
