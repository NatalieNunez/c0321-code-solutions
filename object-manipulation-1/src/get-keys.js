/* exported getKeys */
function getKeys(object) {
  var keysArray = [];
  for (var key in object) {
    keysArray.push(key);
  }
  return keysArray;
}
