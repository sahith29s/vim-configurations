const express = require("express")
const productRouter = require("./routes/product")
const connectDB = require("./db/connect")

const app = express()

app.use("/api/products" , productRouter)

app.listen(3000)






