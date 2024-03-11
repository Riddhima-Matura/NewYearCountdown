const daysItem = document.querySelector("#days");
const hourItem = document.querySelector("#hour");
const minItems = document.querySelector("#min");
const secItems = document.querySelector("#sec");

function countDown(){

    
    const futureDate = new Date("1 jan 2025");
    const currentDate = new Date();
    const myDate = futureDate - currentDate;
    if( myDate<0){return};

    let Days = Math.floor(myDate/1000/60/60/24);
    let hours = Math.floor(myDate/1000/60/60) % 24;
    let mins = Math.floor(myDate/1000/60) % 60;
    let sec = Math.floor(myDate/1000) % 60;

    daysItem.innerHTML = Days;
    hourItem.innerHTML = hours;
    minItems.innerHTML = mins;
    secItems.innerHTML = sec;

 
}

countDown()

setInterval(countDown, 1000)