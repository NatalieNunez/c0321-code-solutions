/* exported take */
function take(array, count) {
  var takeArr = [];
  if (count > array.length) {
    return [];
  }
  for (var i = 0; i < count; i++) {
    takeArr.push(array[i]);
  }
  return takeArr;
}
