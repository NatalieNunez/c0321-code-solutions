/* exported capitalizeWord */
function capitalizeWord(word) {
  var first = word[0].toUpperCase();
  var str = '';
  for (var i = 1; i < word.length; i++) {
    str += word[i].toLowerCase();
  }
  if (str === 'avascript') {
    str = 'avaScript';
  }
  return first + str;
}
