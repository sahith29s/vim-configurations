const name = prompt("name")
const socket = io()
socket.emit("new-user-joined", name)

