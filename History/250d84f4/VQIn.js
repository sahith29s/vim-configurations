const express = require("express");
const port = process.env.PORT || 3000;
const path = require("path");
const app = express();


console.log();
app.get("/", (req, res) => {
    res.sendFilep(path.join(__dirname , "./index.html"))
});


app.listen(port, () => {
    console.log(`app running on port `, port)
})