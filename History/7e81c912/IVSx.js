const videoCon = document.querySelector("#video-container")
const playBtn = document.querySelector("#play")
videoCon.addEventListener("mouseenter", (e) => {

    // playBtn.style.opacity = 1
    // playBtn.style.scale = 1

    gsap.to(playBtn, {
        opacity: 1,
        scale: 1
    })
    console.log(e.x);


})
videoCon.addEventListener("mouseleave", () => {

    // playBtn.style.opacity = 1
    // playBtn.style.scale = 1

    gsap.to(playBtn, {
        opacity: 0,
        scale: 0
    })

})

videoCon.addEventListener("mousemove", (e) => {
    // playBtn.style.left = e.x
    // playBtn.style.top = e.y

    gsap.to(playBtn, {
        left: e.x,
        top: e.y

    })

})

