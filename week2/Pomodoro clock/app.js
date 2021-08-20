const upIcon = document.getElementById("up-icon");
const downIcon = document.getElementById("down-icon");
const playIcon = document.getElementById("play-icon");
const pauseIcon = document.getElementById("pause-icon");
const stopIcon = document.getElementById("stop-icon");
let sessionLength = document.getElementById("session-length");
const timeDisplay = document.getElementById("time");

// arrow up and down function
let counter = 26;


upIcon.addEventListener('click', function(){
    
    sessionLength.textContent = counter.toString();
    counter++;
    if(counter === 60 ){
        counter = 0;
    }
    return counter
});

downIcon.addEventListener('click', function(){
    
    sessionLength.textContent = counter.toString();
    counter--;
    if(counter === 0 ){
        counter = 60;
    }
    return counter
});



playIcon.addEventListener('click', function(){
    
    timeDisplay.textContent = `${Math.floor(counter)}:${Math.floor(sessionLength % 60)}`;
})

