"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dotenv_1 = require("dotenv");
dotenv_1.config();
// var app = (0, express_1.default)();
var app = express_1()
var port = process.env.PORT || 3000;
app.get("/", function (req, res) {
    res.send("Hi");
});
app.listen(port, function () {
    console.log("app running on port ", port);
});
