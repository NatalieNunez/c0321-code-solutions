/* exported reverseWords */
function reverseWords(string) {
  var charArray = string.split('');
  var reversePhrase = [];
  for (var i = charArray.length - 1; i >= 0; i--) {
    reversePhrase.push(charArray[i]);
  }
  var newStr = reversePhrase.join('');
  var wordArray = newStr.split(' ');
  var reverseWord = [];
  for (var k = wordArray.length - 1; k >= 0; k--) {
    reverseWord.push(wordArray[k]);
  }
  var finalString = reverseWord.join(' ');
  return finalString;
}

// parameter: string
// return string with characters of words reversed
// string split character, array of each character
// create a new array variable
// split character array, reverse loop through push each into the new array
// new reversed array, join
// split new string by spaces
// create another empty array []
// reverse loop new array
// push each index into empty array
// join that new array
// return that string
