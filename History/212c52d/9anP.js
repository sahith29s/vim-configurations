// const express = require("express")
// const app = express()

// const server = require("http").Server(app)
// const path = require("path")
// const io = require("socket.io")(server)



// app.get("/", (req,res)=>{
//     res.sendFile(path.join(__dirname, "../index.html"))
// })





// server.listen(3000)

const socket = io()

const form = document.getElementById("send-container")