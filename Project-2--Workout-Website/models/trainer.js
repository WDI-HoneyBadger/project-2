var db = require('../db/config');

var trainer = {};

trainer.getAll = function(req, res, next){
  db.manyOrNone("SELECT * FROM trainers;")
    .then(function(result){
      res.locals.trainers = result;
      console.log(result);
      next()
    })
    .catch(function(error){
      console.log(error);
      next()
    })
}

trainer.create = function(req, res, next){
    console.log("create");
    db.one(`INSERT INTO trainers(name, phone_number, rate, img, info) VALUES($1, $2, $3, $4, $5) RETURNING id;`,
           [req.body.name, req.body.phone_number, req.body.rate, req.body.img, req.body.info])
      .then(function(result){

        console.log(result);
        res.locals.trainer_id = result.id;
        next();
      }).catch(function(error){
        console.log(error);
        next();
      })
  }


  trainer.delete = function(req, res, next){
    db.none('DELETE FROM trainers WHERE id=$1;', [req.params.id])
      .then(function(){
        console.log('successful delete');
        next();
      })
      .catch(function(error){
        console.log(error);
        next();
      })
    }

    trainer.find = function (req, res, next) {
        db.one("SELECT * FROM trainers WHERE id=$1;", [req.params.id])
          .then(function (result) {
            res.locals.trainers = result;
            next();
          })
          .catch(function (error) {
            console.log(error);
            next();
          })
      }

      trainer.update = function(req, res, next) {
        console.log(req.body)
        db.one(`UPDATE trainers SET name = $1, phone_number = $2, rate = $3, img = $4, info = $5
         WHERE id = $6 RETURNING id;`, [req.body.name, req.body.phone_number, req.body.rate, req.body.img,req.body.info, req.params.id ])
         .then(function(result){
           console.log(`table updated for ${result.id}`);
           res.locals.trainer_id = result.id;
           next();
         })
         .catch(function(error){
          console.log("this is update\n" , error);
          next();
        })
      }

module.exports = trainer;