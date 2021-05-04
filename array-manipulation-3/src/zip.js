/* exported zip */
function zip(first, second) {
  const zipArray = [];
  for (let i = 0; i < first.length; i++) {
    if (first[i] && second[i]) {
      const arr = [];
      arr.push(first[i]);
      arr.push(second[i]);
      zipArray.push(arr);
    }
  }
  return zipArray;
}
