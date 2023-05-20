const express = require("express")
const app = express()
const exhbs = require("express-handlebars")
app.engine("view engine", "hbs")

app.listen(3000, ()=>{
    console.log("this is from this")
})