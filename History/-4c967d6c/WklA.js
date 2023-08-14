import mongoose from "mongoose"

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb//:localhost:27017/nextTodo")
        console.log("connected successfully");
    } catch (error) {
        console.log(error);

    }
};

export default connectDb