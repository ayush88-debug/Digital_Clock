
setInterval(()=>{
    let div = document.querySelector("#clock")
    let time = new Date()
   div.innerHTML=`${time.toLocaleTimeString()}`
},1000)