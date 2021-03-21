/* exported ransomCase */
function ransomCase(string) {
  var ranStr = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ranStr += string[i].toLowerCase();
    } else {
      ranStr += string[i].toUpperCase();
    }
  }
  return ranStr;
}
