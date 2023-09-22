let hamburger = document.querySelector(".hamburger")
let search = document.querySelector(".search")
let right = document.querySelector(".right")
let main = document.querySelector(".main")

hamburger.addEventListener("click" , () =>{
    search.classList.toggle("displayBlock")
    right.classList.toggle("displayBlock")
    main.classList.toggle("maginTop")

})
