// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import * as fs from "fs";
const fs = require("fs")


export default function handler(req, res) {
  // fs.readFile("blogdata/how-to-learn-flask.json","utf-8", (err, data)=>{
  //   console.log(data)
  //   res.status(200).json(JSON.parse(data ))
    
  // }) 
  
  fs.readdir(`blogdata/${req.query.slug}.json`, "utf-8", (err, data)=>{
    if(err){
      res.status(500).json({error : "No such blog found"})
    }
    console.log(data)  
    res.status(200).json(JSON.parse(data ))
  })
}
