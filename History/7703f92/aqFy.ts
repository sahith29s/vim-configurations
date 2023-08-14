import mongoose from "mongoose";

const connect = async () => {
    try {

        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection
        connection.on("connected", () => {
            console.log("mongodb Connected")
        })

    } catch (error) {
        console.log("Mongo Db isn't connected");
    }

};


export default connect