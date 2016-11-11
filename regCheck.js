const assert = require('assert');

var regCheck = function(regNum, location){
  var results = regNum.endsWith(location);
  console.log(results);
  return results;
}
assert.equal(regCheck('HKK 1234 MP','GP'), true);
assert.equal(regCheck('CY 1234','CY'), false);
assert.equal(regCheck('HKK 1234 GP','GP'), true);
