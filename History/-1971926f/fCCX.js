const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Todo = require("../models/Todo")
const port = process.env.PORT || 3001;
const app = express();


// middle wares
app.use(express.json())
app.use(cors())


//connection to mongodb
mongoose.connect("mongodb://localhost/myTryTodoReact").then(() => { console.log("mongoose connection successful") })




app.listen(port, () => {
    console.log(`app running on port ${port}`)
})