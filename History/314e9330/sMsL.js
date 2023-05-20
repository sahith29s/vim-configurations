const messageArea = document.querySelector(".message-area")
console.log(messageArea);
let socket = io()

let name;

while (!name) {
    name = prompt("Enter your name")
}


const input = document.querySelector(".input")

input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        sendMessage(e.target.value)
    }
})


const sendMessage = async (message) => {
    let messageObj = {
        name : name ,
        message : message
    }
    let outgoingMessageDiv = document.createElement("DIV")
    outgoingMessageDiv.classList.add("outgoing","message")
    let outgoingMessageDivInnerText = `
    <div class="outgoing-name"> ${name} <div/>
    <div class="outgoing-message"> ${message} <div/>
    `
    outgoingMessageDiv.innerHTML = outgoingMessageDivInnerText
    messageArea.appendChild(outgoingMessageDiv)
};

socket.on("message" , messageObj )

    // <div class="conta">
    //     <div class="logo"></div>

    //     <div class="message-area">
    //         <div class="incoming messasge">
    //             <div class="incoming-name">sahith</div>
    //             <div class="incoming-message">messag</div>
    //         </div>

    //         <div class="outgoing message">
    //             <div class="outgoing-name">keerhtan</div>
    //             <div class="outgoing-message">Hi bhai me mast hu idar thu bata</div>
    //         </div>

    //         <div class="input-conta">
    //             <input class="input" type="text">
    //         </div>

    //         <div class="message-send-btn">
    //             <button class="message-btn">send</button>
    //         </div>

    //     </div>

    // </div>
