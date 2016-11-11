const assert = require('assert');

var isWeekDay = function(day){
  var today = !day.startsWith('S');
  return today;
}

assert.equal(isWeekDay('Sunday'),false);
assert.equal(isWeekDay('Wednesday'),true);
