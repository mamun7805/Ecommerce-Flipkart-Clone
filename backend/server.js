const express = require('express');
const app = express();
const env = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// routes
const adminRoutes = require('./src/routes/admin/auth');
const userRoutes = require('./src/routes/auth');


//initialize environment variable
env.config();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors())
app.use(morgan('tiny'));


// db connection establising
const db_string = "mongodb+srv://mamun4023:Roshid01734754023@ecommerce.ee3jx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const db_string = "mongodb://127.0.0.1:27017/test";
mongoose.connect(db_string, { useUnifiedTopology : true, useNewUrlParser : true, useCreateIndex : true}, (err)=> {
    console.log("DB is connected")
})

app.use('/api/admin', adminRoutes);
app.use("/api", userRoutes);



app.listen(process.env.PORT, ()=> {
    console.log("Server is running...")
})

