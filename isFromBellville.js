const assert = require('assert');

var isFromBellville = function(regNumber){
  var location = regNumber.startsWith('CY');
  return location;
}

assert.equal(isFromBellville('CY 12345'),true);
assert.equal(isFromBellville('CJ 12345'),false);
