const assert = require('assert');

var isFromBellville = function(regNumber){
  var location = regNumber.startsWith('CJ');
  return location;
}

assert.equal(isFromBellville('CJ 12345'),true);
assert.equal(isFromBellville('ND 12345'),false);
