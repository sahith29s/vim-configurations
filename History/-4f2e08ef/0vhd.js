setInterval(() => {
    let newDate = new Date()
    let hoursTime = newDate.getHours()
    let secondsTime = newDate.getTime()
    let minutesTime = newDate.getMinutes()
    console.log(hoursTime);
    console.log(secondsTime);
    console.log(minutesTime);
}, 1000);