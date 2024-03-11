const express = require("express");
const dbConnection = require("./config/db"); 
const { userRoute } = require("./routes/userRoute");
const cors = require('cors');
const { lectureRoute } = require("./routes/lectureRoute");
const { cousreRoute } = require("./routes/courseRoute");



require('dotenv').config();

const Port = process.env.port || 8080

const app = express();
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.status(200).send("LMS")
})

app.use("/user" , userRoute)
app.use("/lecture" , lectureRoute)
app.use("/course" , cousreRoute)


app.listen(Port, () => {
    try {
        dbConnection; 
    } catch (error) {
        console.error("MongoDB connection error:", error);
        console.log("Db is not Connected");
    }
    console.log(`Server is running at ${Port}`);
});