/* exported reverseWord */
function reverseWord(word) {
  var reverseStr = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverseStr += word[i];
  }
  return reverseStr;
}
