let name={
    firstname:"Sowjanya",
    lastname:"G",
    printFullName: function() {
        console.log(this.firstname + " " + this.lastname)
    }
}

name.printFullName()

let name2={
    firstname:"Sachin",
    lastname:"Kumar"
}

name.printFullName.call(name2)

// real time similar ex using call

let name3={
    firstname:"John",
    lastname:"Doe",
}

let name4={
    firstname:"Jane",
    lastname:"Smith",
}

let printName=function(){
    console.log(this.firstname + " " + this.lastname);
}

printName.call(name3); // John Doe
printName.call(name4); // Jane Smith

// first argument is always the context (the object you want to refer to with 'this') , next arguments are the parameters to the function if any

printDetails.call(name3,"Mumbai");

function printDetails(city) {
    console.log(this.firstname + " " + this.lastname + " from " + city);
}

// Using apply

printDetails.apply(name3,["Mumbai"]);

//using bind

let printMyDetails = printDetails.bind(name3, "Mumbai");
console.log(printMyDetails); // function bound to name3 with "Mumbai" as argument
printMyDetails(); // John Doe from Mumbai
