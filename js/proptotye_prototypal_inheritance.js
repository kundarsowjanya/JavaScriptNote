let arr=["Sowjanya","Sowmya"]

let obj={
    name:"Sowjanya",
    age:27,
    city:"Udupi",
    getIntro:function(){
       console.log(`Hi, I am ${this.name} from ${this.city}. I am ${this.age} years old.`);
    }
}

let obj2={
    name:"Sowj",
}

//never do this

obj2.__proto__=obj;

Function.prototype.mybind=function(...args){
    console.log("hhh")
}

function fun(){
    
}