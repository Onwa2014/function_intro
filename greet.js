const assert = require('assert');
var greet = function(name){
  console.log("Hi" +" " +name +","+" "+"Unjani?");
  return "Hi" +" " +name +","+" "+"Unjani?"
}

assert.equal(greet("Asiphe"), 'Hi Asiphe Unjani?')
