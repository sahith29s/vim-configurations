const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
app.use(express.static("static"));
const multer = require("multer");
// const upload = multer({ dest: "uploads/" })

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })

console.log();

app.post("/profile", upload.single('avatar'), function (req, res, next) {
    res.redirect("/");
})

app.get("/", (req, res) => {
    res.sendFile("index.html")
});


app.listen(port, () => {
    console.log(`app running on port `, port)
})