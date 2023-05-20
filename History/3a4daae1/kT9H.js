const express = require("express");
port = process.env.PORT || 3000;
const app = express();
const path = require("path");


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname , "./index"))
});


app.listen(port, () => {
    console.log(`app running on port ${port}`)
})