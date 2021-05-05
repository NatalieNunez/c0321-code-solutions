/* exported zip */
function zip(first, second) {
  const length = Math.min(first.length, second.length);
  const zipArray = [];
  for (let i = 0; i < length; i++) {
    const arr = [];
    arr.push(first[i]);
    arr.push(second[i]);
    zipArray.push(arr);
  }
  return zipArray;
}
