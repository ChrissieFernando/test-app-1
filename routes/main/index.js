var express = require('express');
var router = express.Router();
var app = express();

router.use("/",function(req,res,next){
   console.log("Url : "+req.url + "   Status Code : " + res.statusCode);
   next();
});
router.get('/',function(req,res){
    res.render('main/home');
});
router.get('/home',function(req,res){
    res.render('main/home');
});
router.get('/about',function(req,res){
    res.render('main/about');
});
router.get('/signup',function(req,res){
    res.render('accounts/signup',{
        alert: req.flash('errors')
    });
})
module.exports = router;