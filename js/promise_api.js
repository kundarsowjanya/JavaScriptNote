const p1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("p1 success")
    },3000)
   
});

const p2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
    //  resolve("p2 success")
        reject("p2 failed")
    },1000)
   
});

const p3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("p3 success")
    },2000)
   
});

//Promise all

Promise.all([p1,p2,p3])
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.error(err)
})

//Promise allSettled
//It will give object with status and value/reason for each promise

Promise.allSettled([p1,p2,p3])
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.error(err)
})

//Promise race
Promise.race([p1,p2,p3])
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.error(err)
})

//Promise any
Promise.any([p1,p2,p3])
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.error(err)
})



