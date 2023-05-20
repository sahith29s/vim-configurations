// const express = require("express")
// const app = express()

// const server = require("http").Server(app)
// const path = require("path")
// const io = require("socket.io")(server)



// app.get("/", (req,res)=>{
//     res.sendFile(path.join(__dirname, "../index.html"))
// })





// server.listen(3000)

const userName= prompt("Enter your name to join")

const socket = io("http://localhost:3000")

const form = document.getElementById("send-container")

const messageInp = document.getElementById("messageInp")

const messageContainer = document.querySelector(".container")



// socket.emit("new-user-joined",userName)