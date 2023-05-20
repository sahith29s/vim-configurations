const socket = io()
const conta = document.querySelector(".conta")
const inputField = document.querySelector(".input")
const submitBtn = document.querySelector(".submit-btn")

let user = []




// function for checking the entered name already taken by anyone or not 
const checkUserAlreadyThere = async (username, usersArray) => {

    if (usersArray.includes(username)) {
        name = prompt("Sry this user is already taken")
        checkUserAlreadyThere(username, usersArray)
    }

    else {
        resolve("successful")
    }
};


// input of the username of the particular person 
let name;
const nameInputFunc = async () => {
    while (!name) {
        name = prompt("Enter your name")

        let promiseName = new Promise((resolve, reject) => {
            if (name) {
                socket.on("usersArrayFromServer", (usersArray) => {
                    let emptyArray = [...usersArray]
                    checkUserAlreadyThere(name, emptyArray)

                })
            }

            promiseName.then((value) => {
                socket.emit("nameOfTheUser", name)
            })

        })

    }

};

nameInputFunc()

// sending the name to server




//Append message in mesage area
const appendMessage = (e, type) => {
    if (e.key === "Enter") {
        let message = e.target.value
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
