var express = require('express');
var router = express.Router();
var User = require('../../models');
router.post('/signup',function(req,res,next){
  var user = new User();
  user.profile.name = req.body.name;
  user.password = req.body.password;
  user.email = req.body.email; 

  User.findOne({email:req.body.email},function(err,userexist){
      if(userexist) {
          req.flash('errors', req.body.email + "  "  + "already exist");
          return res.redirect('/signup');
      }else{
          user.save(function(err,user){
              if(err) return next(err);
              //req.flash('errors',"new user has been created");
              return res.redirect('http://www.google.com');
          });
      }
  });
});
module.exports = router;