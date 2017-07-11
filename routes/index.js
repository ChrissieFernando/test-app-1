var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
router.use("/",function(req,res,next){
   console.log("Url : "+req.url + "   Status Code : " + res.statusCode);
   next();
});
router.get('/',function(req,res){
    res.send("This is my homepage");
});
router.get('/about',function(req,res){
    res.send("This is my aboutpage");
});
module.exports = router;