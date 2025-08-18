const expensive=()=>{
    console.log("Expensive Function Called");   
}



const throttling=(func, delay)=>{
    let flag=true;
    return function(){
        let context=this;
        let args=arguments;
    if(flag){
        func.apply(context,args);
        flag=false
        setTimeout(()=>{
             flag=true;
        },delay)
    }
}
}



const betterExpensive=throttling(expensive, 1000);