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
            left: e.x-40,
            top: e.y - 80,


        })

    })
};

const loadingFunc = () => {
    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.3

    })
    gsap.from("#page1 #video-container", {
        y: 100,
        scale : 0.1,
        opacity: 0,
        delay: 1.3,
        duration: 0.5,
    })
};



videoConAnni()
// loadingFunc()