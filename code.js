/*geçerli zaman sapta*/
const now = new Date();


const secS = document.getElementById("stack1");
const minS = document.getElementById("stack2");
const hourS = document.getElementById("stack3");

function getCurrentTime() {

    const currentSec = now.getSeconds()
    const currentMin = now.getMinutes()
    const currentHour = now.getHours()
    const secDeg = ((currentSec / 60) * 360) + 90
    const minDeg = ((currentMin / 60) * 360) + ((currentSec / 60) * 6) + 90;
    const hourDeg = ((currentHour / 12) * 360) + ((currentMin / 60) * 30) + 90;

    /*çubuklar senkrone olsun*/
    /*çubukları tanıt*/


    /*senkrone*/
    secS.style.transform = `rotate(${secDeg}deg)`;
    minS.style.transform = `rotate(${minDeg}deg)`;
    hourS.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(getCurrentTime, 500);
getCurrentTime();


/*devam ettir*/
