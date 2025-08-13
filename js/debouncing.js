const getData=()=>{
    //call search api
    console.log("Search API called");
}


const debounce=function(fn, delay){
    
    let timer;
    return function(){
          let context=this;
          let args=arguments;
          clearTimeout(timer)
          timer=setTimeout(function(){
             fn.apply(context,args)
          },delay)

     }
}


const callDebounce= debounce(getData,300)