var db = require('../db/dbconfig');
var country = {};

country.getAll = function(req, res, next){
    db.manyOrNone('SELECT * FROM countries;')
      .then(function(result){
          console.log(result);
        res.locals.countries = result;
        next()
      })
      .catch(function(error){
        console.log(error);
        next()
      })
  }

  country.find = function (req, res, next) {
    db.one('SELECT * FROM countries WHERE id=$1;', [req.params.id])
      .then(function (result) {
        console.log(result);
        res.locals.countries = result;
        next();
      })
      .catch(function (error) {
        console.log(error);
        next();
      })
  }

  module.exports = country;