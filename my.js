const clock= document.getElementById("sub")

setInterval(function(){
    let date =new Date();
    clock.innerHTML=date.toLocaleTimeString();
},1000);