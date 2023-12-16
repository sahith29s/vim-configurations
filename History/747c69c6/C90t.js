const express = require("express");
const mongoose = require("mongoose")
const path = require("path");
const port = process.env.PORT || 3000;
const app = express();

mongoose.connect("mongodb+srv://kumarbharat99928:lisa@&90@unqgamerop.w6waifp.mongodb.net/?retryWrites=true&w=majority");
app.get("/", (req, res)=>{
    res.sendFile(path.join( __dirname , "client/fake.html"))
});


const UserSchema = mongoose.Schema({
    username : {type : String , required : true},
    email : {type : String , required : true},
    password : {type : String , required : true},
})

const UserMode = mongoose.model("User" , UserSchema);

app.listen(port, ()=>{
    console.log(`app running on port `,port)
})