import mongoose from "mongoose";
import from "dotenv"

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