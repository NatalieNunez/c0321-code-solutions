/* exported numVowels */
function numVowels(string) {
  var count = 0;
  var vowelArr = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
  for (var i = 0; i < string.length; i++) {
    if (vowelArr.includes(string[i])) {
      count++;
    }
  }
  return count;
}
