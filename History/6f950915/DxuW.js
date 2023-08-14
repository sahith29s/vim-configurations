const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/myTryLoda")
    .then((value) =>{
        console.log("connected success")
    })
    .catch((error) =>{
        console.log("this is error");
    })


