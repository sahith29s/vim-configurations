const express = require("express");
const router = require("./routes/route")
const path = require("path");
const hbs = require("hbs");
port = process.env.PORT || 3000;
const app = express();

// paths 
const partialsPath = path.join(__dirname, "./template/partials")
const viewsPath = path.join(__dirname, "./template/views")


//app set view engine
app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialsPath)

//route middleware
app.use("/", router)




app.listen(port, ()=>{
console.log(`app running on port ${port}`)
})