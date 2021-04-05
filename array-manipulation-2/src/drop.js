/* exported drop */
function drop(array, count) {
  var dropArr = [];
  if (count >= array.length) {
    return [];
  }
  for (var i = count; i < array.length; i++) {
    dropArr.push(array[i]);
  }
  return dropArr;
}
