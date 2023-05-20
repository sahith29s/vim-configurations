// const express = require("express")
// const app = express()

// const port = process.env.PORT || 3000
// const http = require("http").Server(app)
// const io = require("socket.io")(http)

// app.get("/", (req, res)=>{
//     res.send("This is sahith")
// })
// app.listen(port)


const express = require("express")
const path = require("path")
const app = express()
app.set("view engine", "hbs")
const server = require("http").createServer(app)


const io = require("socket.io")(server)


// app.get("/", (req, res)=>{
//     res.send(path.join(__dirname, "./src/index.html"))
// })

app.get("/", (req, res)=>{
    app.render("index.hbs")
})

server.listen(3000,()=>{
    console.log("server is perfectly running on 3000")
})


io.on("connection", (socket)=>{
    console.log("new connection")
})