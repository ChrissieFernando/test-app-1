// Require modules
var app = require('./server');
var router = require('./routes');
var morgan = require('morgan');
var mongoose = require('mongoose');
var connection = require('./user');

//models 
var User = require('./models');

//postman
var bodyParser = require('body-parser');

//view engine
var ejs = require('ejs');
var ejsMate = require('ejs-mate');

//database connection
var connect = 'mongodb://'+ connection.username +':'+connection.password+ '@ds028310.mlab.com:28310/application';
mongoose.connect(connect,function(err){
    if(err) console.log("Error connecting to database")
    else console.log("Successfully connected to database")
  }
)

// Middleware setup
app.use(morgan('dev'));
app.use('/',router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.engine('ejs', ejsMate);
app.set('view engine','ejs');

app.post('/create-user',function(req,res,next){
  var user = new User();
  user.profile.name = req.body.name;
  user.password = req.body.password;
  user.email = req.body.email; 
  user.save(function(err){
    if(err) res.json("error while creating a new user");
    else res.json("successfully created a new user bro");
  });
});