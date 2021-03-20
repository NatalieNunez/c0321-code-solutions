/* exported getWords */
function getWords(string) {
  var arr = [];
  if (string === '') {
    arr = [];
  } else {
    arr = string.split(' ');
  }
  return arr;
}
