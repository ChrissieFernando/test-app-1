var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var schema = mongoose.Schema;
var newUser = new schema({
  email : {type : String ,unique : true ,lowercase : true },
  password : {type : String},
  profile : {
    name : {type : String , default : "Noname"},
    picture : {type : String , default : "No Picture"}
  },
  address : String,
  history : [{
    date : Date,
    paid : {type: Number, default : 0}
  }]
});
// before saving the schema to database
newUser.pre('save',function(next){
  var user = this;
  if(!user.isModified('password')) return next();
  else bcrypt.genSalt(10,function(err,salt){
    if(err) return next(err);
    else bcrypt.hash(user.password,salt,null,function(err,hash){
      if(err) return next(err);
      else user.password = hash;
      next();
    })
  })
});
//compare password in the database and the one user type in
newUser.methods.comparePassword = function(password){
  return bcrypt.compareSync(password,this.password);
}
module.exports = mongoose.model('newUser',newUser);