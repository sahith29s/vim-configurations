const express = require("express");
const loginData = require("../../mongoose/models/login")
require("../../mongoose/DB/connectMonoogse")()
const router = express.Router()
const signUpData = require("../../mongoose/models/signup")
const contactModel = require("../../mongoose/models/contactModel")


router.use(express.json())
router.use(express.urlencoded({ extended: false }))

router.get("/", (req, res) => {
    res.render("index")
})

router.get("/contact", (req, res) => {
    res.render("contact")

})

router.get("/signup", (req, res) => {
    res.render("signUp")
})

router.get("/app", (req, res) => {
    res.send("app")
})

router.get("/login", (req, res) => {
    res.render("login")
})

router.get("*", (req, res) => {
    res.render("404NotFound")
})




// for the feedback 
router.post("/api/contact", async (req, res) => {
    let signUpDataForChecking = signUpData.findOne({
        email: req.body.email
    })

    if (signUpDataForChecking.email == req.body.email && signUpDataForChecking.username == req.body.username) {

        let newContactModel = new contactModel({
            username: req.body.username,
            email: req.body.email,
            message: req.body.message
        })
        await newContactModel.save()

        res.send("index")

    }

    else{
        res.render("pleaseSignUpFirst")
    }
})




// for signup 

router.post("/api/signup", async (req, res) => {
    let newSignUpData = new signUpData({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        confirm_password: req.body.confirm_password,
    })

    await newSignUpData.save()
    res.render("index")

})


// for login


router.post("/api/login", async (req, res) => {
    let signUpDataForChecking = await signUpData.findOne({
        email: req.body.email
    })
    console.log(signUpDataForChecking);
    console.log(signUpDataForChecking.email == req.body.email);
    console.log(signUpDataForChecking.username == req.body.username);
    console.log(signUpDataForChecking.password == req.body.);

    if (signUpDataForChecking.email == req.body.email && signUpDataForChecking.username == req.body.username && signUpDataForChecking.password == req.body.password) {

        let newLoginData = new loginData({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        await newLoginData.save()
        res.render("index")
    }

    else {
        res.render("pleaseSignUpFirst")
    }

})



module.exports = router