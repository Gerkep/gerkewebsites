const destination = new Date("aug 19, 2021 11:00:00").getTime();
setInterval(function(){
let now = new Date().getTime();

let difference = destination - now;

let days = Math.floor(difference/(1000*60*60*24));
let hours = Math.floor(difference%(1000*60*60*24) / (1000 * 60 * 60));
let mins = Math.floor(difference%(1000*60*60) / (1000*60));
let secs = Math.floor(difference%(1000*60) /1000);

document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${mins}m ${secs}s`;
}, 1000)