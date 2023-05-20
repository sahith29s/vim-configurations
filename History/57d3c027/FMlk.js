const connectDB = require("./db/connect")

const Product = require("./models/product")

const start = async () =>{
    try {
        
        await connectDB(process.env.MONGO_URI)
    } catch (error) {
        console.log(erro)
        
    }
}

start()