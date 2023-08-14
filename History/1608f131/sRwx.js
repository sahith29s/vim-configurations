function main(currentTime){
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = currentTime
    console.log(currentTime);
}

window.requestAnimationFrame(main)