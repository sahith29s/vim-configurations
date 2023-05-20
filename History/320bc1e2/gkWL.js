const express = require('express');

const path = require('path');
const app = express();

app.set("view engine" , "hbs")

app.get('/', (req, res) => {
    res.render('index');

})


const server = app.listen(3000, () => {
    console.log(`The application started on port ${server.address().port}`);
});