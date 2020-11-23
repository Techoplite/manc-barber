const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());



const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully...");
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}...`);
});