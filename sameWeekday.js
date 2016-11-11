const assert = require('assert');

function sameWeekday(dt1,dt2){
  var day1 = new Date(dt1);
  var day2 = new Date(dt2)
  var sameDay = day2.getDay() == day1.getDay(day2)
  return sameDay;
}
assert.equal(sameWeekday('April 4, 2010 01:15:00','October 30, 2016 01:15:00'),true);
assert.equal(sameWeekday('April 4, 2010 01:15:00','November 8, 2010 01:15:00'),false);
