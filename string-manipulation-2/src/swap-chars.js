/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var newStr = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newStr += string[secondIndex];
    } else if (i === secondIndex) {
      newStr += string[firstIndex];
    } else {
      newStr += string[i];
    }
  }
  return newStr;
}
