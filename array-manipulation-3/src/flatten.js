/* exported flatten */
function flatten(array) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      array[i].join(',');
    }
  }
  return array;
}
