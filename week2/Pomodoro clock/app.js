const upIcon = document.getElementById("up-icon");
const downIcon = document.getElementById("down-icon");
const playIcon = document.getElementById("play-icon");
const pauseIcon = document.getElementById("pause-icon");
const stopIcon = document.getElementById("stop-icon");
let sessionLength = document.getElementById("session-length");
const timeDisplay = document.getElementById("time");
const minute = document.getElementById('minute');
const second = document.getElementById('second');
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


// event listener

upIcon.addEventListener('click', arrowUp);

downIcon.addEventListener('click', arrowDown);



playIcon.addEventListener('click', function(){
   
    const timer = () => {
        parseInt(second--);
        
    }
    timer();
    const timing = setInterval(timer, 1000);
        
    
})

