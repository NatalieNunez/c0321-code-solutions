/* exported takeRight */
function takeRight(array, count) {
  var newArr = [];
  if (count >= array.length) {
    return array;
  }
  for (var i = array.length - count; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
