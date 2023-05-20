const express = require("express")
const productRouter = require("./routes/product")

const app = express()

app.use("/api/products" , productRouter)





