var express = require("express");
var port = process.env.PORT || 3000;
var app = express();
app.get("/", function (req, res) {
    res.send("Hi");
});
app.listen(port, function () {
    console.log("app running on port ", port);
});
