const express = require("express")

const app = express()
const http = require("http").createServer(app)

const port = 3000
app.get("/" (req, res)=>{
    res.send("This is sahith from the side of ")
})


http.listen(port , ()=>{
    console.log(`Listening on ${port}`)
})