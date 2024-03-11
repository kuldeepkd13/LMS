// db.js
const mongoose = require("mongoose");
require('dotenv').config();


if (!process.env.MongoURL) {
    console.error("MongoURL is not defined in environment variables.");
    process.exit(1); 
}

const mongoURL = process.env.MongoURL;


mongoose.connect(mongoURL)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
        process.exit(1); 
    });


module.exports = mongoose.connection;
