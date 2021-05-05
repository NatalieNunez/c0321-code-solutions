/* exported difference */
function difference(first, second) {
  const diffArray = [];
  for (let i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      diffArray.push(first[i]);
    }
  }
  for (let x = 0; x < second.length; x++) {
    if (!first.includes(second[x])) {
      diffArray.push(second[x]);
    }
  }
  return diffArray;
}
