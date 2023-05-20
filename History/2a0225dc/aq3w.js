const express  = require("express")
const PORT = process.env.PORT || 5000
const app = express()
const products_routes = require("./routes/product")

app.use("/api/products", products_routes )
app.get("/" ,(req, res)=>{
    res.send("This is me ")
})



app.listen(PORT, ()=>{
    console.log(`server running one this port : ${PORT}`)
})