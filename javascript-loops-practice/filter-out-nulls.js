/* exported filterOutNulls */
function filterOutNulls(values) {
  var noNullsArray = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      noNullsArray.push(values[i]);
    }
  }
  return noNullsArray;
}
