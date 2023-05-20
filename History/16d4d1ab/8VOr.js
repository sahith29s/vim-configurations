const express = require("express");
const bcrypt = require("bcrypt");
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
    try {
        let signUpDataForChecking = await signUpData.findOne({
            email: req.body.email
        })

        if (signUpDataForChecking.email == req.body.email && signUpDataForChecking.username == req.body.username) {

            let newContactModel = new contactModel({
                username: req.body.username,
                email: req.body.email,
                message: req.body.message
            })
            await newContactModel.save()

            res.render("index")

        }

    } catch (error) {
        res.render("pleaseSignUpFirst")

    }

})




// for signup 

router.post("/api/signup", async (req, res) => {
    try {
        if (req.body.password == req.body.confirm_password) {
            let newSignUpData = new signUpData({
                username: req.body.username,
                email: req.body.email,
                password: await bcrypt.hash(req.body.password, 10)
            })

            await newSignUpData.save()
            res.render("index")
        }

    } catch (error) {
        res.render("pleaseSignUpFirst")
    }
})


// for login


router.post("/api/login", async (req, res) => {
    try {
        let signUpDataForChecking = await signUpData.findOne({
            email: req.body.email
        })
        console.log(signUpDataForChecking);
        bcrypt.compare(signUpDataForChecking.password, req)

        if (signUpDataForChecking.email == req.body.email && signUpDataForChecking.username == req.body.username && signUpDataForChecking.password == req.body.password) {

            let newLoginData = new loginData({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            })
            await newLoginData.save()
            res.render("index")
        }


    } catch (error) {

        res.render("pleaseSignUpFirst")
    }

})



module.exports = router