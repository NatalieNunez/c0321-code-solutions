/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var firstArr = firstString.split('');
  var secondArr = secondString.split('');
  for (var i = 0; i < firstArr.length; i++) {
    if (firstArr[i] === ' ') {
      firstArr.splice(i, 1);
    }
  }
  for (var k = 0; k < secondArr.length; k++) {
    if (secondArr[k] === ' ') {
      secondArr.splice(k, 1);
    }
  }

  var firstSorted = firstArr.sort();
  var secondSorted = secondArr.sort();
  var firstSortedStr = firstSorted.join('');
  var secondSortedStr = secondSorted.join('');

  if (firstSortedStr === secondSortedStr) {
    return true;
  } else {
    return false;
  }
}
