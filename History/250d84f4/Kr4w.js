const express = require("express");
const port = process.env.PORT || 3000;
const app = express();


console.log(__dirname + "/index.html");
app.get("/", (req, res) => {
    res.sendFile(__dirname , "./index.html")
});


app.listen(port, () => {
    console.log(`app running on port `, port)
})