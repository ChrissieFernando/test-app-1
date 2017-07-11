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
          console.log(req.body.email + "  "  + "already exist");
          return res.redirect('/signup');
      }else{
          user.save(function(err,user){
              if(err) return next(err);
              res.json("new user has been created");
          });
      }
  });
//   user.save(function(err){
//     if(err) res.json("error while creating a new user");
//     else res.json("successfully created a new user bro");
//   });
});
module.exports = router;