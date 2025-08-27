// const cart=["shoes","pants","kurta"];

// createOrder(cart,()=>{
//    proccedToPayment(()=>{
//         showOrderSummary()
//     })
// })


// const promise= createOrder(cart)

// promise.then(()=>{
//     proccedToPayment()
// })

const posts=fetch('https://jsonplaceholder.typicode.com/posts')
console.log(posts)


// const cart=["shoes","pants","kurta"];

// createOrder(cart,()=>{
//    proccedToPayment(()=>{
//         showOrderSummary()
//     })
// })


// const promise= createOrder(cart)

// promise.then(()=>{
//     proccedToPayment()
// })

// const posts=fetch('https://jsonplaceholder.typicode.com/posts')
// posts.then((res)=>res.json()).then((data)=>{
//     console.log(data)
// })

 const cart=["shoes","pants","kurta"];

// const promise=createOrder(cart)
// promise.then(function(orderId){
//     console.log("Order id is ",orderId)
//    // proceedToPayment()
//  }).catch(function(err){
//     console.log(err.message)
//  })

 //we can also write like this along with chaining

createOrder(cart)
.then(function(orderId){
    console.log("Order id is ",orderId)
    return orderId;
 })
 .then(function(orderId){
    return proccedToPayment(orderId);
 })
 .then(function(paymentInfo){
    console.log(paymentInfo)
 })
 .catch(function(err){
    console.log(err.message)
 })

 //Producer

 function createOrder(cart){
     const pr= new Promise(function(resolve,reject){
        //logic
        //createOrder
        //validation
        if(!validCart(cart)){
            const err= new Error("Cart is not valid");
            reject(err);

        }
        //logic for create order
        const orderId=1234;
        if(orderId){
            setTimeout(()=>{
                resolve(orderId)
            },5000)
           
        }

       
     });
      return pr;

 }

 function proccedToPayment(orderId){
   return new Promise(function(resolve,reject){
     resolve("Payment Successfull");
   })
 }

function validCart(cart){
    return true;
}