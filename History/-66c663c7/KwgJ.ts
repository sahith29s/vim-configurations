import mongoose from "mongoose";

const connectDB = async (URI: string) => {
    try {
        const mong = await mongoose.connect(URI)
    }
    catch (error) {
        console.log(error);
    };
};

export default connectDB;