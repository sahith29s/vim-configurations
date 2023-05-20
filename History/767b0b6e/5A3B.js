const socket = io()
const conta = document.querySelector(".conta")
const inputField = document.querySelector(".input")
const submitBtn = document.querySelector(".submit-btn")



// function for checking the entered name already taken by anyone or not 
// const checkUserAlreadyThere = async (name, usersArray) => {

//     if (usersArray.includes(name)) {
//         name = prompt("Sry this user is already taken")
//         checkUserAlreadyThere(name, usersArray)
//     }

//     else {
//         socket.emit("nameOfTheUser" , name)
//     }
// };

// input of the username of the particular person 
let name;
while (!name) {
    name = prompt("Enter your name")
}



//Append message in mesage area
const appendMessage = (e, type) => {
    if (e.key === "Enter") {
        let message = e.target.value
        e.target.value = ""
        let outgoingDiv = document.createElement("DIV")
        outgoingDiv.classList.add(type)

        let outgoingDivInnerText = `
        <div class="${type}-name"> ${name} </div>
        <div class="${type}-message"> ${message}  </div> 
        `

        outgoingDiv.innerHTML = outgoingDivInnerText
        conta.appendChild(outgoingDiv)


        // sending message to the server only if the message is outgoing coz incoming message need not to send to server
        if (type === "outgoing") {
            // making mesasge object with name of the person 
            let messageObj = {
                name: name,
                message: message
            }

            //sending the message with person name to the server
            socket.emit("messageObjToServer", messageObj)
        }

    }
}



inputField.addEventListener("keyup", (e) => {
    appendMessage(e, "outgoing")
    socket.emit("sendingMessageToServer")
})

socket.on("messageObjBackFromServerToClientJs", (messageObj) => {
    let outgoingDiv = document.createElement("DIV")
    outgoingDiv.classList.add("incoming")
    let outgoingDivInnerText = `
        <div class="incoming-name"> ${messageObj.name} </div>
        <div class="incoming-message"> ${messageObj.message} </div> 
        `
    outgoingDiv.innerHTML = outgoingDivInnerText
    conta.appendChild(outgoingDiv)


})




submitBtn.addEventListener("click", (e) => {
    let message = inputField.value
    inputField.value = ""
    let outgoingDiv = document.createElement("DIV")
    outgoingDiv.classList.add("outgoing")

    let outgoingDivInnerText = `
        <div class="outgoing-name"> ${name} </div>
        <div class="outgoing-message"> ${message}  </div> 
        `

    outgoingDiv.innerHTML = outgoingDivInnerText
    conta.appendChild(outgoingDiv)


    let messageObj = {
        name: name,
        message: message
    }

    //sending the message with person name to the server
    socket.emit("messageObjToServer", messageObj)


})