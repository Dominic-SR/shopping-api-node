const express = require("express");
const morgan = require('morgan');
var indexRouter = require('./routes/index.routes');
const cors = require('cors');
var cookieParser = require('cookie-parser');
const passport = require('passport')

const app = express();
app.use(express.json({limit: '50mb'}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
const { ExtractJwt, Strategy } = require('passport-jwt');

app.listen(5000,()=>{
    console.log("Port Run Localhost:6000");
})