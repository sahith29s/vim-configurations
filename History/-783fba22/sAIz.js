let btns = document.querySelectorAll(".btn")
for(btn of btns){
    btn.addEventListener("click", (e)=>{
        let display = document.querySelector(".display")
        display.value = display.value + e.target.innerHTML
    })
}