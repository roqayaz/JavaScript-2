const upIcon = document.getElementById("up-icon");
const downIcon = document.getElementById("down-icon");
const playIcon = document.getElementById("play-icon");
const pauseIcon = document.getElementById("pause-icon");
const stopIcon = document.getElementById("stop-icon");
let sessionLength = document.getElementById("session-length");
const timeDisplay = document.getElementById("time");
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let counter = 25;


// arrow up and down function
const arrowUp = () => {
    counter++;
    if(counter == 60 ){
        counter = 0;
    };
    sessionLength.textContent = counter;
    minute.textContent = counter;

};

const arrowDown = () => {
    counter--;
    if(counter == 0 ){
        counter = 60;
    };
    sessionLength.textContent = counter;
    minute.textContent = counter;
}

//play countdown
const playCountdown = () => {
   
    function timer()
    {
        if(second.textContent != 0){
            second.textContent --;
        } else if (minute.textContent != 0 && second.textContent == 0){
            second.textContent = 59;
            minute.textContent --;
        } else ( time.textContent = `Time's up!`)
    }
    timer();
    const timing = setInterval(timer, 1000);

    const pauseCountdown = () => {
        playIcon.addEventListener('click', playCountdown);

        clearInterval(timing);
    
       
    }

    upIcon.removeEventListener('click', arrowUp);
    downIcon.removeEventListener('click', arrowDown);
    playIcon.removeEventListener('click', playCountdown);
    pauseIcon.addEventListener('click', pauseCountdown);

  
}




// event listener

upIcon.addEventListener('click', arrowUp);

downIcon.addEventListener('click', arrowDown);

playIcon.addEventListener('click', playCountdown); 

pauseIcon.addEventListener('click', pauseCountdown)
    
        
    










