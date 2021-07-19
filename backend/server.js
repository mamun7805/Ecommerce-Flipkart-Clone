const express = require('express');
const app = express();
const env = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



// routes
// const userRouter = require('./src/routes/user');

//initialize environment variable
env.config();
app.use(express.json())
app.use(bodyParser.urlencoded({extended : false}));

// db connection establising
const db_string = "mongodb://127.0.0.1:27017/test"; 
mongoose.connect(db_string, { useUnifiedTopology : true, useNewUrlParser : true}, (err)=> {
    console.log("DB is connected")
})


// app.use("/api", userRouter);


app.listen(process.env.PORT, ()=> {
    console.log("Server is running...")
})

