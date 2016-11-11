const assert = require('assert');

function getDay(date){
  var inputDay = new Date(date);
  var day = inputDay.getDay();
  return day;
}
assert.equal(getDay('April 4, 2010 01:15:00'),0);
