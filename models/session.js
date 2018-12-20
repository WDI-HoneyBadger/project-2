var bcrypt = require('bcrypt');
var db = require('../db/config');

var session = {};

session.create = function(req, res, next){
  var email = req.body.email.toLowerCase();
  db.one("SELECT * FROM users WHERE email = $1;", [email])
    .then(function(result){
      if(bcrypt.compareSync(req.body.password, result.password_digest)){
        req.session.users = result;
      }
      next();
    })
    .catch(function(error){
      console.log(error);
      next();
    })
}

session.delete = function(req, res, next){
  req.session.users = null;
  next();
}

module.exports = session;