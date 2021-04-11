/* exported isPalindromic */
function isPalindromic(string) {
  var reverseArray = [];
  for (var i = string.length - 1; i >= 0; i--) {
    reverseArray.push(string[i]);
  }
  var newString = reverseArray.join('');
  if (newString === string) {
    return true;
  } else {
    return false;
  }
}
