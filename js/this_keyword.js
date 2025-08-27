"use strict";

//this in global space

console.log(this)

//this inside function

function f1(){
    //value of this depends on strict or non strict mode
    //strict mode -> undefined
    //non strict mode -> global object (window in browsers)
    //because of this substituation
   console.log(this)
}
f1()
//this keyword value depends on how function is called
window.f1() //this will be window object


//this inside object's method

const obj1 = {
    a: 'obj1',
    x:function(){
        console.log(this)
    }
}

obj1.x()  //this will be obj1 because obj1 is calling the method x

//call apply bind methods(sharing methods)

const student={
    name:"Sowjanya",
    printname: function(){
        console.log(this.name)
    }
}

student.printname() //this will be student name   //Sowjanya

const student2={
    name:"Sachin"
}

student.printname.call(student2) //this will be student2 name  //Sachin //Here we override the this value using call method


//this inside arrow functions

const obj3={
    a:10,
    x:function(){
        console.log(this)
    }
}

obj3.x() //this will be obj3

const obj4={
    a:10,
    x:()=>{
        console.log(this)
    }
}

obj4.x() //this will be global object because arrow functions do not have their own this, they take this from their surrounding context which is global here