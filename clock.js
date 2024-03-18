setInterval(()=>{
    date = new Date;
    // console.log(date);
    time = date.getSeconds();
    clockContainer = document.getElementById("clockContainer");
    hour.innerHTML = date.getHours() + ":";
    minute.innerHTML = date.getMinutes() + ":";
    second.innerHTML = date.getSeconds();
    days = ['Sunday', 'Monday', 'tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    // console.log();
    day.innerText = days[date.getDay()];
    dates.innerText = date.getDate() + " " + months[date.getMonth()]+ ", ";
    year.innerText = date.getFullYear();
},1000)

// date = new Date;
// console.log(date);


