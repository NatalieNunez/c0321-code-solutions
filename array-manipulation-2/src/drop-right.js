/* exported dropRight */
function dropRight(array, count) {
  var arr = [];
  var dropIndex = array.length - count;
  if (count > array.length) {
    return [];
  }
  for (var i = 0; i < dropIndex; i++) {
    arr.push(array[i]);
  }
  return arr;
}
