var funcOne = function(){
    console.log('funcOne!');
};

var execFunc = function(f){
    f();
};

//use function as a parameter
execFunc(funcOne);
