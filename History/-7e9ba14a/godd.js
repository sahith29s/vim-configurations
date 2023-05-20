// // Using Node.js `require()`
// const mongoose = require('mongoose');

// // Using ES6 imports
// import mongoose from 'mongoose';



// import { createRequire } from 'https://deno.land/std/node/module.ts';
// const require = createRequire(import.meta.url);

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test')
//   .then(() => console.log('Connected!'));dd


// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

var db = mongoose.connection;
db.on("error", console.error.blind(console))