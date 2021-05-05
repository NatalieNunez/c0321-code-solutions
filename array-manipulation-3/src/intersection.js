/* exported intersection */
function intersection(first, second) {
  const intersectArray = [];
  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      intersectArray.push(first[i]);
    }
  }
  return intersectArray;
}
