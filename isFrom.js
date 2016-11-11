const assert = require('assert');

var isFrom = function(regNum, loc){
  var results = regNum.startsWith(loc);
  console.log(results);
  return results;
}
assert.equal(isFrom('CY 1234','CY'), true);
assert.equal(isFrom('HKK 1234 GP','GP'), false);
