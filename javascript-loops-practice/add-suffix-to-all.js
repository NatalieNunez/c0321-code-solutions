/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var suffixArr = [];
  for (var i = 0; i < words.length; i++) {
    suffixArr.push(words[i] + suffix);
  }
  return suffixArr;
}
