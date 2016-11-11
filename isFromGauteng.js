const assert = require('assert');

var isFromGauteng = function(regNumber){
  var location = regNumber.endsWith('GP');
  return location;
}

assert.equal(isFromGauteng('DR 12 TY GP'),true);
assert.equal(isFromGauteng('CJ 12345'),false);
