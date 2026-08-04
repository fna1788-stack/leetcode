/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  let a = address.replaceAll(".","[.]")
  return a
};