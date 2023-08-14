let lastRenderTime = 0;
function main(currentTime){
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = ( currentTime - lastRenderTime)/100
    // console.log(currentTime);
    console.log(currentTime);
    
}

window.requestAnimationFrame(main)