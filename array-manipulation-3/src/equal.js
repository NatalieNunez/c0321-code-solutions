/* exported equal */
function equal(first, second) {
  const firstString = JSON.stringify(first);
  const secondString = JSON.stringify(second);
  if (firstString === secondString) {
    return true;
  } else {
    return false;
  }
}
