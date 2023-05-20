let socket = io()

let name;

while (!name) {
    name = prompt("Enter your name")
}


const input = document.querySelector(".input")

input.addEventListener("keyup" , (e) =>{
    if(e.key === "Enter"){
        sendMessage(e.target.value)
    }
})


const sendMessage = async (message) =>{
    let message 
};

