setInterval(() => {

    let newDate = new Date()

    let hoursTime = newDate.getHours()
    let secondsTime = newDate.getSeconds()
    let minutesTime = newDate.getMinutes()

    let hourRotation = hoursTime * 30 +  secondsTime /2 ;
    let minutesRotation = 6 * minutesTime;
    let secondsRotation = 6 * secondsTime;

}, 1000);