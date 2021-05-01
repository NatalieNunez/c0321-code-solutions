/* exported titleCase */
var obj = {
  specialCase: [
    'JavaScript',
    'API'
  ],
  minorWords: ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to']
};

function titleCase(title) {
  const titleArray = title.split(' ');
  let string = '';
  const arr = [];
  for (let i = 0; i < titleArray.length; i++) {
    if (obj.minorWords.includes(titleArray[i].toLowerCase()) && titleArray[i] !== titleArray[0]) {
      string += titleArray[i].toLowerCase();
    } else {
      string += titleArray[i][0].toUpperCase();
    }
    for (let x = 1; x < titleArray[i].length; x++) {
      if (obj.minorWords.includes(titleArray[i].toLowerCase())) {
        string = titleArray[i].toLowerCase();
      } else {
        string += titleArray[i][x].toLowerCase();
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
