/* exported isPalindromic */
function isPalindromic(string) {
  var strSplit = string.split('');
  var newArr = [];
  var reverseArray = [];

  for (var i = 0; i < strSplit.length; i++) {
    if (strSplit[i] !== ' ') {
      newArr.push(strSplit[i]);
    }
  }

  for (var k = newArr.length - 1; k >= 0; k--) {
    reverseArray.push(newArr[k]);
  }

  var newString = newArr.join('');
  var reverseString = reverseArray.join('');

  if (newString === reverseString) {
    return true;
  } else {
    return false;
  }
}
