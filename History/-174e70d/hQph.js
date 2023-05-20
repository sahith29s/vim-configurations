const express = require("express")
const productRouter = require("./routes/product")
const connectDB = require("./db/connect")
const PORT = process.env.PORT || 3000

const app = express()

app.use("/api/products", productRouter)

const start = async () => {

    await connectDB()
    app.listen(PORT, ()=>{
        console.log("I am running ")
    })

}

start()






