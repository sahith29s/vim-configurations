const express = require("express");
const router = express.Router();
const MensRanking = require("../models/mens");


router.post("/mens", async (req, res) => {
    try {
        await MensRanking.create(req.body)
        res.send(req.body)
        console.log(req.body);

    } catch (error) {
        console.log(error);

    }
})

// get all 
router.get("/mens", async (req, res) => {

    try {
        const result = await MensRanking.find();
        console.log(result);
        res.send(result);
    }
    catch(error){
    
    console.log(error);
    
    };
    
});


// find only one
router.get("/mens/:id", async (req, res) => {

    try {
        const result = await MensRanking.find({_id : req.params.id});
        console.log(result);
        res.send(result);
    }
    catch(error){
    
    console.log(error);
    
    };
    
});


// update by patch
router.patch("/mens/:id", async (req, res) => {

    try {
        const result = await MensRanking.updateOne({_id : req.params.id}, {"name" : "sahith"});
        console.log(result);
        res.send(result);
    }
    catch(error){
    
    console.log(error);
    
    };
    
});


// delete 
router.delete("/mens/:id", async (req, res) => {

    try {
        const result = await MensRanking.deleteOne({_id : req.params.id});
        console.log(result);
        res.send(result);
    }
    catch(error){
    
    console.log(error);
    
    };
    
});


module.exports = router