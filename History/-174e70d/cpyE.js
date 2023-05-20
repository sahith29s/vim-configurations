const express = require("express")
const productRouter = require("./routes/product")
const connectDB = require("./db/connect")

const app = express()

app.use("/api/products", productRouter)

const start = async () => {

    await connectDB
    app.listen(3000, ()=>{
        console.log("I am running ")
    })

}

start()






