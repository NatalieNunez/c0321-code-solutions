/* exported reverseWord */
function reverseWord(word) {
  var reverseArr = [];
  for (var i = word.length - 1; i >= 0; i--) {
    reverseArr.push(word[i]);
  }
  return reverseArr.join('');
}
