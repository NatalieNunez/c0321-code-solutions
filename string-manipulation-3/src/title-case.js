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
  const titleArray = title.split(' ');
  let string = '';
  const arr = [];
  for (let i = 0; i < titleArray.length; i++) {
    if (obj.minorWords.includes(titleArray[i].toLowerCase()) && titleArray[i]) {
      string = titleArray[i].toLowerCase();
    } else {
      string += titleArray[i][0].toUpperCase();
    }
    for (let x = 1; x < titleArray[i].length; x++) {
      if (obj.minorWords.includes(titleArray[i].toLowerCase())) {
        string = titleArray[i].toLowerCase();
      } else if (titleArray[i][x - 1] !== '-') {
        string += titleArray[i][x].toLowerCase();
      } else {
        string += titleArray[i][x].toUpperCase();
      }
    }
    for (let z = 0; z < obj.specialCase.length; z++) {
      if (titleArray[i].toLowerCase() === obj.specialCase[z].toLowerCase()) {
        string = obj.specialCase[z];
      }
    }
    arr.push(string);
    string = '';
  }
  const titleCaseString = arr.join(' ');
  return titleCaseString;
}
