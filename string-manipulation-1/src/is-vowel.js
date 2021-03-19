/* exported isVowel */
function isVowel(char) {
  var vowelArray = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
  if (vowelArray.includes(char)) {
    return true;
  } else {
    return false;
  }
}
