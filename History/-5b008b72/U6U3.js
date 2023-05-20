let string = ""
let input = document.getElementById("input")
let buttons = document.querySelectorAll(".button")
buttons.forEach((button) => {
    button.addEventListener("click" , (e)=>{
        if (e.target.innerHTML == "=") {
            string = eval(string)
            input.value = string    
            
        }
        else if (e.target.innerHTML == "x") {
            e.target.innerHTML = "*"
            string += e.target.innerHTML
            input.value = string
            
        }
        else if (e.target.innerHTML == "C") {
            console.log("sahith")
            string = ""
            input.value = string
            
        }
        else{

        string = string + e.target.innerHTML
        input.value = string
        
        }

    })
})
