const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Todo = require("../models/Todo")
const port = process.env.PORT || 3001;
const app = express();

// importing routes / router
const router = require("./routes/router")


// middle wares
app.use(express.json())
app.use("/" , router)
app.use(cors())






app.listen(port, () => {
    console.log(`app running on port ${port}`)
})