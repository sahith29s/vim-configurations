const express = require("express")

const app = express()
const http = require("http").createServer(app)

const port = 3000
app.get("/", (req, res)=>{
    res.sendFile()
})


http.listen(port , ()=>{
    console.log(`Listening on ${port}`)
})