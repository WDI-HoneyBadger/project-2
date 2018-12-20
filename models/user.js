var db = require('../db/config');
var bcrypt = require('bcrypt');
var user = {};

user.getAll = function(req, res, next){
  db.manyOrNone("SELECT * FROM users;")
    .then(function(result){
      res.locals.user = result;
      next()
    })
    .catch(function(error){
      console.log(error);
      next()
    })
}

user.find = function (req, res, next) {
  db.one("SELECT * FROM users WHERE id=$1;", [req.params.id])
    .then(function (result) {
      console.log('FINDING');
      res.locals.user = result;
      next();
    })
    .catch(function (error) {
      console.log(error);
      next();
    })
}


user.create = function (req, res, next) {
    console.log(req.body);
    var createUser = {
        username : req.body.username.toLowerCase(),
        password : bcrypt.hashSync(req.body.password,10),
        fname : req.body.fname,
        lname : req.body.lname, 
        art_kind :req.body.art_kind
    }
    db.one('INSERT INTO users(username , password , fname , lname , art_kind) VALUES ($1,$2,$3,$4,$5) RETURNING id;',
          [createUser.username,createUser.password,createUser.fname,createUser.lname,createUser.art_kind])
      .then(function (result) {
          req.session.user = result;
        res.locals.id = result.id;
        next();
      })
      .catch(function (error) {
        console.log(error);
        next();
      })
  }

  user.update = function (req, res, next) {
    var updateUser = {
        username : req.body.username,
        password : req.body.password,
        fname : req.body.fname,
        lname : req.body.lname, 
        art_kind :req.body.art_kind,
        id : req.params.id
    }

    console.log('update object:');
    console.log(updateUser);

    db.one('UPDATE users SET username=$1, fname=$2, lname=$3 WHERE id=$4 RETURNING id;',
    [updateUser.username,updateUser.fname,updateUser.lname,updateUser.id])
      .then(function (result) {
        console.log('**********');
        console.log(result);
        res.locals.id = result.id;
        next();
      })
      .catch(function (error) {
        console.log(error);
        next();
      })
  }
  

user.delete = function (req, res, next) {
  console.log('made it here')
    db.none('DELETE FROM users WHERE id=$1;',[req.params.id])
      .then(function () {
        next();
      })
      .catch(function (error) {
        console.log(error);
        next();
      })
  }
  
module.exports = user;