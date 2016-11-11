const assert = require('assert');
 function dayToday(){
   var today = new Date().getDay();
   return today
 }
assert.equal(dayToday(),2);
