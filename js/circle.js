const radius=[2,3,4,5]

//calculate area of circle using a function
function calculateAreaOfCircle(radius){
    let output=[];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI*radius[i]*radius[i]);
       
    }
     return output;
}

console.log(calculateAreaOfCircle(radius))

//calculate circumference of circle using a function

function calculateCircumferenceOfCircle(radius){
    let output=[];
    for(let i=0;i<radius.length;i++){
        output.push(2*Math.PI*radius[i]);
    }
    return output;
}

console.log(calculateCircumferenceOfCircle(radius))

//calculate diameter of circle using a function

function calculateDiameterOfCircle(radius){
    let output=[];
    for(let i=0;i<radius.length;i++){
        output.push(2*radius[i]);
    }
    return output;
}

console.log(calculateDiameterOfCircle(radius))



// let's use the same logic to calculate area of circle using a function and passing the logic as a parameterand creare generic function

const area= function(radius){
    return Math.PI*radius*radius;
}

const circumference= function(radius){
    return 2*Math.PI*radius;
}

const diameter= function(radius){
    return 2*radius;
}


const calculate=function(radius,logic){
    let output=[];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]))
    }
    return output;
}


console.log(calculate(radius,area))
console.log(calculate(radius,circumference))
console.log(calculate(radius,diameter))