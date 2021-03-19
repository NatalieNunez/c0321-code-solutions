/* exported filterOutStrings */
function filterOutStrings(values) {
  var noStringsArray = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      noStringsArray.push(values[i]);
    }
  }
  return noStringsArray;
}
