const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const app = express();


// middle wares
app.use(express.json())
app.use(cors())


//connection to mongodb
mongoose.connect("mongdb://localhost/myTryTodoReact").then(() =>{console.log("mongoose connection successful")})

app.get("/todo/get", async  (req, res)=>{
    
});

app.get("/todo/create", async (req , res) => { 

});

app.delete("/todo/delete", async (req , res) => { 

});


app.put("/todo/put" , async (req, res) =>{

})



app.listen(port, ()=>{
    console.log(`app running on port ${port}`)
})