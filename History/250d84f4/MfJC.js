const express = require("express");
const port = process.env.PORT || 3000;
const path = require("path");
const app = express();
app.use(express.static("static"));


console.log();
app.get("/", (req, res) => {
    res.sendFile("index.html")
});


app.listen(port, () => {
    console.log(`app running on port `, port)
})