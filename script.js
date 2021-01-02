

let seconds = document.querySelector('.secs');
let minutes= document.querySelector('.mins')
let hours = document.querySelector('.hrs')
let days = document.querySelector('.days')

let day;
let hr;
let min;
let sec;
let newYear = new Date(2022,0,1,0,0,0).getTime();


function animateclass(box){
box.className += ' turn';
setTimeout(function(){
    box.classList.remove("turn");

},700)

}

let test = setInterval(function(){


    let currentTime = new Date().getTime()
    let timeLeft = newYear - currentTime


    sec = Math.floor((timeLeft/1000) % 60);

    min = Math.floor( (timeLeft/1000/60) % 60);

    hr = Math.floor(timeLeft/(1000*60*60) % 24);

    day = Math.floor( timeLeft /( 1000*60*60*24) );

    days.innerText =  day
    minutes.innerText = min
    hours.innerText = hr
    seconds.innerText=sec 

    if ( day <= 9){days.innerText = '0' + day}   
    if ( min <= 9){minutes.innerText = '0' + min}
    if ( hr <= 9){hours.innerText = '0' + hr}
    if ( sec <= 9){seconds.innerText = '0' + sec}

    let box = document.querySelectorAll('.div-col div')

    animateclass(box[3]);
    if ( sec == 59 ){animateclass(box[2])}
    if ( sec == 59 && min == 59 ){animateclass(box[1])}
    if ( sec == 59 && min == 59 && hr == 23){animateclass(box[0])}


},1000)



