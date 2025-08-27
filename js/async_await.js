
// //return vaue from async function
// async function getData() {
//     return "Hello, World!";
// }

// const dataPromise=getData();;
// console.log(dataPromise)
// dataPromise.then((res)=>console.log(res))

// // returning promise from async function
// async function getDetails(){
//     return new Promise((resolve,reject)=>{
//         resolve("Details fetched");
//     })
// }

// detailPromise=getDetails();
// console.log(detailPromise)
// detailPromise.then((res)=>console.log(res))


// //Before Promise was handling like this

// const p=new Promise((resolve,resject)=>{
//     setTimeout(() => {
//         resolve("Promise resolved")
//     }, 1000);
  
// })

// const p1=new Promise((resolve,resject)=>{
//     setTimeout(() => {
//         resolve("Promise resolved")
//     }, 20000);
  
// })

// const p2=new Promise((resolve,resject)=>{
//     setTimeout(() => {
//         resolve("Promise resolved")
//     }, 40000);
  
// })

// function getData1(){
//      p.then((res=>console.log(res)));
//     console.log("After promise resolution")
// }

// getData1()

// //using await keyword

// async function getData2(){
//     const val=await p;
//     console.log("After promise resolution uisng await1")
//     console.log(val)

//     console.log("After promise resolution uisng await2")
//     const val1=await p;
//     console.log(val1)

//     console.log("After promise resolution uisng await3")
//     const val2=await p1;
//     console.log(val2)

//     console.log("After promise resolution uisng await4")
//     const val3=await p1;
//     console.log(val3)
 
// }

// getData2()


// daily tasks


API_URL="https://api.github.com/users/kundarsowjanya";

async function handlePromise() {
    //fetch will return a promise

    //fetch is promise, it will  give response object which is readable stream
    //to read data from stream we have to use another promise called json()
    try{
      const data= await fetch(API_URL); 
       console.log(await data.json())  
    }catch(err){
        console.log("Error is ",err)
    }
}

handlePromise()
