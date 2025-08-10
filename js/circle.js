const radius=[2,3,4,5]

function calculateAreaOfCircle(radius){
    let output=[];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI*radius[i]*radius[i]);
       
    }
     return output;
}

console.log(calculateAreaOfCircle(radius))

function calculateCircumferenceOfCircle(radius){
    let output=[];
    for(let i=0;i<radius.length;i++){
        output.push(2*Math.PI*radius[i]);
    }
    return output;
}

console.log(calculateCircumferenceOfCircle(radius))

function calculateDiameterOfCircle(radius){
    let output=[];
    for(let i=0;i<radius.length;i++){
        output.push(2*radius[i]);
    }
    return output;
}

console.log(calculateDiameterOfCircle(radius))