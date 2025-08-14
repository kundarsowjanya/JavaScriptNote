document.querySelector("#grand").addEventListener("click",function(e){
    console.log("Grand Div Clicked");
},false)

document.querySelector("#parent").addEventListener("click",function(e){
    console.log("Parent Div Clicked");
    e.stopPropagation(); // Prevents the event from bubbling up to the grand div
},false)

document.querySelector("#child").addEventListener("click",function(e){
    console.log("Child Div Clicked");
},false)