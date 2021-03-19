/* exported capitalize */
function capitalize(word) {
  var capitalStr = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      capitalStr += word[i].toUpperCase();
    } else {
      capitalStr += word[i].toLowerCase();
    }
  }
  return capitalStr;
}
