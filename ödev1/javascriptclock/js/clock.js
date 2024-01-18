let name = prompt("Adınız nedir?")

let myName = document.querySelector("#myName")
myName.innerHTML += name;
// <div id="myClock" class="clock" onload="showTime()"></div>
let myClock = document.querySelector("#myClock")
function showTime(){

    let now = new Date();
    let dayOfWeek = daysOfWeek[now.getDay()];
    let days = now.toLocaleDateString("tr-TR", { weekday: 'long' })
    
    let hours = now.getHours();
    hours = hours <10 ? '0' + hours : hours;
    let minutes = now.getMinutes();
    minutes = minutes <10 ? '0' + minutes : minutes;
    let seconds = now.getSeconds();
    seconds = seconds <10 ? '0' + seconds : seconds;
    
    document.getElementById("myClock").innerHTML = `${hours}:${minutes}:${seconds} ${days} `
    setTimeout(showTime, 500);

}
showTime();

//console.log(`Today is day ${day} and the time is ${hours}:${minutes}.`);
//${new Date().getHours()}