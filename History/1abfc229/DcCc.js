const express = require("express")
const app = express()
const port =process.env.PORT || 8000
const path = require("path")


app.get("/", (req, res)=>{
    res.send(path.join(__dirname, "../public/index.html"))
})
app.get("*", (req, res)=>{
    res.send("BSDK sahi type kr nahi tho gand mar lunga fuck you bitch and stuff you bitch! ")
})

app.listen(port, ()=>{
    console.log("this is being running on")
})