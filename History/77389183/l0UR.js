require("dotenv/config")
const { isAuth } = require("./isAuth")
const { sendAccessToken, sendRefreshToken, createAccessToken, createRefreshToken } = require("./tokens")

const { fakeDB } = require("./fakeDB")
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

// all the dependies
const cookieParser = require("cookie-parser")
const cors = require("cors")
const { verify } = require("jsonwebtoken")
const { hash, compare } = require("bcryptjs")

app.use(cookieParser())
app.use(cors())
// app.use(cors({origin : "http://localhost:5173" , credentials : true}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send("Hi");
});


app.listen(port, () => {
    console.log(`app running on port ${port}`)
})

app.post("/register", async (req, res) => {
    const { email, password } = req.body

    try {

        // checking if the user exists in the fake db or not
        const user = fakeDB.find(user => user.email === email)
        if (user) throw new Error("User already exists")

        // if user doesn't exits in fake db then we are gonna insert  that data in fake db
        const handshedPassword = await hash(password, 10) // hashing the password

        fakeDB.push({
            id: fakeDB.length,
            email,
            password: handshedPassword
        })
        res.send({ message: "User created successfully" })
        console.log(fakeDB)

    } catch (error) {
        res.send({
            error: error.message
        })

    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body

    try {
        // checking if the user exists with the email in fake db or not
        const user = fakeDB.find(item => item.email == email)
        if (!user) throw new Error("User does not exists")

        // copmare the password with stored password in fake db
        const valid = await compare(password, user.password)
        if (!valid) throw new Error("Password not correct")

        // creating tokens?
        const accessToken = createAccessToken(user.id)
        const refreshToken = createRefreshToken(user.id)

        // put the refreshTokens in the database
        user.refreshToken = refreshToken
        sendRefreshToken(res, refreshToken)
        sendAccessToken(res, req, accessToken)


    } catch (error) {
        res.send({ error: error.message })

    }
})

app.post("/logout", (req, res) => {
    res.clearCookie("refreshToken")
    res.send({ message: "Logged Out" })
})

app.post("/protected", async (req, res) => {
    try {
        const userId = isAuth(req)
        if (userId !== null){
            res.send({
                data : "This is protected data"
            })
        }
    }
    catch (error) {



    }
})