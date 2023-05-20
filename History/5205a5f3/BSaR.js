const express = require("express");
port = process.env.PORT || 3000;
const app = express();
const hbs = require("hbs");
const path = require("path");

  
// paths
const viewPath = path.join(__dirname, "../client/template/views")
const partialsPath= path.join(__dirname, "../client/template/partials")

// app.use view engine
app.use("view engine" , "hbs")
app.set("views", viewPath)
hbs.registerPartials(partialsPath)


app.get("/", (req, res)=>{
    res.send("Hi");
});


app.listen(port, ()=>{
console.log(`app running on port ${port}`)
})