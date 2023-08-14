// import { NextResponse } from "next/server";

import { NextResponse } from "next/server";

// const { MongoClient } = require("mongodb");
// export async function GET(request) {


//     // Replace the uri string with your connection string.
//     const uri = "mongodb+srv://sahith:sahith@sahith.ny17mw5.mongodb.net/";

//     const client = new MongoClient(uri);

//     async function run() {
//         try {
//             const database = client.db('sahith');
//             const movies = database.collection('stateManagement');

//             // Query for a movie that has the title 'Back to the Future'
//             const query = {};
//             const movie = await movies.findOne(query);
//             return NextResponse.json({ "name": "sahith" })

//             console.log(movie);
//         } finally {
//             // Ensures that the client will close when you finish/error
//             await client.close();
//         }
//     }
//     run().catch(console.dir);
// }

export async function GET(request){
    return NextResponse({})
}