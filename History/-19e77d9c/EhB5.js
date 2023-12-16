const bcrypt = require("bcrypt");
const JWT_SECRET = "sahith123";
const jwt = require("jsonwebtoken");
const UserModel = require("../model/userModel");

const signup = async (req, res, next) => {
    const { name, email, password } = req.body;
    let existingUser = await UserModel.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: "user already exists login instead" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({ name, email, password: hashedPassword });
    try {
        await user.save();
    }
    catch (error) {
        console.log(error);
    };
    return res.status(201).json({ messsage: user });
}

const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        let existingUser = await UserModel.findOne({ email });

        if (!existingUser) {
            return res.status(400).json({ message: "User not found signup first" });
        }

        const isPasswordCorrect = bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "password invalid" })
        }

        const token = jwt.sign({ _id: existingUser._id }, JWT_SECRET, {
            expiresIn: "30s"
        })

        console.log(String(existingUser._id));
        res.clearCookie('sahith');
        res.clearCookie('jwt')
        // res.cookie(String(existingUser._id) , token , {
        //     // path : "/",
        //     expires : new Date(Date.now() + 1000 * 30),
        //     httpOnly : true,
        //     sameSite : "lax"
        // });
        return res.status(200).json({ message: "Successfully Logged in", token, user: existingUser });
    }
    catch (error) {
        console.log(error);
        res.json(error);

    };

}

const verifyToken = (req, res, next) => {
    // const cookies = req.headers.cookie;
    const cookies = req.cookies;
    console.log(cookies);
    // const headers = req.headers["authorization"];
    // const token = headers.split(" ")[1];
    // if (!token) {
    //     res.status(404).json({ message: "No" });
    // }
    // jwt.verify(String(token), JWT_SECRET, (err, user) => {
    //     if (err) {
    //         return res.status(400).json({ message: "Invalid Token" });
    //     }
    //     req._id = user._id;
    //     next();
    // })
};

const getUser = async (req, res, next) => {
    const _id = req._id;
    try {
        const user = await UserModel.findOne({ _id }, "-password");
        console.log(user);
        return res.json(user);
    }
    catch (error) {
        console.log(error);
    };
}

module.exports = { signup, login, verifyToken, getUser };