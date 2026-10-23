/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {

let a;
 a=command.replaceAll("()","o")
a=a.replaceAll("(al)","al")
 
  return  a
 
  
};