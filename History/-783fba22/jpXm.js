let btns = document.querySelectorAll(".btn")
for(btn of btns){
    btn.addEventListener("click", ()=>{
        let display = document.querySelector(".display")
        display.value = display.value + btn.value
    })
}