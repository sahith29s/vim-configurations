const videoConAnni = () => {
    const videoCon = document.querySelector("#video-container")
    const playBtn = document.querySelector("#play")
    videoCon.addEventListener("mouseenter", (e) => {

        gsap.to(playBtn, {
            opacity: 1,
            scale: 1
        })

    })
    videoCon.addEventListener("mouseleave", () => {

        gsap.to(playBtn, {
            opacity: 0,
            scale: 0
        })

    })

    videoCon.addEventListener("mousemove", (e) => {

        gsap.to(playBtn, {
            left: e.x,
            top: e.y

        })

    })
};

videoConAnni()

gsap.from("#page1 h1" , {
    y : 100,
    opacity: 0,
    delay : 0.5,
    duration : 0.9,
    stagger : 0.3

})