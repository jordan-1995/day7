var finalDate = new Date('Jan 1, 2022 00:00:00').getTime();


function launchEvent(){
    var presentDate = new Date().getTime();

    difference = finalDate - presentDate;

    seconds = 1000;
    minutes = seconds * 60;
    hours = minutes * 60;
    days = hours * 24;

    var d = Math.floor(difference/(days));
    var h = Math.floor((difference % (days)) /(hours));
    var m = Math.floor((difference %(hours)) / (minutes));
    var s = Math.floor((difference % (minutes) / (seconds)))

    document.getElementById("day").innerText = d;
    document.getElementById("hour").innerText = h;
    document.getElementById("minute").innerText = m;
    document.getElementById("second").innerText = s;
}

setInterval(function(){
    launchEvent();
}, 1000)