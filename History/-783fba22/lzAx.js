let btns = document.querySelectorAll(".btn")
for(btn of btns){
    const display = document.querySelector(".display")
    
    display.value = display.value + btn
}