/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var first = string[secondIndex];
  var second = string[firstIndex];
  var firstStr = string.replace(string[firstIndex], first);
  var swapStr = firstStr.replace(firstStr[secondIndex], second);
  return swapStr;
}
