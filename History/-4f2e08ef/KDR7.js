let hoursHand = document.querySelector(".hoursHand")
let secondsHand = document.querySelector(".secondsHand")
let minutesHand = document.querySelector(".minutesHand")


setInterval(() => {

    let newDate = new Date()

    let hoursTime = newDate.getHours()
    let secondsTime = newDate.getSeconds()
    let minutesTime = newDate.getMinutes()

    let hourRotation = hoursTime * 30 +  minutesTime/2 ;
    let minutesRotation = 6 * minutesTime;
    let secondsRotation = 6 * secondsTime;

    hoursHand.style.transform = `rotate(${hourRotation}deg)`
    minutesHand.style.transform = `rotate(${minutesRotation}deg)`
    secondsHand.style.transform = `rotate(${secondsRotation}deg)`

    

}, 1000);