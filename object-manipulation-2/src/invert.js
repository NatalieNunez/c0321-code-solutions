/* exported invert */
function invert(source) {
  var invertedObj = {};
  for (var key in source) {
    var property = key;
    var value = source[key];
    invertedObj[value] = property;
  }
  return invertedObj;
}
