let string = ""
let input = document.getElementById("input")
let buttons = document.querySelectorAll(".button")
buttons.forEach((button) => {
    button.addEventListener("click" , (e)=>{
        if (e.target.innerHTML == "=") {
            string = string + e.target.innerHTML
            string = eval(string)
            input.value = string    
            
        }
        input.value = string
        

    })
})
