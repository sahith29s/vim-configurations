let lastRenderTime = 0;
const snakeSpeed = 1
function main(currentTime){
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = ( currentTime - lastRenderTime )/1000
    // console.log(currentTime);
    // console.log(currentTime);
    if (secondsSinceLastRender < 1 / snakeSpeed )return 
    console.log(currentTime);
    lastRenderTime = currentTime
    
}

window.requestAnimationFrame(main)