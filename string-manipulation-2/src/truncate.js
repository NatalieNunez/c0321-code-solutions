/* exported truncate */
function truncate(length, string) {
  var trunStr = string.slice(0, length);
  var ell = '...';
  return trunStr + ell;
}
