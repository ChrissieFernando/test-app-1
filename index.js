// Require modules
var express = require('express');
var app = require('./server');
var morgan = require('morgan');
var mongoose = require('mongoose');
var connection = require('./user');
var mainRouter = require('./routes/main');
var userRouter = require('./routes/user');
var User = require('./models');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var ejsMate = require('ejs-mate');

//database connection
var connect = 'mongodb://'+ connection.username +':'+ connection.password + '@ds028310.mlab.com:28310/application';
mongoose.connect(connect,function(err){
    if(err) console.log("Error connecting to database")
    else console.log("Successfully connected to database")
  }
)

// Middleware setup
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.engine('ejs', ejsMate);
app.set('view engine','ejs');
app.use('/',mainRouter);
app.use('/',userRouter);