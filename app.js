
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let startbtn = document.querySelector("#startbtn");
let stopbtn = document.querySelector("#stopbtn");
let resetbtn = document.querySelector("#resetbtn");

let myTimer;
let myCounter = 0;
let mySeconds = 0;
let myMinutes = 0;


startbtn.addEventListener("click", function() {

startbtn.disabled = true;    
myTimer = setInterval(function() {
myCounter++;
mySeconds = myCounter;
seconds.innerHTML = mySeconds;

//start counting seconds

if(mySeconds > 59) {
    myCounter = 0;
    seconds.innerHTML = "00";
    myMinutes++;
    minutes.innerHTML = myMinutes;
}else if(mySeconds < 10){
    
    seconds.innerHTML = "0" + mySeconds;
}else if(mySeconds > 9) {

    seconds.innerHTML = mySeconds
}



//start counting minutes

if(myMinutes > 59) {
    myCounter = 0;
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    myCounter = 0;
    myMinutes = 0;
    mySeconds = 0;
    clearInterval(myTimer);

}else if(myMinutes < 10){
    
    minutes.innerHTML = "0" + myMinutes;

}else if(myMinutes > 9) {

    minutes.innerHTML = myMinutes
}

}, 1000)
})


stopbtn.addEventListener("click", function() {
    startbtn.disabled = false; 
    clearInterval(myTimer);
})

resetbtn.addEventListener("click", function() {
    startbtn.disabled = false; 
    clearInterval(myTimer);
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    myCounter = 0;
    myMinutes = 0;
    mySeconds = 0;
   
})
