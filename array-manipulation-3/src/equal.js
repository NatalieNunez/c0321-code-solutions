/* exported equal */
function equal(first, second) {
  let result;
  if (first.length === second.length) {
    for (let i = 0; i < first.length; i++) {
      if (first[i] === second[i]) {
        result = true;
      } else {
        result = false;
        return result;
      }
    }
  } else {
    result = false;
    return result;
  }
  return result;
}
