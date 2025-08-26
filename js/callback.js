console.log('Hello, World!');

setTimeout(()=>{
  console.log('This is a sample JavaScript file.');
},5000)

console.log('It contains multiple lines of code.');

const cart=["shoes","pants","kurta"];

// //create order

// api.createOrder(cart)

// //paymemt

// api.proccedToPayment()


// So will create callback

api.createOrder(cart,()=>{
    api.proccedToPayment(()=>{
        api.showOrderSummary()
    })
})