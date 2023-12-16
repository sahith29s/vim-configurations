const express = require("express");
const port = process.env.PORT || 3000;
const connectDB = require("./connectDB/connectDB");
const app = express();
connectDB();

app.get("/", (req, res, next) => {
    res.send("Hi");
});

app.listen(port, () => { console.log(`app running on port `, port); });