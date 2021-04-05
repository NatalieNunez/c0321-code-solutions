/* exported chunk */
function chunk(array, size) {
  var chunkArray = [];
  for (var i = 0; i < array.length; i++) {
    var lastChunk = chunkArray[chunkArray.length - 1];
    if (lastChunk === undefined || lastChunk.length === size) {
      chunkArray.push([array[i]]);
    } else {
      lastChunk.push(array[i]);
    }
  }
  return chunkArray;
}
