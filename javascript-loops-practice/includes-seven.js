/* exported includesSeven */
function includesSeven(array) {
  var containsSeven;
  var sevenCount = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      sevenCount++;
    }
  }
  if (sevenCount > 0) {
    containsSeven = true;
  } else {
    containsSeven = false;
  }
  return containsSeven;
}
