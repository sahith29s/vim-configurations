import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.MONGO_URI);

const connectDB = async (URI: string) => {
    try {
        await mongoose.connect(URI)
        console.log("sahith");
    }
    catch (error) {
        console.log(error);
        // console.log("not");
    };
};

export default connectDB;