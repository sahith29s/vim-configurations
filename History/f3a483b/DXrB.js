const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.e)

    }
    catch (error) {
        console.log(error);
    };

}