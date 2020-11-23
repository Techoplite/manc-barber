const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const uri = process.env.ATLAS_URI;
mongoose.set('useCreateIndex', true)
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully...");
})

const bookingsRouter = require('./routes/bookings');

app.use('/bookings', bookingsRouter);


app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
});