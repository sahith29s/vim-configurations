const express = require("express")
const port = process.env.PORT || 3000
const app = express ()
const http = require("http").createServer(app)

app.get("/", async (req , res) => { 
    res.send("sahith")
});

http.listen(port, () =>{
    console.log(`Listening on port ${port}`);
})
