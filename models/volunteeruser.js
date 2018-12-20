var db = require('../db/config');
var bcrypt = require('bcrypt');
var users = {};



users.getAll = function (req, res, next) {
    db.manyOrNone("SELECT * FROM volunteeruser;")  // query the database
      .then(function (result) {   // return the data as a javascript object "result"
        res.locals.volunteeruser = result;  // save that javascript object to the response object in res.locals.events
        next();  // move on to the next command
      })
      .catch(function(error){ // if there is an issue when getting all 
        console.log(error); // log the error
        next(); // move on to the next command
      })
  }
  users.update= function(req,res){
  
      db.one(`UPDATE volunteeruser SET firstname=$1, lastname =$2, email=$3, password=$4, image=$5 WHERE id=$6 RETURNING id;`)
      then(function(result){
  console.log('update')
  console.log(`table updated ${result.id} `)
  res.locals.volunteeruser_id= result.id;
  next();
  
      })
      .catch(function(error){
          console.log(error)
      })
  }
  
  users.find = function (req, res, next) {
  
    db.oneOrNone("SELECT * FROM volunteeruser WHERE id = $1;", [ req.params.id])
      .then(function(result){
        res.locals.users = result;
        next();
      })
      .catch(function(error){
        console.log(error);
        next();
      })
  }
  
  users.create = function(req, res, next){
      var usersData ={
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email.toLowerCase(),
          password: bcrypt.hashSync(req.body.password, 10),
          image: req.body.image
      }

  console.log(req.body)
  
    db.one(`INSERT INTO volunteeruser(firstname, lastname, email, password, image) VALUES($1 ,$2 ,$3, $4, $5) RETURNING *;`,[usersData.firstname ,usersData.lastname ,usersData.email ,usersData.password ,usersData.image])
      .then(function(result){
        console.log(result)
        console.log(req.session);
        req.session.volunteeruser=result;
        res.locals.userId = result.id;
        
        next();
      }).catch(function(error){
        console.log(error);
        next();
      })
  }
  
  
  users.delete=function(req,res,next){
  
      db.oneOrNone("SELECT * FROM events WHERE id = $1;", [req.params.id])
        .then(function(result){
          res.locals.volunteeruser = result;
          next();
        })
        .catch(function(error){
          console.log(error);
          next();
        })
  }

  users.event_volenteers=function(req,res,next){
 
    db.one(`INSERT INTO event_volenteers (volunteer_id, event_id) VALUES ($1, $2) RETURNING event_id;` , [req.session.user.id, req.params.id])
      .then(function(result){
        res.locals.volunteer_id = result.volunteer_id;
        next();
      })
      .catch(function(error){
        console.log(error);
        next();
      })
    }

  module.exports = users;