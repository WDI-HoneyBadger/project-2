var db = require('../db/dbconfig');
var city = {};

city.getAll = function(req, res, next){
    db.manyOrNone('SELECT * FROM cities;')
      .then(function(result){
          console.log(result);
        res.locals.cities = result;
        next()
      })
      .catch(function(error){
        console.log(error);
        next()
      })
  }

  city.find = function (req, res, next) {
    db.one('SELECT * FROM cities WHERE id=$1;', [req.params.id])
      .then(function (result) {
        res.locals.cities = result;
        next();
      })
      .catch(function (error) {
        console.log(error);
        next();
      })
  }

  city.findByCountry = function (req, res, next) {
    db.manyOrNone("SELECT * FROM cities WHERE country_id=$1;", [req.params.id])
      .then(function (result) {
        res.locals.cities = result;
        next();
      })
      .catch(function (error) {
        console.log(error);
        next();
      })
  }

  city.create = function (req, res, next) {
    console.log(req.body);
    db.one('INSERT INTO cities(name, image, location, population, history,sightseeing,activites,facilities,cities_nearby, country_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING country_id;',
          [req.body.name, req.body.image, req.body.location, req.body.population, req.body.history, req.body.sightseeing, req.body.activites, req.body.facilities, req.body.cities_nearby, req.body.country_id])
      .then(function (result) {
        res.locals.countryId = result.country_id;
        next();
      })
      .catch(function (error) {
        console.log(error);
        next();
      })
  }

  city.update = function (req, res, next) {
    db.one('UPDATE cities SET name=$1, image=$2, location=$3, population=$4, history=$5,sightseeing=$6,activites=$7,facilities=$8,cities_nearby=$9 WHERE id=$10 RETURNING country_id;'
          [req.body.name, req.body.image, req.body.location, req.body.population, req.body.history, req.body.sightseeing, req.body.activites, req.body.facilities, req.body.cities_nearby,req.params.id])
      .then(function (result) {
        res.locals.countryId = result.id;
        next();
      })
      .catch(function (error) {
        console.log(error);
        next();
      })
  }


  city.delete = function (req, res, next) {
    db.none('DELETE FROM cities WHERE id=$1;', [req.params.id])
      .then(function () {
          console.log('scseefuly delete');
        next();
      })
      .catch(function (error) {
        console.log(error);
        next();
      })
  }
  module.exports = city;