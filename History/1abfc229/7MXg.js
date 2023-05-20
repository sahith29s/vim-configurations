const express = require("express")
const app = express()
const port =process.env.PORT || 3000
const path = require("path")


console.log(path.join(__dirname))
app.use(express.static(path.join(__dirname, "../public")))
app.get("/", (req, res)=>{
    res.send(path.join(__dirname, "../public"))
})
app.get("*", (req, res)=>{
    res.send("BSDK sahi type kr nahi tho gand mar lunga fuck you bitch and stuff you bitch! ")
})

app.listen(port, ()=>{
    console.log("this is being running on")
})