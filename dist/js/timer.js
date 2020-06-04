let dt = new Date(new Date().setTime(0));
let ctime = dt.getTime();
// console.log(ctime);
let seconds = Math.floor((ctime % (1000 * 60)) / 1000);
let minutes = Math.floor((ctime % (1000 * 60 * 60)) / 1000 * 60);

let formatted_sec, formatted_min;

let mytime = setInterval(function () {
    if (seconds < 59) {
        seconds++;
    } else {
        seconds = 0;
        minutes++;
    }
    formatted_sec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    formatted_min = minutes < 10 ? `0${minutes}` : `${minutes}`;
    // console.log(formatted_min + ":" + formatted_sec);
    document.querySelector("span.time").innerHTML = `${formatted_min}` + ":" + `${formatted_sec}`;
}, 1000);