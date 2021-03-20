/* exported getValues */
function getValues(object) {
  var valuesArray = [];
  for (var key in object) {
    valuesArray.push(object[key]);
  }
  return valuesArray;
}
