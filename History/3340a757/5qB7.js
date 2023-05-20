const express = require("express")
const app = express()
const things = require("./routes/things")

app.use("/things", things)


app.listen(3000)