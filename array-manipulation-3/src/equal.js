/* exported equal */
function equal(first, second) {
  const firstString = first.join(' ');
  const secondString = second.join(' ');
  if (firstString === secondString) {
    return true;
  } else {
    return false;
  }
}
