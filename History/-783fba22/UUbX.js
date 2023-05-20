let btns = document.querySelectorAll(".btn")
for(btn of btns){
    let display = document.querySelector(".display")
    btn.addEventListener("click", (e)=>{
    if(e.target.innerHTML == "C"){
        display.value = ""
    }

    else{
        display.value = display.value + e.target.innerHTML
    }
    })
}