document.querySelector("#categories").addEventListener('click',function(e){
    console.log(e.target.id)
    if(e.target.tagName === "LI") 
    window.location.href="/"+e.target.id;

})


document.querySelector("#form").addEventListener('keyup',function(e){
      if(e.target.dataset.uppercase!==undefined){
        e.target.value= e.target.value.toUpperCase()
      }
})