const express = require("express")
const app = express()
const http = require("http")
const { Server } = require("socket.io")

const cors = require("cors");
app.use(cors())
const server = http.createServer(app)
const io = new Server(server , {
    cors : {
        origin : "http://localhost:5173",
        methods : ["GET" , "POST"]
    }
})


io.on("connection", (socket) => {
    socket.on
})

server.listen(5000)

