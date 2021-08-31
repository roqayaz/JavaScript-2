const upIcon = document.getElementById("up-icon");
const downIcon = document.getElementById("down-icon");
const playIcon = document.getElementById("play-icon");
const pauseIcon = document.getElementById("pause-icon");
const stopIcon = document.getElementById("stop-icon");
let sessionLength = document.getElementById("session-length");
const timeDisplay = document.getElementById("time");
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let colon = document.getElementById('colon')
const alarm = new Audio ('classicAlarm.wav')
let counter = 25;



// arrow up and down function
const arrowUp = () => {
    counter++;
    if(counter == 60 ){
        counter = 1;
    };
    sessionLength.textContent = counter;
    minute.textContent = counter;

};

const arrowDown = () => {
    counter--;
    if(counter == 0 ){
        counter = 59;
    };
    sessionLength.textContent = counter;
    minute.textContent = counter;
}

//play and pause countdown

let timeRun;
const playCountdown = () => {
   
    function timer()
    {
        if(second.textContent != 0){
            second.textContent --;
        } else if (minute.textContent != 0 && second.textContent == 0){
            second.textContent = 59;
            minute.textContent --;
        } else {
            alarm.play();
            minute.textContent = `Time's up!`;
            second.textContent = "";
            colon.textContent = "";
            stopIcon.addEventListener('click', stopCountdown);
            clearInterval(timeRun);
            };          
    }
    timer();
   timeRun = setInterval(timer, 1000);

    const pauseCountdown = () => {
        pauseIcon.removeEventListener('click', pauseCountdown);
        playIcon.addEventListener('click', playCountdown);
        stopIcon.addEventListener('click', stopCountdown);
        clearInterval(timeRun);
       
    }

    upIcon.removeEventListener('click', arrowUp);
    downIcon.removeEventListener('click', arrowDown);
    playIcon.removeEventListener('click', playCountdown);
    pauseIcon.addEventListener('click', pauseCountdown);
    stopIcon.addEventListener('click', stopCountdown);
}

 //stop countdown

 const stopCountdown = () => {
    minute.textContent = 25;
    second.textContent = '00';
    sessionLength.textContent = 25;
    colon.textContent = " : ";
    clearInterval(timeRun);
    playIcon.addEventListener('click', playCountdown);
    upIcon.addEventListener('click', arrowUp);
    downIcon.addEventListener('click', arrowDown);
}

// event listener

upIcon.addEventListener('click', arrowUp);

downIcon.addEventListener('click', arrowDown);

playIcon.addEventListener('click', playCountdown); 

stopIcon.addEventListener('click', stopCountdown);


        
    










