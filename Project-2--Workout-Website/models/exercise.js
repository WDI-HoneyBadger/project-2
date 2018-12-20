var db = require('../db/config');

var exercise = {};

exercise.getAll = function(req, res, next){
  db.manyOrNone("SELECT * FROM exercises;")
    .then(function(result){
      res.locals.exercise = result;
      next()
    })
    .catch(function(error){
      console.log(error);
      next()
    })
}

exercise.create = function(req, res, next){
    console.log("\n\n\n\n\n xx create");
    db.one(`INSERT INTO exercises(exercise_name, reps, no_sets, describe, img, video , trainer_id) VALUES($1, $2, $3, $4, $5, $6 , $7) RETURNING id;`,
           [req.body.name, parseInt(req.body.reps), parseInt(req.body.noOfSets), req.body.describe, req.body.img  , req.body.video , parseInt(req.body.trainer)])
      .then(function(result){

        console.log(result);
        res.locals.exercise_id = result.id;
        next();
      }).catch(function(error){
        console.log(error);
        next();
      })
  }

  exercise.find = function (req, res, next) {

    console.log('find' )
  db.one("SELECT * FROM exercises WHERE id=$1;", [req.params.id])
    .then(function (result) {

      console.log('find' , result  )
      res.locals.exercises = result;
      next();
    })
    .catch(function (error) {
      console.log(error);
      next();
    })
}

exercise.update = function(req, res, next) {
    console.log(req.body)
    db.one(`UPDATE exercises SET exercise_name = $1, reps = $2, no_sets = $3, describe = $4, img = $5, video = $6
     WHERE id = $7 RETURNING id;`, [req.body.exercise_name, req.body.reps, req.body.noOfSets, req.body.describe, req.body.img || '', req.body.video || '',  req.params.id])
     .then(function(result){
       console.log(`table updated for ${result.id}`);
       res.locals.exercise_id = result.id;
       next();
     })
     .catch(function(error){
      console.log("this is update\n" , error);
      next();
    })
  }


  exercise.delete = function(req, res, next){
    db.none('DELETE FROM exercises WHERE id=$1;', [req.params.id])
      .then(function(){
        console.log('successful delete');
        next();
      })
      .catch(function(error){
        console.log(error);
        next();
      })
    }
  

module.exports = exercise;