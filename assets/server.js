


var http= require('http');
const express =require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const dotenv= require('dotenv');
const path=require('path');


const homeRoutes= require('./route/routers');
//const addUserRoute= require('./routers/home');


const app = express();
const PORT= process.env.PORT|| 8081;

//database connection
const connectDB = require('./connection/connection');
dotenv.config({path:'config.env'});
connectDB();




app.set("view engine","ejs");

app.use(express.static(__dirname+'/asstes'));
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//start server
app.use('/',homeRoutes);
//app.use('/',addUserRoute);
app.listen(PORT);





