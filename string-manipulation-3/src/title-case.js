/* exported titleCase */
function titleCase(title) {
  var obj = {
    specialCase: [
      'JavaScript',
      'JavaScript:',
      'API'
    ],
    minorWords: ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to']
  };
  const lowercaseString = title.toLowerCase();
  const lowercaseArr = lowercaseString.split(' ');
  for (let i = 0; i < lowercaseArr.length; i++) {
    for (let z = 0; z < obj.specialCase.length; z++) {
      if (lowercaseArr[i].toLowerCase() === obj.specialCase[z].toLowerCase()) {
        lowercaseArr[i] = obj.specialCase[z];
      }
    }
    if (!obj.minorWords.includes(lowercaseArr[i]) || lowercaseArr[i - 1] === 'JavaScript:') {
      lowercaseArr[i] = lowercaseArr[i].charAt(0).toUpperCase() + lowercaseArr[i].slice(1);
    }
    for (let x = 0; x < lowercaseArr[i].length; x++) {
      if (lowercaseArr[i][x - 1] === '-') {
        lowercaseArr[i] = lowercaseArr[i].slice(0, x) + lowercaseArr[i].charAt(x).toUpperCase() + lowercaseArr[i].slice(x + 1);
      }
    }
  }
  return lowercaseArr.join(' ');
}
