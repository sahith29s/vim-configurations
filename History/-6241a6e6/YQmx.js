// require paths

const express = require("express");
const Detail = require("../mongoose/models/Detail")
const Service = require("../mongoose/models/Service")
const Slider = require("../mongoose/models/Slider")
const router = express.Router()

// connect to mongo Db
require("../mongoose/connectDB/connectDB")()


// const createDocument = async () =>{
//     Detail.create({
//         brandName : "sahith", 
//         brandIconUrl : "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

//         links : [
//             {
//                 label : "Home",
//                 url : "/"
//             },

//             {
//                 label : "Services",
//                 url : "/services"
//             },

//             {
//                 label : "Gallery",
//                 url : "/gallery"
//             },

//             {
//                 label : "About",
//                 url : "/about"
//             },

//             {
//                 label : "Contact Us",
//                 url : "/contact-us"
//             },


//         ]
//     })
// };





// const createDocument = async () => {
//     Slider.create([

//         {
//             title: "Learn java",
//             subTitle: "good",
//             imageUrl: "https://images.pexels.com/photos/4385547/pexels-photo-4385547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         },

//         {
//             title: "Learn Python",
//             subTitle: "very good",
//             imageUrl: "https://images.pexels.com/photos/4385547/pexels-photo-4385547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         },

//         {
//             title: "Learn javaScript",
//             subTitle: "amazing",
//             imageUrl: "https://images.pexels.com/photos/4385547/pexels-photo-4385547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//         }

//     ])
// };

// createDocument()


const createDocument = async () =>{
    Service.create({
        
    })
     

};


router.get("/", async (req, res) => {
    const details = await Detail.findOne({ _id: "645c6d28e28b50fe041b0364" })
    const fetchedSlider = await Slider.find()
    res.render("index", {
        details: details,
        fetchedSlider : fetchedSlider
    })
})










module.exports = router
