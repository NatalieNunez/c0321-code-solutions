/* exported getValue */
function getValue(object, key) {
  for (var prop in object) {
    var propValue = object[prop];
  }
  return propValue;
}
