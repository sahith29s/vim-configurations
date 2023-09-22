const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB)
    }
    catch (error) {
        console.log(error);
    };

}