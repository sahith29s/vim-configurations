// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import * as fs from "fs";
// const fs = require("fs")
import * as fs from 'fs'


export default async function handler(req, res) {
  
  // fs.readdir(`blogdata`,  (err, data)=>{
  //   if(err){
  //     res.status(500).json({error : "No such blog found"})
  //   }
  //   console.log(req.query.slug)  
  //   res.status(200).json(data)
  // })
  let data = await fs.promises.readdir("blogdata")
  let arr = []
  for( let item of data){
    let myFileRead = await fs.promises.readFile(`blogdata/${item}`)
    console.log(myFileRead)
    arr.push(myFileRead)
  }
  res.status(200).json(arr)
  

    
}
