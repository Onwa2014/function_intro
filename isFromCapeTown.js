const assert = require('assert');

var isFromCapeTown = function(regNumber){
  var location = regNumber.startsWith('CA');
  return location;
}

assert.equal(isFromCapeTown('CA 12345'),true);
assert.equal(isFromCapeTown('CJ 12345'),false);
