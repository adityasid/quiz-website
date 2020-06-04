let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
let time_min = sessionStorage.getItem("Time.min");
let time_sec = sessionStorage.getItem("Time.sec");

document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.points").innerHTML = user_points;
document.querySelector("span.time_taken").innerHTML = `${time_min}`+":"+`${time_sec}`;
