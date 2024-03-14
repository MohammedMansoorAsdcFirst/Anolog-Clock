let hour = document.querySelector('#hour');
let minute = document.querySelector('#minute');
let second = document.querySelector('#second');

function displayTime() {
    let date = new Date();

    let hh = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hRotation = 30 * hh + min / 2;
    let mRotation = 6 * min;
    let sRotation = 6 * sec;

    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000)