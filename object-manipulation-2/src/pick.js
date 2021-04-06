/* exported pick */
function pick(source, keys) {
  var newObject = {};
  var sourceArr = Object.entries(source);
  for (var i = 0; i < sourceArr.length; i++) {
    for (var k = 0; k < 1; k++) {
      if (keys.includes(sourceArr[i][k])) {
        newObject.sourceArr[i][k] = sourceArr[i][1];
      }
    }
  }
  // for (var i = 0; i < sourceArr.length; i++) {
  //   if (keys.includes(sourceArr[i][0])) {
  //     newObject.sourceArr[i][0] = sourceArr[i][1];
  //   }
  // }
  // console.log('source:', source);
  // console.log('sourceArr:', sourceArr[0][0]);
  // console.log('keys:', keys);
  return newObject;
}

// make a new object to contain the values
// look at each value in the array and check if its present in source
// if its present, put that key value pair in the new object
// return new object

// loop through sourceArr
// if keys includes sourceArr[i][0]
// newObject.sourceArr[i][0] = sourceArr[i][1]

// for (var i = 0; i < sourceArr.length; i++) {
//   for (var k = 0; k < 1; k++) {
//     if (keys.includes(sourceArr[i][k])) {
//       newObject.sourceArr[i][k] = sourceArr[i][1];
//  }
// }
