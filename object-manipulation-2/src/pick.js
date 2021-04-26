/* exported pick */
function pick(source, keys) {
  var newObject = {};
  var sourceArr = Object.entries(source);
  for (var i = 0; i < sourceArr.length; i++) {
    if (keys.includes(sourceArr[i][0]) && sourceArr[i][1] !== undefined) {
      var key = sourceArr[i][0];
      var value = sourceArr[i][1];
      newObject[key] = value;
    }
  }
  return newObject;
}
