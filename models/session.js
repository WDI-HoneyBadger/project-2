var bcrypt = require('bcrypt');
var db = require('../db/config');

var session = {};

session.create = function(req, res, next){
    console.log(req.body.username.toLowerCase());
  var username = req.body.username.toLowerCase();
  console.log(username)
  db.one("SELECT * FROM users WHERE username = $1;", [username])
    .then(function(result){
      if(bcrypt.compareSync(req.body.password, result.password)){
        req.session.user = result;
      }
      next();
    })
    .catch(function(error){
      console.log(error);
      next();
    })
}

session.delete = function(req, res, next){
  req.session.user = null;
  next();
}

module.exports = session;