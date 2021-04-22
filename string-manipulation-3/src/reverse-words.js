/* exported reverseWords */
function reverseWords(string) {
  var charArray = string.split('');
  var reversePhrase = charArray.reverse();
  var newStr = reversePhrase.join('');
  var wordArray = newStr.split(' ');
  var reverseWord = wordArray.reverse();
  var finalString = reverseWord.join(' ');
  return finalString;
}
