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