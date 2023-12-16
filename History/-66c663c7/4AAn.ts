import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.MONGO_URI);

const connectDB = async (URI: string) => {
    try {
        const mong = await mongoose.connect(URI)
    }
    catch (error) {
        console.log(error);
    };
};

export default connectDB;