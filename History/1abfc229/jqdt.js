const express = require("express")
const app = express()
const hbs = require("hbs")
const port =process.env.PORT || 3000
const path = require("path")
app.set("view engine", "hbs")

const templatePath = path.join(__dirname, "../templates/views")

app.set("views", templatePath)
const partialsPath =  
hbs.registerPartials(partialsPath)

app.get("/" ,(req, res)=>{
    res.render("index")
})


app.get("/about", (req, res)=>{
    res.render("about")
})

app.get("*", (req, res)=>{
    res.send("BSDK sahi type kr nahi tho gand mar lunga fuck you bitch and stuff you bitch! ")
})

app.listen(port, ()=>{
    console.log("this is being running on")
})