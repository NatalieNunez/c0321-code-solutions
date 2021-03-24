/* exported capitalizeWords */
function capitalizeWords(string) {
  var first = string[0].toUpperCase();
  var full = '';
  for (var i = 1; i < string.length; i++) {
    if (string[i - 1] === ' ') {
      full += string[i].toUpperCase();
    } else {
      full += string[i].toLowerCase();
    }
  }
  return first + full;
}
