/* exported defaults */
function defaults(target, source) {
  var sourceArray = Object.entries(source);
  for (var i = 0; i < sourceArray.length; i++) {
    var sourceKey = sourceArray[i][0];
    var sourceValues = sourceArray[i][1];
    if (target[sourceKey] === undefined) {
      target[sourceKey] = sourceValues;
    }
  }
}
