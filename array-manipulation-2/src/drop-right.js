/* exported dropRight */
function dropRight(array, count) {
  var arr = [];
  if (count > array.length) {
    return [];
  }
  for (var i = 0; i < array.length - 1; i++) {
    arr.push(array[i]);
  }
  return arr;
}
