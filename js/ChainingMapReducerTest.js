
const users= [
    {name:"Sowjanya",age:27},
    {name:"SK",age:56},
    {name:"KK",age:29},
    {name:"KK",age:27},
]


//find out all users firstname whoes age is less than 30

const output=users.filter((user)=>user.age<30).reduce((acc,curr)=>{
     acc.push(curr.name);
     return acc;
},[])
    
const output1=users.filter((user)=>user.age<30).map((user)=>user.name)

const output2=users.reduce((acc,curr)=>{
    if(curr.age<30){
       acc.push(curr.name)
    }
    return acc;

},[])

console.log(output);
console.log(output1)
console.log(output2)

//all give same result