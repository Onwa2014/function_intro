const assert = require('assert');

var isFromLimpopo = function(regNumber){
  var location = regNumber.endsWith('L');
  return location;
}

assert.equal(isFromLimpopo('DRT 122 L'),true);
assert.equal(isFromLimpopo('CJ 12345'),false);
