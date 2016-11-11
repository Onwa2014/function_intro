var name = "David Blankit";

var favSport = function(){
    //console.log(name);
    var favouriteSport = "Soccer";
    console.log(name + "'s favourite sport is " + favouriteSport);
};

//this will print David's favourite sport
favSport();

//this should now be undefined
// favouriteSport is only visible inside the `favSport` function.

console.log(favouriteSport);
