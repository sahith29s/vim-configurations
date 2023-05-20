const express = require("express");
const route = require("./routers/routes")

port = process.env.PORT || 3000;
const app = express();
const MensRanking = require("./models/mens")
require("./db/conn")

app.use(express.json())

app.use(route)

app.listen(port, () => {
    console.log(`app running on port ${port}`)
})

