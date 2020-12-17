let seconds = document.querySelector('.secs');
let minutes= document.querySelector('.mins')
let hours = document.querySelector('.hrs')
let days = document.querySelector('.days')

let day;
let hr;
let min;
let sec;
let newYear = new Date(2020,11,24,0,0,0).getTime();

// new Date(2021,0,1,0,0,0).getTime();


setInterval(function(){


    let currentTime = new Date().getTime()
    let timeLeft = newYear - currentTime

    sec = Math.floor((timeLeft/1000) % 60);

    min = Math.floor( (timeLeft/1000/60) % 60);

    hr = Math.floor(timeLeft/(1000*60*60) % 24);
    
    day = Math.floor( timeLeft /( 1000*60*60*24) );
    


    
    days.innerText = day
    minutes.innerText = min
    hours.innerText = hr
    seconds.innerText=sec 

},1000)
