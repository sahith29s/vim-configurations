const express = require("express");
port = process.env.PORT || 3000;
const app = express();
const path = require("path");


app.get("/", (req, res) => {
    res.sendFile(
});


app.listen(port, () => {
    console.log(`app running on port ${port}`)
})