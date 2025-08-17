let user={
    name:"Sowjnaya",
    address:{
        personal:{
            city:"Udupi",
            state:"Karnataka"
        },
        office:{
            city:"Bangalore",
            state:"Karnataka",
            area:{
                 landmark:"Whitefield",
            }
        }
    }
}

let finalObj={};

function recursiveCopy(obj, parent){
    for(let key in obj){
        if(typeof obj[key]=== 'object' && obj[key] !== null){
            recursiveCopy(obj[key],parent+"_"+key);
        }
        else{
            finalObj[parent+"_"+key]=obj[key];
        }
    }
}

recursiveCopy(user, "user");
console.log(finalObj);

// The above code defines a user object with nested properties and a function to recursively copy its properties into a flat object.
// The function `recursiveCopy` traverses the object and constructs a new object with keys that represent the path to each value, separated by underscores.
// Finally, it logs the flattened object to the console.