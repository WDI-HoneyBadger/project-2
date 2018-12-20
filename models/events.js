var db = require('../db/config');

var event = {};

// create a method that gets all the data from the "events" table
event.getAll = function (req, res, next) {
  db.manyOrNone("SELECT * FROM events;")  // query the database
    .then(function (result) {   // return the data as a javascript object "result"
      res.locals.events = result;  // save that javascript object to the response object in res.locals.events
      next();  // move on to the next command
    })
    .catch(function(error){ // if there is an issue when getting all 
      console.log(error); // log the error
      next(); // move on to the next command
    })
}
event.update= function(req,res){

    db.one('UPDATE events SET title=$1, image =$2, describtion=$3 WHERE id=$4 RETURN id;')
    then(function(result){
console.log('update')
res.locals.events_id= result.id;
next();

    })
    .catch(function(error){
        console.log(error)
    })
}

event.find = function (req, res, next) {
  db.one('SELECT * FROM "events" WHERE id = $1;', [req.params.id])
    .then(function(result){
      res.locals.events = result;
      console.log(result);
      next();
    })
    .catch(function(error){
      console.log(error);
      next();
    })
}

event.create = function(req, res, next){
    var eventsData ={
        title :req.body.title,
        image :req.body.image,
        describtion :req.body.describtion
    }

  db.one(`INSERT INTO events(title, image, describtion) VALUES($1, $2, $3) RETURNING id;`,[eventsData.title ,eventsData.image ,eventsData.describtion])
    .then(function(result){
      res.locals.events_id = result.id;
      next();
    }).catch(function(error){
      console.log(error);
      next();
    })
}
event.delete=function(req,res,next){
    db.oneOrNone("SELECT * FROM events WHERE id = $1;", [req.params.id])
      .then(function(result){
        res.locals.events = result;
        next();
      })
      .catch(function(error){
        console.log(error);
        next();
      })
}
event.event_volenteers=function(req,res,next){

  db.none(`INSERT INTO event_volenteers (event_id) VALUES ($1);` , [req.params.id])
   .then(function(result){
      console.log(" a new volunteer joined")
      next();
    })
     .catch(function(error){
      console.log(error);
     next();   
    })
}

event.getVolenteersCount = function(req,res,next){

  db.one(`SELECT COUNT(*) from event_volenteers where event_id=$1` , [req.params.id])
   .then(function(result){
      console.log("number of volunteers " ,result) 
      res.locals.volunteerCount = result.count;
      next();
    })
     .catch(function(error){
      console.log(error);
     next();   
    })
}
module.exports = event;
