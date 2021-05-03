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
    // const lastIndex = lowercaseArr[i - 1];
    if (!obj.minorWords.includes(lowercaseArr[i]) || lowercaseArr[i - 1] === 'Javascript:') {
      lowercaseArr[i] = lowercaseArr[i].charAt(0).toUpperCase() + lowercaseArr[i].slice(1);
    }
    for (let x = 0; x < lowercaseArr[i].length; x++) {
      if (lowercaseArr[i][x - 1] === '-') {
        lowercaseArr[i] = lowercaseArr[i].slice(0, x) + lowercaseArr[i].charAt(x).toUpperCase() + lowercaseArr[i].slice(x + 1);
      }
    }
    for (let z = 0; z < obj.specialCase.length; z++) {
      if (lowercaseArr[i].toLowerCase() === obj.specialCase[z].toLowerCase()) {
        lowercaseArr[i] = obj.specialCase[z];
      }
    }
  }
  return lowercaseArr.join(' ');

  // const titleArray = title.split(' ');
  // let string = '';
  // const arr = [];
  // for (let i = 0; i < titleArray.length; i++) {
  //   // const lastIndex = titleArray[i - 1].toLowerCase();
  //   if (obj.minorWords.includes(titleArray[i].toLowerCase())) {
  //     string = titleArray[i].toLowerCase();
  //   } else {
  //     string += titleArray[i][0].toUpperCase();
  //   }
  //   for (let x = 1; x < titleArray[i].length; x++) {
  //     // const lastChar = titleArray[i][x].length - 1;
  //     if (obj.minorWords.includes(titleArray[i].toLowerCase())) {
  //       string = titleArray[i].toLowerCase();
  //     } else if (titleArray[i][x - 1] !== '-') {
  //       string += titleArray[i][x].toLowerCase();
  //     } else {
  //       string += titleArray[i][x].toUpperCase();
  //     }
  //   }
  //   for (let z = 0; z < obj.specialCase.length; z++) {
  //     if (titleArray[i].toLowerCase() === obj.specialCase[z].toLowerCase()) {
  //       string = obj.specialCase[z];
  //     }
  //   }
  //   arr.push(string);
  //   string = '';
  // }
  // const titleCaseString = arr.join(' ');
  // return titleCaseString;
}
