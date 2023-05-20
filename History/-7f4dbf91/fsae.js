const express = require("express");

port = process.env.PORT || 3000;
const app = express();
const MensRanking = require("./models/mens")
require("./db/conn")

app.use(express.json())


app.listen(port, () => {
    console.log(`app running on port ${port}`)
})

