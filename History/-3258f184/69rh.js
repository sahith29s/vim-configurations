// const express = require("express");
// port = process.env.PORT || 3000
// const path = require("path");
// const hbs = require("hbs");
// const app = express();
  
// app.set("view engine", "hbs")

// hbs.registerPartials(path.join(__dirname, "./templates/partials"))


// app.set("views" , path.join(__dirname, "./templates/views") )
// app.get("/", (req, res)=>{
//     res.render("index")
// });


// app.listen(port);

const express = require("express");
port = process.env.PORT || 3000
const app = express();
  

app.get("/", (req, res)=>{
    res.send("Hi");
});


app.listen(port, ()=>{
console.log(`app running on port port`)
})