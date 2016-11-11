const assert = require('assert');
var countRegNumber = function(string){
  var list = string.split(",");
  console.log(list.length);
  return list.length
}

assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'),3);
