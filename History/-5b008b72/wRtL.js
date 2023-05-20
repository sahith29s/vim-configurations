let string = ""
let input = document.getElementById("input")
let buttons = document.querySelectorAll(".button")
buttons.forEach((button) => {
    button.addEventListener("click" , (e)=>{
        // console.log(e.target.innerHTML)
        string = string + e.target.innerHTML
        input.innerHTML = string
        document.querySelector(".display").innerHTML = string
        console.log(`${}`)

    })
})
