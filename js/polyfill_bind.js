let name={
    firstname:"Sowjanya",
    lastname:"G"
}

function printFullName(hometown,state){
   console.log(this.firstname + " " + this.lastname + " from " + hometown + ", " + state);
}

//This is traditiinal way of binding 
let printName=printFullName.bind(name,"Udupi")
printName("Karnataka"); // Outputs: Sowjanya G from Udupi, Karnataka


//Creating own bind function

Function.prototype.myBind=function(...args){
    let obj = this; // 'this' refers to the function being bound
    return function(){
        obj.call(args[0])
    }
}

let printName2=printFullName.myBind(name);
printName2();


//using argument in myBind

Function.prototype.myBind1=function(...args){
    let obj = this; // 'this' refers to the function being bound
    params=args.slice(1); // Extracting additional parameters
    return function(){
        obj.apply(args[0],params);
    }
}

let printName3=printFullName.myBind1(name,"Udupi");
printName3(); // Outputs: Sowjanya G from Udupi

//pass argument in invoked function

Function.prototype.myBind2=function(...args){
    let obj=this; // 'this' refers to the function being bound
    params=args.slice(1); // Extracting additional parameters
    return function(...args2){
         obj.apply(args[0],[...params,...args2]);
    }
}

let printName4=printFullName.myBind2(name,"Udupi");
printName4("Karnataka"); // Outputs: Sowjanya G from Udupi, Karnataka