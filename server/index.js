var express_require = require("express");
var server = express_require();
server.listen(8080,function(err){
   if(err) console.log("Error connecting to the server on PORT 8080")
   else console.log("Successfully connected to the server on PORT 8080")
});
module.exports = server;