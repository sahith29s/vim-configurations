const express = require("express")
const app = express()
const http = require("http")
const { Server } = require("socket.io")

const cors = require("cors");
app.use(cors())
app.get("/", (req, res) => {
    res.send("sahith")
})
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket) => {
    console.log(socket.id);


    socket.on("message", (messageObject) => {

        messageObject.isUser = !messageObject.isUser
        let messageBackToFrontend = {...messageObject}

        socket.emit("messageBackFromBackend", (messageBackToFrontend))
    })
})



server.listen(5001)