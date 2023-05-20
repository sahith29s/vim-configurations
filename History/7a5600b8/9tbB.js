const express = require("express")
const app = express()
const exhbs = require("express-handlebars")
app.engine("handlebars", exhbs())
app.set("view engine", "handlebars")






app.listen(3000, ()=>{
    console.log("this is from this")
})