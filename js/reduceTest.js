const users= [
    {name:"Sowjanya",age:27},
    {name:"SK",age:56},
    {name:"KK",age:29},
    {name:"KK",age:27},
]

const output= users.reduce((acc,curr)=>{
     if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age]  
     }
     else{
        acc[curr.age]=1
     }
     return acc;
},{})

console.log(output);

