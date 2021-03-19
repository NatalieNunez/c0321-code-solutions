/* exported countdown */
function countdown(number) {
  var numArray = [];
  while (number >= 0) {
    numArray.push(number);
    number--;
  }
  return numArray;
}
