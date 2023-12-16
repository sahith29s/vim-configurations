import mongoose from "mongoose";

const connectDB = async (URI: string) => {
    try {
        await mongoose.connect("URI")
    }
    catch (error) {
        console.log(error);
    };

};

