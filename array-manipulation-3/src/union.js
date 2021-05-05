/* exported union */
function union(first, second) {
  const unionArray = [];
  for (let i = 0; i < first.length; i++) {
    unionArray.push(first[i]);
  }
  for (let x = 0; x < second.length; x++) {
    if (!unionArray.includes(second[x])) {
      unionArray.push(second[x]);
    }
  }
  return unionArray;
}
