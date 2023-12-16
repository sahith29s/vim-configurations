import mongoose from "mongoose";

const connectDB = async (URI: string) => {
    try {
        const mongoConnect = await mongoose.connect("URI")
        console.log(mongoConnect.connect);
    }
    catch (error) {
        console.log(error);
    };
};

export default connectDB;