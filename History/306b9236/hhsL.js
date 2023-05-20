// requires
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const path = require("path");
const hbs = require("hbs");
const router = require("../routes/router")


// middle wares
app.use("/public" , express.static("public"))


// routes 
app.use("/" , router)


// Paths
const viewsPath = path.join(__dirname , "../templates/views")
const partialsPath = path.join(__dirname , "../templates/partials")


// Set view engine 
app.set("view engine" , "hbs")
app.set("views" , viewsPath)
hbs.registerPartials(partialsPath)


app.listen(port, ()=>{
    console.log(`app running on port ${port}`)
})