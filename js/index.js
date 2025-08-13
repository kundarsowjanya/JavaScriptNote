//Curring can be done in 2 ways:
//1. Using bind
//2. Using closure




let multiply=function(x,y){
    console.log(x*y);
}

//Using bind to create a curried function

let mutiPlyBYTwo= multiply.bind(this,2);;   // x is 2
mutiPlyBYTwo(5); // Outputs: 10   //y is 5


//uing closure to create a curried function

let cuuriedMultiply=function(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyByThree = cuuriedMultiply(3);
multiplyByThree(4); // Outputs: 12   //y is 4

