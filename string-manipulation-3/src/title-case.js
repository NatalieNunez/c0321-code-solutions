/* exported titleCase */
// parameter: string
// return: string with original title/casing
// split string by words .split(' ')
// words three letters or less: lowercase unless its first word
//   put given words in array and check if the string includes
//     - if itss the first index, capitalize first letter
//     - otherwise toLowerCase()
// Special case words in an array
// var array = ['JavaScript', 'API'];
// var str = 'javaScript is cool, apI'; you know what to do ;)

// string that is now an array, nested for loop
//   if index is a -, capitalize next index
//   if word is not included in minor words array, capitalize first letter
//   if word IS included in minor words array, lowercase all letters

var obj = {
  specialCase: [
    'JavaScript',
    'API'
  ],
  minorWords: ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to']
};

function titleCase(title) {
  var titleArray = title.split(' ');
  // console.log('titleArray:', titleArray);
  for (var i = 0; i < titleArray.length; i++) {
    if (obj.minorWords.includes(titleArray[i].toLowerCase()) && !titleArray[i] !== titleArray[0]) {
      titleArray[i] = titleArray[i].toLowerCase();
    }
  }
}
// console.log('specialCase array:', obj.specialCase);
// console.log('minorWords array:', obj.minorWords);

// for (var i = 0; i < titleArray.length; i++) {
//   for (var k = 0; k < titleArray[i].length; k++) {
//     if ()
//   }
// }
