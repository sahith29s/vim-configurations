const name = prompt("name")
socket.emit("new-user-joined", name)

