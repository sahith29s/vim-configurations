import mongoose from "mongoose"
interface UserInterface {
    userName: string;
    email: string;
    password: string;
}

const userScehma = new mongoose.Schema<UserInterface>({
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

export default mongoose.model("User", userScehma);