/* exported flatten */
function flatten(array) {
  const flatArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      for (let x = 0; x < array[i].length; x++) {
        flatArray.push(array[i][x]);
      }
    } else {
      flatArray.push(array[i]);
    }
  }
  return flatArray;
}
