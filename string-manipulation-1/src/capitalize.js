/* exported capitalize */
function capitalize(word) {
  var firstChar = word.charAt(0).toUpperCase();
  var str = '';
  for (var i = 1; i < word.length; i++) {
    str += word[i].toLowerCase();
  }
  return firstChar + str;
}
