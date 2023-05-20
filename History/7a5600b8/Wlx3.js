const express = require("express")
const app = express()
const exhbs = require("express-handlebars")
// app.engine("handlebars", exhbs())    
app.set("view engine", "hbs")



app.get("/", (req, res)=>{
    res.render("index")
})






app.listen(3000, ()=>{
    console.log("this is from this")
})