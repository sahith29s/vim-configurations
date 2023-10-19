const videoCon = document.querySelector("#video-container")
const playBtn = document.querySelector("#play")
videoCon.addEventListener("mouseenter", () =>{
    
    // playBtn.style.opacity = 1
    // playBtn.style.scale = 1
    
    gsap.to(playBtn,{
        opacity : 1,
        scale : 1
    })

})
videoCon.addEventListener("mouseleave", () =>{
    
    // playBtn.style.opacity = 1
    // playBtn.style.scale = 1
    
    gsap.to(playBtn,{
        opacity : 0,
        scale : 0
    })

})

videoCon.addEventListener("mousemove" , (e) =>{
    console.log(e.x);

})

