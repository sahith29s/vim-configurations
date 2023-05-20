const express =  require("express")
const app = express()
const path = require("path")
const port = 8000
const socket = io


app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "./index.html"))
})


app.listen(port, ()=>{
    console.log("Server is running on port " + port)
})