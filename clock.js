setInterval(()=>{
    date = new Date;
    // console.log(date);
    time = date.getSeconds();
    clockContainer = document.getElementById("clockContainer");
    hour.innerHTML = date.getHours() + " :";
    minute.innerHTML = date.getMinutes() + " :";
    second.innerHTML = date.getSeconds();

},1000)

