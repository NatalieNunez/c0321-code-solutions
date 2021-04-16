/* exported reverseWords */
function reverseWords(string) {
  var array = string.split(' ');
  // console.log('array:', array);
  // var reverse = '';
  for (var i = 0; i < array.length; i++) {
    for (var k = array[i].length - 1; k >= 0; k--) {
      // reverse += array[i][k];
      // console.log(reverse);
      // console.log(array);
    }
  }
}
