const assert = require('assert');

var yearAgo = function(year){
  var inputYear = new Date(year);
  var years =new Date().getFullYear()- inputYear.getFullYear();
  return years;
}


assert.equal(yearAgo("July 21, 1983 01:15:00"),33);
assert.equal(yearAgo("Nov 08, 2010 01:15:00"),6);
