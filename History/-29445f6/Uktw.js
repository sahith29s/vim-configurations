const express = require("express")
const port = process.env.PORT || 3000
const app = express ()
const http = require("http").createServer(app)


http.listen(port, () =>{
    console.log(`Listening on port ${port}`);
})
